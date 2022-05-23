'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./post-process-stage/index.js');
var index$3 = require('./post-process-stage-scan/index.js');
var index$2 = require('./post-process-stage-collection/index.js');

const components = [index$1["default"], index$3["default"], index$2["default"]];
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
const VcPostProcessStage = index$1["default"];
const VcPostProcessStageScan = index$3["default"];
const VcPostProcessStageCollection = index$2["default"];

exports.postProcessStageProps = index$1.postProcessStageProps;
exports.postProcessStageScanProps = index$3.postProcessStageScanProps;
exports.postProcessStageCollectionProps = index$2.postProcessStageCollectionProps;
exports.VcPostProcessStage = VcPostProcessStage;
exports.VcPostProcessStageCollection = VcPostProcessStageCollection;
exports.VcPostProcessStageScan = VcPostProcessStageScan;
exports["default"] = index;
//# sourceMappingURL=index.js.map
