'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./billboard/index.js');
var index$2 = require('./box/index.js');
var index$h = require('./corridor/index.js');
var index$3 = require('./cylinder/index.js');
var index$4 = require('./ellipse/index.js');
var index$5 = require('./ellipsoid/index.js');
var index$6 = require('./label/index.js');
var index$7 = require('./model/index.js');
var index$8 = require('./path/index.js');
var index$9 = require('./plane/index.js');
var index$a = require('./point/index.js');
var index$b = require('./polygon/index.js');
var index$c = require('./polyline/index.js');
var index$d = require('./polylineVolume/index.js');
var index$e = require('./rectangle/index.js');
var index$f = require('./tileset/index.js');
var index$g = require('./wall/index.js');

const components = [
  index$1["default"],
  index$2["default"],
  index$h["default"],
  index$3["default"],
  index$4["default"],
  index$5["default"],
  index$6["default"],
  index$7["default"],
  index$8["default"],
  index$9["default"],
  index$a["default"],
  index$b["default"],
  index$c["default"],
  index$d["default"],
  index$e["default"],
  index$f["default"],
  index$g["default"]
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
const VcGraphicsBillboard = index$1["default"];
const VcGraphicsBox = index$2["default"];
const VcGraphicsCorridor = index$h["default"];
const VcGraphicsCylinder = index$3["default"];
const VcGraphicsEllipse = index$4["default"];
const VcGraphicsEllipsoid = index$5["default"];
const VcGraphicsLabel = index$6["default"];
const VcGraphicsModel = index$7["default"];
const VcGraphicsPath = index$8["default"];
const VcGraphicsPlane = index$9["default"];
const VcGraphicsPoint = index$a["default"];
const VcGraphicsPolygon = index$b["default"];
const VcGraphicsPolyline = index$c["default"];
const VcGraphicsPolylineVolume = index$d["default"];
const VcGraphicsRectangle = index$e["default"];
const VcGraphicsTileset = index$f["default"];
const VcGraphicsWall = index$g["default"];

exports.billboarGraphicsProps = index$1.billboarGraphicsProps;
exports.boxGraphicsProps = index$2.boxGraphicsProps;
exports.cylinderGraphicsProps = index$3.cylinderGraphicsProps;
exports.ellipseGraphicsProps = index$4.ellipseGraphicsProps;
exports.ellipsoidGraphicsProps = index$5.ellipsoidGraphicsProps;
exports.labelGraphicsProps = index$6.labelGraphicsProps;
exports.modelGraphicsProps = index$7.modelGraphicsProps;
exports.pathGraphicsProps = index$8.pathGraphicsProps;
exports.planeGraphicsProps = index$9.planeGraphicsProps;
exports.pointGraphicsProps = index$a.pointGraphicsProps;
exports.polygonGraphicsProps = index$b.polygonGraphicsProps;
exports.polylineGraphicsProps = index$c.polylineGraphicsProps;
exports.polylineVolumeGraphicsProps = index$d.polylineVolumeGraphicsProps;
exports.rectangleGraphicsProps = index$e.rectangleGraphicsProps;
exports.tilesetGraphicsProps = index$f.tilesetGraphicsProps;
exports.wallGraphicsProps = index$g.wallGraphicsProps;
exports.VcGraphicsBillboard = VcGraphicsBillboard;
exports.VcGraphicsBox = VcGraphicsBox;
exports.VcGraphicsCorridor = VcGraphicsCorridor;
exports.VcGraphicsCylinder = VcGraphicsCylinder;
exports.VcGraphicsEllipse = VcGraphicsEllipse;
exports.VcGraphicsEllipsoid = VcGraphicsEllipsoid;
exports.VcGraphicsLabel = VcGraphicsLabel;
exports.VcGraphicsModel = VcGraphicsModel;
exports.VcGraphicsPath = VcGraphicsPath;
exports.VcGraphicsPlane = VcGraphicsPlane;
exports.VcGraphicsPoint = VcGraphicsPoint;
exports.VcGraphicsPolygon = VcGraphicsPolygon;
exports.VcGraphicsPolyline = VcGraphicsPolyline;
exports.VcGraphicsPolylineVolume = VcGraphicsPolylineVolume;
exports.VcGraphicsRectangle = VcGraphicsRectangle;
exports.VcGraphicsTileset = VcGraphicsTileset;
exports.VcGraphicsWall = VcGraphicsWall;
exports["default"] = index;
//# sourceMappingURL=index.js.map
