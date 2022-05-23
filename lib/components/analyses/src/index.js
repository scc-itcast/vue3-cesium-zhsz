'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var defaultProps = require('./defaultProps.js');
require('../../../utils/util.js');
var useDrawingFab = require('../../../composables/use-drawing/use-drawing-fab.js');
var index = require('./sightline/index.js');
var index$1 = require('./viewshed/index.js');
var emits$1 = require('../../../utils/emits.js');
var index$2 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

const emits = {
  ...emits$1.drawingEmit,
  fabUpdated: (value) => true
};
var Analyses = vue.defineComponent({
  name: "VcAnalyses",
  props: defaultProps.analysesProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcAnalyses";
    const { t } = index$2.useLocale();
    const options = {};
    const clearActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.clearActionOpts, props.clearActionOpts));
    const mainFabOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.mainFabOpts, props.mainFabOpts));
    const sightlineActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.sightlineActionOpts, props.sightlineActionOpts));
    const sightlineAnalysisOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.sightlineAnalysisOpts, props.sightlineAnalysisOpts));
    const viewshedActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.viewshedActionOpts, props.viewshedActionOpts));
    const viewshedAnalysisOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.viewshedAnalysisOpts, props.viewshedAnalysisOpts));
    options.sightlineActionOpts = sightlineActionOpts;
    options.sightlineAnalysisOpts = sightlineAnalysisOpts;
    options.viewshedActionOpts = viewshedActionOpts;
    options.viewshedAnalysisOpts = viewshedAnalysisOpts;
    options.clearActionOpts = clearActionOpts;
    const drawingActionInstances = vue.computed(() => {
      return props.analyses.map((analysisName) => ({
        name: analysisName,
        type: "analysis",
        actionStyle: {
          background: options[`${shared.camelize(analysisName)}ActionOpts`].color,
          color: options[`${shared.camelize(analysisName)}ActionOpts`].textColor
        },
        actionClass: `vc-analysis-${analysisName} vc-analysis-button`,
        actionRef: vue.ref(null),
        actionOpts: options[`${shared.camelize(analysisName)}ActionOpts`],
        cmp: getDrawingCmp(analysisName),
        cmpRef: vue.ref(null),
        cmpOpts: options[`${shared.camelize(analysisName)}AnalysisOpts`],
        tip: options[`${shared.camelize(analysisName)}ActionOpts`].tooltip.tip || t(`vc.analysis.${shared.camelize(analysisName)}.tip`),
        isActive: false
      }));
    });
    function getDrawingCmp(name) {
      switch (name) {
        case "sightline":
          return index["default"];
        case "viewshed":
          return index$1["default"];
        default:
          return void 0;
      }
    }
    return (_a = useDrawingFab["default"](props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, "analysis")) == null ? void 0 : _a.renderContent;
  }
});

exports.analysesProps = defaultProps.analysesProps;
exports.VcAnalysisSightline = index["default"];
exports.VcAnalysisViewshed = index$1["default"];
exports["default"] = Analyses;
//# sourceMappingURL=index.js.map
