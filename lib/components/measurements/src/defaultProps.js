'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('../../../utils/util.js');
require('../../../shared/index.js');
var defaultOpts = require('../../../composables/use-drawing/defaultOpts.js');
var props = require('../../../composables/use-drawing/props.js');
var MeasureUnits = require('../../../shared/src/MeasureUnits.js');

const distanceMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-distance"
});
const distanceMeasurementDefault = Object.assign({}, defaultOpts.segmentDrawingDefault, {
  labelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [10, 10]
  }),
  measureUnits: new MeasureUnits["default"](),
  decimals: {
    distance: 2,
    angle: 2
  },
  locale: void 0,
  autoUpdateLabelPosition: true
});
const componentDistanceMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-component-distance"
});
const componentDistanceMeasurementDefault = Object.assign({}, distanceMeasurementDefault, {
  showComponentLines: true,
  xLabelOpts: defaultOpts.labelOptsDefault,
  xAngleLabelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: 0,
    pixelOffset: [9, 0]
  }),
  yLabelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: -1,
    pixelOffset: [-9, 0]
  }),
  yAngleLabelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    verticalOrigin: -1,
    pixelOffset: [0, 9]
  })
});
const polylineMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-polyline-distance"
});
const polylineMeasurementDefault = Object.assign({}, defaultOpts.polylineDrawingDefault, {
  measureUnits: new MeasureUnits["default"](),
  labelOpts: defaultOpts.labelOptsDefault,
  labelsOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [5, 5]
  }),
  decimals: {
    distance: 2,
    angle: 2
  },
  showAngleLabel: true,
  showDistanceLabel: true,
  locale: void 0,
  loop: false,
  autoUpdateLabelPosition: true
});
const horizontalMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-horizontal-distance"
});
const horizontalMeasurementDefault = Object.assign({}, polylineMeasurementDefault, {
  dashLineOpts: {
    width: 2
  },
  dashLinePrimitiveOpts: Object.assign({}, defaultOpts.polylinePrimitiveOptsDefault, {
    appearance: {
      type: "PolylineMaterialAppearance",
      options: {
        material: {
          fabric: {
            type: "PolylineDash",
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
            type: "PolylineDash",
            uniforms: {
              color: [255, 255, 0, 255]
            }
          }
        }
      }
    }
  }),
  labelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: 1,
    pixelOffset: [10, -10]
  }),
  labelsOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [5, 5]
  }),
  showDashedLine: true
});
const verticalMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-vertical-distance"
});
const verticalMeasurementDefault = Object.assign({}, defaultOpts.segmentDrawingDefault, {
  labelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [10, 10]
  }),
  measureUnits: new MeasureUnits["default"](),
  decimals: {
    distance: 2,
    angle: 2
  },
  locale: void 0,
  autoUpdateLabelPosition: true
});
const heightMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-height-from-terrain"
});
const heightMeasurementDefault = Object.assign({}, defaultOpts.pointDrawingDefault, {
  polylineOpts: defaultOpts.polylineOptsDefault,
  labelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [10, 10]
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
  measureUnits: new MeasureUnits["default"](),
  decimals: {
    distance: 2
  },
  locale: void 0,
  primitiveOpts: defaultOpts.polylinePrimitiveOptsDefault
});
const areaMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-area"
});
const areaMeasurementDefault = Object.assign({}, defaultOpts.polygonDrawingDefault, {
  labelOpts: defaultOpts.labelOptsDefault,
  labelsOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1,
    verticalOrigin: -1,
    pixelOffset: [5, 5]
  }),
  showDistanceLabel: true,
  showAngleLabel: true,
  measureUnits: new MeasureUnits["default"](),
  decimals: {
    area: 2,
    distance: 2,
    angle: 2
  },
  loop: true,
  locale: void 0,
  autoUpdateLabelPosition: true
});
const pointMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-measure-point-coordinates"
});
const pointMeasurementDefault = Object.assign({}, defaultOpts.pointDrawingDefault, {
  heightReference: 1,
  measureUnits: new MeasureUnits["default"](),
  drawtip: {
    show: true,
    pixelOffset: [32, 48]
  },
  labelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: 0,
    pixelOffset: [10, 0]
  }),
  decimals: {
    lng: 6,
    lat: 6,
    height: 2,
    slope: 3
  },
  locale: void 0
});
const rectangleMeasurementActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-drawing-rectangle"
});
const rectangleMeasurementDefault = Object.assign({}, areaMeasurementDefault, {
  pointOpts: Object.assign({}, defaultOpts.pointOptsDefault, {
    show: false
  }),
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1e3,
    hideDelay: 1e3,
    move: Object.assign({}, defaultOpts.editorOptsDefault),
    removeAll: Object.assign({}, defaultOpts.editorOptsDefault, {
      icon: "vc-icons-delete"
    })
  },
  edge: 4,
  loop: false,
  showAngleLabel: false
});
const regularMeasurementDefault = Object.assign({}, rectangleMeasurementDefault, {
  edge: 6,
  loop: true
});
const circleMeasurementDefault = Object.assign({}, rectangleMeasurementDefault, {
  edge: 360,
  loop: true,
  showDistanceLabel: false,
  showAngleLabel: false
});
const mainFabDefault = Object.assign({}, defaultOpts.actionOptions, {
  direction: "right",
  icon: "vc-icons-measurement-button",
  activeIcon: "vc-icons-measurement-button",
  verticalActionsAlign: "center",
  hideIcon: false,
  persistent: false,
  modelValue: true,
  hideActionOnClick: false,
  color: "info"
});
const measurementType = [
  "distance",
  "component-distance",
  "polyline",
  "horizontal",
  "vertical",
  "height",
  "area",
  "point",
  "rectangle",
  "regular",
  "circle"
];
const isValidMeasurementType = (measurements) => {
  let flag = true;
  measurements.forEach((measurement) => {
    if (!measurementType.includes(measurement)) {
      console.error(`VueCesium: unknown measurement type: ${measurement}`);
      flag = false;
    }
  });
  return flag;
};
const measurementsProps = {
  ...props.useDrawingFabProps,
  measurements: {
    type: Array,
    default: () => measurementType,
    validator: isValidMeasurementType
  },
  mainFabOpts: {
    type: Object,
    default: () => mainFabDefault
  },
  distanceActionOpts: {
    type: Object,
    default: () => distanceMeasurementActionDefault
  },
  distanceMeasurementOpts: {
    type: Object,
    default: () => distanceMeasurementDefault
  },
  componentDistanceActionOpts: {
    type: Object,
    default: () => componentDistanceMeasurementActionDefault
  },
  componentDistanceMeasurementOpts: {
    type: Object,
    default: () => componentDistanceMeasurementDefault
  },
  polylineActionOpts: {
    type: Object,
    default: () => polylineMeasurementActionDefault
  },
  polylineMeasurementOpts: {
    type: Object,
    default: () => polylineMeasurementDefault
  },
  horizontalActionOpts: {
    type: Object,
    default: () => horizontalMeasurementActionDefault
  },
  horizontalMeasurementOpts: {
    type: Object,
    default: () => horizontalMeasurementDefault
  },
  verticalActionOpts: {
    type: Object,
    default: () => verticalMeasurementActionDefault
  },
  verticalMeasurementOpts: {
    type: Object,
    default: () => verticalMeasurementDefault
  },
  heightActionOpts: {
    type: Object,
    default: () => heightMeasurementActionDefault
  },
  heightMeasurementOpts: {
    type: Object,
    default: () => heightMeasurementDefault
  },
  areaActionOpts: {
    type: Object,
    default: () => areaMeasurementActionDefault
  },
  areaMeasurementOpts: {
    type: Object,
    default: () => areaMeasurementDefault
  },
  pointActionOpts: {
    type: Object,
    default: () => pointMeasurementActionDefault
  },
  pointMeasurementOpts: {
    type: Object,
    default: () => pointMeasurementDefault
  },
  rectangleActionOpts: {
    type: Object,
    default: () => rectangleMeasurementActionDefault
  },
  rectangleMeasurementOpts: {
    type: Object,
    default: () => rectangleMeasurementDefault
  },
  regularActionOpts: {
    type: Object,
    default: () => defaultOpts.regularDrawingActionDefault
  },
  regularMeasurementOpts: {
    type: Object,
    default: () => regularMeasurementDefault
  },
  circleActionOpts: {
    type: Object,
    default: () => defaultOpts.circleDrawingActionDefault
  },
  circleMeasurementOpts: {
    type: Object,
    default: () => circleMeasurementDefault
  }
};
const defaultOptions = util.getDefaultOptionByProps(measurementsProps);

