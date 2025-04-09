
const drawAPI = {
    unstable: {
      content:"",
      filename:"",
      nonce: () => globalThis.vscodenoce,
      /**
       * 
       * @param {String} text text
       * @param {Number} control moving number of the cursor
       */
      editCurrentLine({ text, file, ...rest }) {
        console.log({
          text,
          file,
          command: 'editCurrentLine',
        });
      },
      setTextContent(content) {
        console.log(content);
        drawAPI.unstable.content=content;
      },
      setContent(content) {
        drawAPI.unstable.filename=content.name
        drawAPI.unstable.setTextContent(content.value)
        document.querySelector('#blocklyinput').value=content.value
        window.buildBlocks()
      },
      custom(content) {
        console.log(content);
        if (content.operate) {
          content.operate.forEach(drawAPI.unstable.customOperate);
        }
      },
      customOperate(operate) {
        console.log(operate);
        if (operate.type === 'script') {
          let func = new Function(operate.function)
          func()
        }
      },
    },
}
globalThis.drawAPI = drawAPI

globalThis.addEventListener('message', event => {

    const message = event.data // The JSON data our extension sent
      || event.detail; // for debug in chrome
  
    switch (message.command) {
      case 'currentLine':
        drawAPI.unstable.setContent(message.content);
        break;
      case 'custom':
        drawAPI.unstable.custom(message.content);
        break;
    }
});

(function () {
    if (typeof acquireVsCodeApi !== 'undefined') {
      console.log('inject acquireVsCodeApi')
      document.querySelector('#importbutton').style.display='none'
      document.querySelector('#savebutton').style.display=''
      const vscode = acquireVsCodeApi();
      drawAPI.unstable.editCurrentLine = ({ text, file, ...rest }) => {
        vscode.postMessage({
          text,
          file,
          command: 'editCurrentLine',
        })
      }
      vscode.postMessage({ command: 'requestCurrentLine' })
      vscode.postMessage({ command: 'requestCustom' })
      globalThis.editor_mounted=()=>{
        vscode.postMessage({ command: 'requestCurrentLine' })
      }
    }
}());

globalThis.clickReturn=function () {
  console.log('save')
  if (drawAPI.unstable.filename!=='') {
    drawAPI.unstable.editCurrentLine({
      file: drawAPI.unstable.filename,
      text: document.querySelector('#blocklyinput').value
    })
  }else{
    alert('没有有效的文件名')
  }
}


