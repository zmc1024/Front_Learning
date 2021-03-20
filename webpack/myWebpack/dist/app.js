(function(graph) {
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
    require('./src/index.js')
  })({"./src/index.js":{"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\n\nvar _minus = require(\"./minus.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// 主模块\nvar sum = (0, _add[\"default\"])(1, 2);\nvar division = (0, _minus.minus)(2, 1);\nconsole.log(sum);\nconsole.log(division);","deps":{"./add.js":"./src/add.js","./minus.js":"./src/minus.js"}},"./src/add.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _default = function _default(a, b) {\n  return a + b;\n};\n\nexports[\"default\"] = _default;","deps":{}},"./src/minus.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\n\nvar minus = function minus(a, b) {\n  return a - b;\n};\n\nexports.minus = minus;","deps":{}}})