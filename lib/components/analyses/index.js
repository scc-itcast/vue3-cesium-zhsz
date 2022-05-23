'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$3 = require('./flood/index.js');
var index$4 = require('./src/index.js');
var index$1 = require('./src/sightline/index.js');
var index$2 = require('./src/viewshed/index.js');
var defaultProps = require('./src/defaultProps.js');

const components = [index$3["default"], index$4["default"]];
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
const VcAnalysisFlood = index$3["default"];
const VcAnalyses = index$4["default"];

exports.VcAnalysisSightline = index$1["default"];
exports.VcAnalysisViewshed = index$2["default"];
exports.analysesProps = defaultProps.analysesProps;
exports.VcAnalyses = VcAnalyses;
exports.VcAnalysisFlood = VcAnalysisFlood;
exports["default"] = index;
//# sourceMappingURL=index.js.map
