'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _Entity = index["default"];
const VcEntity = _Entity;

exports.entityProps = index.entityProps;
exports.VcEntity = VcEntity;
exports["default"] = _Entity;
//# sourceMappingURL=index.js.map
