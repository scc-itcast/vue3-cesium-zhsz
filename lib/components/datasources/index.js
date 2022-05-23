'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./custom/index.js');
var index$2 = require('./czml/index.js');
var index$3 = require('./geojson/index.js');
var index$4 = require('./kml/index.js');

const components = [index$1["default"], index$2["default"], index$3["default"], index$4["default"]];
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
const VcDatasourceCustom = index$1["default"];
const VcDatasourceCzml = index$2["default"];
const VcDatasourceGeojson = index$3["default"];
const VcDatasourceKml = index$4["default"];

exports.customDatasourceProps = index$1.customDatasourceProps;
exports.czmlDatasourceProps = index$2.czmlDatasourceProps;
exports.geojsonDatasourceProps = index$3.geojsonDatasourceProps;
exports.kmlDatasourceProps = index$4.kmlDatasourceProps;
exports.VcDatasourceCustom = VcDatasourceCustom;
exports.VcDatasourceCzml = VcDatasourceCzml;
exports.VcDatasourceGeojson = VcDatasourceGeojson;
exports.VcDatasourceKml = VcDatasourceKml;
exports["default"] = index;
//# sourceMappingURL=index.js.map
