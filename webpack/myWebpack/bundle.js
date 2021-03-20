const fs = require('fs')    //读取操作文件...
const path = require('path')    //读取文件路径
const parser = require('@babel/parser')   //解析AST语法树
const traverse = require('@babel/traverse').default   // 遍历AST语法树，生成关系图谱
const babel = require('@babel/core')    // 转换成es5代码

// 转换代码、 生成依赖
const getModuleInfo = (file) => {
  //读入文件
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module'    //表示我们要解析的是ES模块
  })

  // 依赖收集
  const deps = {}
  //遍历AST抽象语法树
  traverse(ast, {
    //获取通过import引入的模块
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file)    //拿到file的绝对路径
      const adspath = './' + path.join(dirname, node.source.value)
      //保存所依赖的模块
      deps[node.source.value] = adspath.split(path.sep).join('/');
    }
  })

  // es6 -> es5 转换AST语法树
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']  // es6 转 es5 生成的模块类型
  })
  
  //该文件名    该文件所依赖的模块集合(键值对存储)    转换后的代码
  const moduleInfo = {file, deps, code}
  return moduleInfo
}


// 递归所有的模块，生成依赖图谱。
const parseModules = (file) => {
  const entry = getModuleInfo(file)
  const temp = [entry]
  const depsGraph = {}

  for(let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if(deps) {
      for(const key in deps) {
        if(deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))   //递归，关键代码，目的是将入口模块及其所有相关的模块放入数组
        }
      }
    }
  }

  // 打理格式化数据，生成图谱
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      code: moduleInfo.code,
      deps: moduleInfo.deps
    }
  })

  console.log(depsGraph);    // '路径': {code, deps}
  return depsGraph
}


// 生成代码字符串，处理 require   exports
const bundle = (file) => {
  //要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object],显然不行
  const depsGraph = JSON.stringify(parseModules(file))
  return `(function(graph) {
    function require(file) {
      function absRequire(relParth) {
        return require(graph[file].deps[relParth])
      }

      var exports = {};

      (function(require, exports, code) {
        eval(code)
      })(absRequire, exports, graph[file].code)

      return exports
    }
    require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index2.js')
console.log(content);

fs.mkdirSync('./dist2')
fs.writeFileSync('./dist2/app2.js', content)


/**
 * const bundle = (file) => {
  //要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object],显然不行
  const depsGraph = JSON.stringify(parseModules(file))
    return `(function(graph) {
      //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
      function require(file) {
        //absRequire的本质是拿到依赖包的exports变量
        function absRequire(relParth) {   // 把相对路径弥补成绝对路径
          return require(graph[file].deps[relParth])
        }

        var exports = {};

        (function(require, exports, code) {   // require 只不过是形参，代表的就是absRequire
          eval(code)    // code里面的require执行其实际上就是absRequire的执行
        })(absRequire, exports, graph[file].code)

        return exports    //函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁
      }
      require('${file}')
    })(${depsGraph})`
  }
 */

