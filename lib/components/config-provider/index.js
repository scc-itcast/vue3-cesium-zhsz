'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _ConfigProvider = index["default"];
const VcConfigProvider = _ConfigProvider;

exports.VcConfigProvider = VcConfigProvider;
exports["default"] = _ConfigProvider;
//# sourceMappingURL=index.js.map