exports.areaMeasurementActionDefault = areaMeasurementActionDefault;
exports.areaMeasurementDefault = areaMeasurementDefault;
exports.circleMeasurementDefault = circleMeasurementDefault;
exports.componentDistanceMeasurementActionDefault = componentDistanceMeasurementActionDefault;
exports.componentDistanceMeasurementDefault = componentDistanceMeasurementDefault;
exports.defaultOptions = defaultOptions;
exports.distanceMeasurementActionDefault = distanceMeasurementActionDefault;
exports.distanceMeasurementDefault = distanceMeasurementDefault;
exports.heightMeasurementActionDefault = heightMeasurementActionDefault;
exports.heightMeasurementDefault = heightMeasurementDefault;
exports.horizontalMeasurementActionDefault = horizontalMeasurementActionDefault;
exports.horizontalMeasurementDefault = horizontalMeasurementDefault;
exports.mainFabDefault = mainFabDefault;
exports.measurementType = measurementType;
exports.measurementsProps = measurementsProps;
exports.pointMeasurementActionDefault = pointMeasurementActionDefault;
exports.pointMeasurementDefault = pointMeasurementDefault;
exports.polylineMeasurementActionDefault = polylineMeasurementActionDefault;
exports.polylineMeasurementDefault = polylineMeasurementDefault;
exports.rectangleMeasurementActionDefault = rectangleMeasurementActionDefault;
exports.rectangleMeasurementDefault = rectangleMeasurementDefault;
exports.regularMeasurementDefault = regularMeasurementDefault;
exports.verticalMeasurementActionDefault = verticalMeasurementActionDefault;
exports.verticalMeasurementDefault = verticalMeasurementDefault;
//# sourceMappingURL=defaultProps.js.map
