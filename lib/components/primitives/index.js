'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./classification/index.js');
var index$2 = require('./ground/index.js');
var index$3 = require('./ground-polyline/index.js');
var index$4 = require('./model/index.js');
var index$6 = require('./primitive/index.js');
var index$7 = require('./tileset/index.js');
var index$5 = require('./particle/index.js');

const components = [index$1["default"], index$2["default"], index$3["default"], index$4["default"], index$6["default"], index$7["default"], index$5["default"]];
const install = (app) => {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp);
  });
};
var index = {
  install
};
components.forEach((cmp) => {
  cmp["install"] = (app) => {
    app.component(cmp.name, cmp);
  };
});
const VcPrimitiveClassification = index$1["default"];
const VcPrimitiveGround = index$2["default"];
const VcPrimitiveGroundPolyline = index$3["default"];
const VcPrimitiveModel = index$4["default"];
const VcPrimitive = index$6["default"];
const VcPrimitiveTileset = index$7["default"];
const VcPrimitiveParticle = index$5["default"];

exports.classificationPrimitiveProps = index$1.classificationPrimitiveProps;
exports.groundPrimitiveProps = index$2.groundPrimitiveProps;
exports.groundPolylinePrimitiveProps = index$3.groundPolylinePrimitiveProps;
exports.modelPrimitiveProps = index$4.modelPrimitiveProps;
exports.primitiveProps = index$6.primitiveProps;
exports.tilesetPrimitiveProps = index$7.tilesetPrimitiveProps;
exports.particlePrimitiveProps = index$5.particlePrimitiveProps;
exports.VcPrimitive = VcPrimitive;
exports.VcPrimitiveClassification = VcPrimitiveClassification;
exports.VcPrimitiveGround = VcPrimitiveGround;
exports.VcPrimitiveGroundPolyline = VcPrimitiveGroundPolyline;
exports.VcPrimitiveModel = VcPrimitiveModel;
exports.VcPrimitiveParticle = VcPrimitiveParticle;
exports.VcPrimitiveTileset = VcPrimitiveTileset;
exports["default"] = index;
//# sourceMappingURL=index.js.map
