'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _ImageryLayer = index["default"];
const VcLayerImagery = _ImageryLayer;

exports.imageryLayerProps = index.imageryLayerProps;
exports.VcLayerImagery = VcLayerImagery;
exports["default"] = _ImageryLayer;
//# sourceMappingURL=index.js.map
