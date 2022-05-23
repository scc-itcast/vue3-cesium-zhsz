'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultOpts = require('../../../composables/use-drawing/defaultOpts.js');
var props = require('../../../composables/use-drawing/props.js');
var util = require('../../../utils/util.js');

const sightlineAnalysisActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-analysis-sightline"
});
const sightlineAnalysisDefault = Object.assign({}, defaultOpts.segmentDrawingDefault, {
  polylineOpts: Object.assign({}, defaultOpts.polylineOptsDefault, {
    colors: ["#51ff00", "red"]
  }),
  primitiveOpts: Object.assign({}, defaultOpts.polylinePrimitiveOptsDefault, {
    appearance: {
      type: "PolylineColorAppearance"
    },
    depthFailAppearance: {
      type: "PolylineColorAppearance"
    }
  }),
  sightlineType: "polyline"
});
const viewshedAnalysisActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-analysis-viewshed"
});
const viewshedAnalysisDefault = Object.assign({}, defaultOpts.polygonDrawingDefault, {
  pointOpts: Object.assign({}, defaultOpts.pointOptsDefault, {
    show: false
  }),
  polylineOpts: Object.assign({}, defaultOpts.polylineOptsDefault, {
    width: 15
  }),
  primitiveOpts: Object.assign({}, defaultOpts.polylinePrimitiveOptsDefault, {
    show: false,
    appearance: {
      type: "PolylineMaterialAppearance",
      options: {
        material: {
          fabric: {
            type: "PolylineArrow",
            uniforms: {
              color: [255, 255, 0, 255]
            }
          }
        }
      }
    },
    depthFailAppearance: {
      type: "PolylineMaterialAppearance",
      options: {
        material: {
          fabric: {
            type: "PolylineArrow",
            uniforms: {
              color: [255, 255, 0, 255]
            }
          }
        }
      }
    }
  }),
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1e3,
    hideDelay: 1e3,
    move: Object.assign({}, defaultOpts.editorOptsDefault),
    removeAll: Object.assign({}, defaultOpts.editorOptsDefault, {
      icon: "vc-icons-delete"
    })
  },
  ellipsoidOpts: {
    show: true,
    horizontalViewAngle: 90,
    verticalViewAngle: 60,
    color: "#fff"
  }
});
const mainFabDefault = Object.assign({}, defaultOpts.actionOptions, {
  direction: "right",
  icon: "vc-icons-analysis-button",
  activeIcon: "vc-icons-analysis-button",
  verticalActionsAlign: "center",
  hideIcon: false,
  persistent: false,
  modelValue: true,
  hideActionOnClick: false,
  color: "info"
});
const analysisType = ["sightline", "viewshed"];
const isValidAnalysisType = (drawings) => {
  let flag = true;
  drawings.forEach((drawing) => {
    if (!analysisType.includes(drawing)) {
      console.error(`VueCesium: unknown analysis type: ${drawing}`);
      flag = false;
    }
  });
  return flag;
};
const analysesProps = {
  ...props.useDrawingFabProps,
  analyses: {
    type: Array,
    default: () => analysisType,
    validator: isValidAnalysisType
  },
  mainFabOpts: {
    type: Object,
    default: () => mainFabDefault
  },
  sightlineActionOpts: {
    type: Object,
    default: () => sightlineAnalysisActionDefault
  },
  sightlineAnalysisOpts: {
    type: Object,
    default: () => sightlineAnalysisDefault
  },
  viewshedActionOpts: {
    type: Object,
    default: () => viewshedAnalysisActionDefault
  },
  viewshedAnalysisOpts: {
    type: Object,
    default: () => viewshedAnalysisDefault
  }
};
const defaultOptions = util.getDefaultOptionByProps(analysesProps);

exports.analysesProps = analysesProps;
exports.analysisType = analysisType;
exports.defaultOptions = defaultOptions;
exports.mainFabDefault = mainFabDefault;
exports.sightlineAnalysisActionDefault = sightlineAnalysisActionDefault;
exports.sightlineAnalysisDefault = sightlineAnalysisDefault;
exports.viewshedAnalysisActionDefault = viewshedAnalysisActionDefault;
exports.viewshedAnalysisDefault = viewshedAnalysisDefault;
//# sourceMappingURL=defaultProps.js.map
