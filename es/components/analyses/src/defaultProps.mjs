import { actionOptions, segmentDrawingDefault, polylineOptsDefault, polylinePrimitiveOptsDefault, polygonDrawingDefault, pointOptsDefault, editorOptsDefault } from '../../../composables/use-drawing/defaultOpts.mjs';
import { useDrawingFabProps } from '../../../composables/use-drawing/props.mjs';
import { getDefaultOptionByProps } from '../../../utils/util.mjs';

const sightlineAnalysisActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-analysis-sightline"
});
const sightlineAnalysisDefault = Object.assign({}, segmentDrawingDefault, {
  polylineOpts: Object.assign({}, polylineOptsDefault, {
    colors: ["#51ff00", "red"]
  }),
  primitiveOpts: Object.assign({}, polylinePrimitiveOptsDefault, {
    appearance: {
      type: "PolylineColorAppearance"
    },
    depthFailAppearance: {
      type: "PolylineColorAppearance"
    }
  }),
  sightlineType: "polyline"
});
const viewshedAnalysisActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-analysis-viewshed"
});
const viewshedAnalysisDefault = Object.assign({}, polygonDrawingDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
  }),
  polylineOpts: Object.assign({}, polylineOptsDefault, {
    width: 15
  }),
  primitiveOpts: Object.assign({}, polylinePrimitiveOptsDefault, {
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
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
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
const mainFabDefault = Object.assign({}, actionOptions, {
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
  ...useDrawingFabProps,
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
const defaultOptions = getDefaultOptionByProps(analysesProps);

export { analysesProps, analysisType, defaultOptions, mainFabDefault, sightlineAnalysisActionDefault, sightlineAnalysisDefault, viewshedAnalysisActionDefault, viewshedAnalysisDefault };
//# sourceMappingURL=defaultProps.mjs.map
