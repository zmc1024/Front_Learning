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
    require('./src/index2.js')
  })({"./src/index2.js":{"code":"\"use strict\";\n\nvar _message = _interopRequireDefault(require(\"./message.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_message[\"default\"]);","deps":{"./message.js":"./src/message.js"}},"./src/message.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _word = require(\"./word.js\");\n\nvar message = \"say \".concat(_word.word);\nvar _default = message;\nexports[\"default\"] = _default;","deps":{"./word.js":"./src/word.js"}},"./src/word.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.word = void 0;\nvar word = 'hello';\nexports.word = word;","deps":{}}})