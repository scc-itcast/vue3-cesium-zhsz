'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$6 = require('./src/index.js');
var index = require('./src/pin/index.js');
var index$1 = require('./src/point/index.js');
var index$2 = require('./src/polygon/index.js');
var index$3 = require('./src/polyline/index.js');
var index$4 = require('./src/rectangle/index.js');
var index$5 = require('./src/regular/index.js');
var defaultProps = require('./src/defaultProps.js');

index$6["default"].install = (app) => {
  app.component(index$6["default"].name, index$6["default"]);
};
const _Drawings = index$6["default"];
const VcDrawings = _Drawings;

exports.VcDrawingPin = index["default"];
exports.VcDrawingPoint = index$1["default"];
exports.VcDrawingPolygon = index$2["default"];
exports.VcDrawingPolyline = index$3["default"];
exports.VcDrawingRectangle = index$4["default"];
exports.VcDrawingRegular = index$5["default"];
exports.drawingsProps = defaultProps.drawingsProps;
exports.VcDrawings = VcDrawings;
exports["default"] = _Drawings;
//# sourceMappingURL=index.js.map
