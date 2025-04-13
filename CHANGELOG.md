# Change Log

## 0.2.1 (2025-04-13)

点击碰撞盒图块也进行映射

修复pts图块没有高亮映射的bug

修复初始化后不再需要点一下图块才能激活图形到图块

点击图形后的映射, 会把图块移到视野中央

修复方块id带特殊符号时不能映射

## 0.2.0 (2025-04-11)

增加了双向的高亮提示

## 0.1.1 (2025-04-09)

如果目前是个`.at.json`文件, 读写此json
如果当前行内包含`'[^']+.at.json'`, 根据当前文件位置或vscode工作路径作为起始位置, 寻找并读写该json

调整样式以适应 vscode-webview


## 0.1.0 (2025-04-08)

Initial Project (取 vscode-markdown-tldraw-inline作为vscode拓展的底 和 AttachmentTree作为webview)
