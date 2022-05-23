'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _GeometryInstance = index["default"];
const VcGeometryInstance = _GeometryInstance;

exports.geometryInstanceProps = index.geometryInstanceProps;
exports.VcGeometryInstance = VcGeometryInstance;
exports["default"] = _GeometryInstance;
//# sourceMappingURL=index.js.map
