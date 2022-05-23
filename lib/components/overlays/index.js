'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$4 = require('./html/index.js');
var index$3 = require('./heatmap/index.js');
var index$2 = require('./echarts/index.js');
var index$5 = require('./wind/index.js');
var index$1 = require('./dynamic/index.js');

const components = [index$4["default"], index$3["default"], index$2["default"], index$5["default"], index$1["default"]];
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
const VcOverlayHtml = index$4["default"];
const VcOverlayHeatmap = index$3["default"];
const VcOverlayEcharts = index$2["default"];
const VcOverlayWind = index$5["default"];
const VcOverlayDynamic = index$1["default"];

exports.htmlOverlayProps = index$4.htmlOverlayProps;
exports.heatmapOverlayProps = index$3.heatmapOverlayProps;
exports.echartsOverlayProps = index$2.echartsOverlayProps;
exports.windmapOverlayProps = index$5.windmapOverlayProps;
exports.dynamicOverlayProps = index$1.dynamicOverlayProps;
exports.VcOverlayDynamic = VcOverlayDynamic;
exports.VcOverlayEcharts = VcOverlayEcharts;
exports.VcOverlayHeatmap = VcOverlayHeatmap;
exports.VcOverlayHtml = VcOverlayHtml;
exports.VcOverlayWind = VcOverlayWind;
exports["default"] = index;
//# sourceMappingURL=index.js.map
