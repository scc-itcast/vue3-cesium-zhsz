'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$9 = require('./src/index.js');
var index = require('./src/distance/index.js');
var index$1 = require('./src/polyline/index.js');
var index$2 = require('./src/horizontal/index.js');
var index$3 = require('./src/vertical/index.js');
var index$4 = require('./src/height/index.js');
var index$5 = require('./src/point/index.js');
var index$6 = require('./src/area/index.js');
var index$7 = require('./src/rectangle/index.js');
var index$8 = require('./src/regular/index.js');
var defaultProps = require('./src/defaultProps.js');

index$9["default"].install = (app) => {
  app.component(index$9["default"].name, index$9["default"]);
};
const _Measurements = index$9["default"];
const VcMeasurements = _Measurements;

exports.VcMeasurementDistance = index["default"];
exports.VcMeasurementPolyline = index$1["default"];
exports.VcMeasurementHorizontal = index$2["default"];
exports.VcMeasurementVertical = index$3["default"];
exports.VcMeasurementHeight = index$4["default"];
exports.VcMeasurementPoint = index$5["default"];
exports.VcMeasurementArea = index$6["default"];
exports.VcMeasurementRectangle = index$7["default"];
exports.VcMeasurementRegular = index$8["default"];
exports.measurementsProps = defaultProps.measurementsProps;
exports.VcMeasurements = VcMeasurements;
exports["default"] = _Measurements;
//# sourceMappingURL=index.js.map
