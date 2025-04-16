# AttachmentTree-vscode

附着树-vscode插件

为了改进通过参数直接计算坐标的效率, 以及实现标准化, 提供一种设计组件的机制

把基础图形放置在一个紧贴着的矩形中, 称为碰撞盒.  
每个碰撞盒再提供四个角作为附着点, 每个附着点的四个方向可以继续放置碰撞盒, 内部嵌入基础图形.  
用这样的树结构来描述图形间的位置关系.

### 文件

约定使用`.at.json`结尾的文件储存附着树

鼠标右键点Attachment进行编辑

路径尝试策略:

先看当前文件是否是`.at.json`结尾

然后看当前行是否包含`'xxx.at.json'` `"xxx.at.json"`, 提取第一个拿到的路径

如果不是绝对路径

先看该文件的路径作为基础路径找一次

不存在的话, 再以当前vscode打开的文件夹为基础路径找一次

### 构图流程

首先需要想清楚需要的结构的样子, 可以画在演草纸上  
分解成基础结构, 一般来说用减法的构造比每个局部一片片加简单  
把所有参数列出来  
把图形拼出来  
最后计算参数的依赖关系  

### 图形界面

使用了可视化编程的图形界面

图块与图形之间提供了双向映射

图块中的值都是表达式, 可以填数值或变量或者运算

### 变量定义图块

默认值可以直接使用其他变量来计算, 例如填`xx*2**0.5`  
在执行语句时如果该id的变量已经存在则不再计算.  
借此来实现传入的值覆盖默认值.  
使用其他变量来计算的场合, 该变量是传入的值时, 使用的是传入的值.  

快捷操作  
F2: 在画图图块中, 点一个值时会自动框选(蓝色背景的选中状态,假设是`50000`), 此时按F2, 该表达式会被记录下来并删除. 此时敲入变量名例如`abc`, 再按F2. 这时会自动添加一个变量定义图块被填入了`abc`值`50000`.
F3 F4: 选中状态的数值字面量(不支持变量和表达式), F3快速缩小1.1倍, F4快速放大1.1倍

(可以在vscode的设置中搜索AttachmentTree来更改快捷键绑定)

### 方向指定图块

箭头对应取上一个碰撞盒的相应的角落

### 碰撞盒放置图块

箭头对应放在附着点的哪个方向  
内部放置一个基础图形图块

### 坐标导入图块

用从已存在的图形直接提取坐标  
使用绝对坐标时指定的是相对与附着点的偏移  
使用相对坐标时指定的是相对与上一个点的偏移  

### 基础图形图块

提供了
+ 笔刷(用于导出坐标和角度)
+ 半弧, 弧顶与长边相切, 圆心在箭头指向的方向
+ 四边形, 分别指定上右下左的点距离其逆时针方向的碰撞盒的顶点的距离
+ 四边形, 分别指定上右下左的点距离其顺时针方向的碰撞盒的顶点的距离
+ 直角三角形, 直角边在箭头指向的方向
+ 矩形


