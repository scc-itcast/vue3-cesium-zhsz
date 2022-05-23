'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$2 = require('./billboard-collection/index.js');
var index$1 = require('./billboard/index.js');
var index$4 = require('./cloud-collection/index.js');
var index$3 = require('./cloud/index.js');
var index$6 = require('./label-collection/index.js');
var index$5 = require('./label/index.js');
var index$8 = require('./point-collection/index.js');
var index$7 = require('./point/index.js');
var index$c = require('./polyline-collection/index.js');
var index$a = require('./polyline/index.js');
var index$b = require('./primitive-collection/index.js');
var index$9 = require('./polygon/index.js');

const components = [
  index$2["default"],
  index$4["default"],
  index$6["default"],
  index$8["default"],
  index$c["default"],
  index$b["default"],
  index$3["default"],
  index$1["default"],
  index$5["default"],
  index$7["default"],
  index$a["default"],
  index$9["default"]
];
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
const VcCollectionBillboard = index$2["default"];
const VcCollectionCloud = index$4["default"];
const VcCollectionLabel = index$6["default"];
const VcCollectionPoint = index$8["default"];
const VcCollectionPolyline = index$c["default"];
const VcCollectionPrimitive = index$b["default"];
const VcBillboard = index$1["default"];
const VcCumulusCloud = index$3["default"];
const VcLabel = index$5["default"];
const VcPoint = index$7["default"];
const VcPolyline = index$a["default"];
const VcPolygon = index$9["default"];

exports.billboardCollectionProps = index$2.billboardCollectionProps;
exports.billboardProps = index$1.billboardProps;
exports.cloudCollectionProps = index$4.cloudCollectionProps;
exports.cumulusCloudProps = index$3.cumulusCloudProps;
exports.labelCollectionProps = index$6.labelCollectionProps;
exports.labelProps = index$5.labelProps;
exports.pointCollectionProps = index$8.pointCollectionProps;
exports.pointProps = index$7.pointProps;
exports.polylineProps = index$a.polylineProps;
exports.primitiveCollectionProps = index$b.primitiveCollectionProps;
exports.polygonProps = index$9.polygonProps;
exports.VcBillboard = VcBillboard;
exports.VcCollectionBillboard = VcCollectionBillboard;
exports.VcCollectionCloud = VcCollectionCloud;
exports.VcCollectionLabel = VcCollectionLabel;
exports.VcCollectionPoint = VcCollectionPoint;
exports.VcCollectionPolyline = VcCollectionPolyline;
exports.VcCollectionPrimitive = VcCollectionPrimitive;
exports.VcCumulusCloud = VcCumulusCloud;
exports.VcLabel = VcLabel;
exports.VcPoint = VcPoint;
exports.VcPolygon = VcPolygon;
exports.VcPolyline = VcPolyline;
exports["default"] = index;
//# sourceMappingURL=index.js.map
