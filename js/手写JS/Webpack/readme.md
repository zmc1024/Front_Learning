# 打包主要流程
  1. 读取入口文件里面的内容
  2. 分析入口文件，递归读取模块所依赖的文件内容，生成AST语法树
  3. 根据AST语法树，生成浏览器可运行的JS代码


# 具体细节
  1. 获取主模块的内容
  2. 分析模块
      - 如何转AST语法树(@bable/parser)
      - 依赖收集(@bable/traverse)
      - es6 => es5(@babel/core @babel/preset-env)
  3. 处理模块里的内容
  4. 递归所有模块
  5. 注意两个关键字： require   exports
  6. 生成最终代码