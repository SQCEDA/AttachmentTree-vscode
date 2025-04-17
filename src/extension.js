const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

function getRandomString() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
const getNonce = getRandomString;

function loadWebviewFiles(root) {
  let main = fs.readFileSync(path.join(root, 'board', 'index.html'), { encoding: 'utf8' })
  return main.replace(/ToBeReplacedByRandomToken/g, getNonce())
}
const webviewContent = loadWebviewFiles(path.join(__dirname, '..'));

/** @param {vscode.ExtensionContext} context */
function activate(context) {

  // values for webview status
  /** @type {vscode.WebviewPanel | undefined} */
  let currentPanel = undefined;

  // values for editing status
  /** @type {vscode.TextEditor | undefined} */
  let currentEditor = undefined;
  let currentLine = 0;
  let currentText = "";
  let updateHandle = undefined;

  function createNewPanel() {
    // Create and show panel
    currentPanel = vscode.window.createWebviewPanel(
      'AttachmentTree',
      'AttachmentTree Edit',
      vscode.ViewColumn.One,
      {
        // Enable scripts in the webview
        enableScripts: true,
        localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'board'))]
      }
    );

    currentPanel.webview.html = getWebviewContent(currentPanel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'board/assets'))));
    console.log(currentPanel.webview.html)
    // Handle messages from the webview
    currentPanel.webview.onDidReceiveMessage(
      message => {

        switch (message.command) {
          case 'requestCurrentLine':
            pushCurrentLine()
            return;
          case 'requestCustom':
            pushCustom()
            return;
          case 'editCurrentLine':
            setEditorText(message.text, message.file);
            return;
        }
      },
      undefined,
      context.subscriptions
    );

    currentPanel.onDidDispose(
      () => {
        if (updateHandle != undefined) {
          clearInterval(updateHandle)
          updateHandle = undefined
        }
        currentPanel = undefined;
      },
      undefined,
      context.subscriptions
    );
  }

  function showPanel() {
    currentPanel.reveal();
  }

  function getEditorText(show) {
    let currentEditor_ = currentEditor
    let currentLine_ = currentLine
    let activeTextEditor = vscode.window.activeTextEditor;
    if (activeTextEditor) {
      currentEditor_ = activeTextEditor;
    }
    if (!currentEditor_ || currentEditor_.document.isClosed) {
      if (show) vscode.window.showErrorMessage('No active line');
      return {};
    }
    currentLine_ = currentEditor_.selection.active.line

    let text = currentEditor_.document.getText(new vscode.Range(currentLine_, 0, currentLine_ + 1, 0))
    currentText = text
    // console.log(currentEditor_.document.fileName) // /home/zhaouv/e/git/github/vscode-markdown-everywhere/highlightDemo/test.m
    return { text, currentEditor_, currentLine_ }
  }

  function pushCurrentLine() {
    let { text, currentEditor_, currentLine_ } = getEditorText(true)
    if (typeof text === 'string' && currentPanel) {
      currentEditor = currentEditor_
      currentLine = currentLine_
      let filename = currentEditor.document.fileName
      let createWhenNoExist = false
      if(!filename.endsWith('.at.json')){
        let match = /['"][^'"]+\.at\.json['"]/.exec(text)
        if(match){
          let matchname=eval(match[0])
          if (path.isAbsolute(matchname)) {
            filename=matchname
            createWhenNoExist=true
          }else{
            let dir = path.dirname(filename);
            if (/loadfromlib/.exec(text)) {
              filename=path.join(dir,'../gdsql/shape/attachment',matchname);
              createWhenNoExist=true
            }else{
              filename=path.join(dir,matchname);
              if (!fs.existsSync(filename)) {
                dir=vscode.workspace.rootPath;
                let trypath=path.join(dir,matchname);
                if (fs.existsSync(trypath)) filename=trypath;
              }
            }
          }
        }else{
          vscode.window.showErrorMessage('No valid filename as .at.json');
          return;
        }
      }
      let filecontent = readFile(filename);
      if (filecontent===null) {
        if(createWhenNoExist){
          writeFile('{"type":"attachmentTree","define":[{"type":"variablenone"}],"structure":[{"type":"structurenone"}]}',filename)
        }else{
          filecontent=''
          filename=''
          vscode.window.showErrorMessage('file not exist')
        }
      }
      currentPanel.webview.postMessage({ command: 'currentLine', content: {name:filename,value:filecontent} });
    }
  }

  // write text to filename
  function writeFile(text, filename) {
    console.log('writeFile:',filename)
    // let dir = path.join(vscode.workspace.rootPath, settings.directory);
    let dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(filename, text, { encoding: 'utf8' });
  }

  // return contents of filename
  function readFile(filename) {
    if (!fs.existsSync(filename)) return null;
    return fs.readFileSync(filename, { encoding: 'utf8' });
  }

  function setEditorText(text, file) {
    if (file) {
      writeFile(text, file)
    }

    // if (!currentEditor || currentEditor.document.isClosed) {
    //   vscode.window.showErrorMessage('The text editor has been closed');
    //   return;
    // }
  }

  function pushCustom() {
    currentPanel.webview.postMessage({ command: 'custom', content: { operate: vscode.workspace.getConfiguration('AttachmentTree')['customized']} });
  }


  context.subscriptions.push(
    vscode.commands.registerCommand('AttachmentTree.editCurrentLineAsAttachmentTree', () => {
      if (currentPanel) {
        showPanel()
      } else {
        createNewPanel()
      }
      pushCurrentLine()
    })
  );

}
exports.activate = activate;

function getWebviewContent(cdnpath) {
  return webviewContent.replaceAll('./assets',cdnpath)
}