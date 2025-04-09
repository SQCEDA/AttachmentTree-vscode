# AttachmentTree-vscode

路径尝试策略:

先看当前文件是否是.at.json结尾

然后看当前行是否包含'xxx.at.json' "xxx.at.json", 提取第一个拿到的路径

如果不是绝对路径

先看该文件的路径作为基础路径找一次

不存在的话, 再以当前vscode打开的文件夹为基础路径找一次

