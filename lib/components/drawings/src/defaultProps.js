'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultOpts = require('../../../composables/use-drawing/defaultOpts.js');
var props = require('../../../composables/use-drawing/props.js');
var util = require('../../../utils/util.js');

const pointDrawingActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-drawing-point"
});
const polylineDrawingActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-drawing-polyline"
});
const polygonDrawingActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-drawing-polygon"
});
const rectangleDrawingActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-drawing-rectangle"
});
const pinDrawingActionDefault = Object.assign({}, defaultOpts.actionOptions, {
  icon: "vc-icons-drawing-pin"
});
const pinDrawingDefault = Object.assign({}, defaultOpts.pointDrawingDefault, {
  pointOpts: Object.assign({}, defaultOpts.pointOptsDefault, {
    show: false
  }),
  billboardOpts: defaultOpts.billboardOptsDefault,
  labelOpts: Object.assign({}, defaultOpts.labelOptsDefault, {
    pixelOffset: [0, -30],
    verticalOrigin: 1
  })
});
const mainFabDefault = Object.assign({}, defaultOpts.actionOptions, {
  direction: "right",
  icon: "vc-icons-drawing-button",
  activeIcon: "vc-icons-drawing-button",
  verticalActionsAlign: "center",
  hideIcon: false,
  persistent: false,
  modelValue: true,
  hideActionOnClick: false,
  color: "info"
});
const drawingType = ["pin", "point", "polyline", "polygon", "rectangle", "regular", "circle"];
const isValidDrawingType = (drawings) => {
  let flag = true;
  drawings.forEach((drawing) => {
    if (!drawingType.includes(drawing)) {
      console.error(`VueCesium: unknown drawing type: ${drawing}`);
      flag = false;
    }
  });
  return flag;
};
const drawingsProps = {
  ...props.useDrawingFabProps,
  drawings: {
    type: Array,
    default: () => drawingType,
    validator: isValidDrawingType
  },
  mainFabOpts: {
    type: Object,
    default: () => mainFabDefault
  },
  pinActionOpts: {
    type: Object,
    default: () => pinDrawingActionDefault
  },
  pinDrawingOpts: {
    type: Object,
    default: () => pinDrawingDefault
  },
  pointActionOpts: {
    type: Object,
    default: () => pointDrawingActionDefault
  },
  pointDrawingOpts: {
    type: Object,
    default: () => defaultOpts.pointDrawingDefault
  },
  polylineActionOpts: {
    type: Object,
    default: () => polylineDrawingActionDefault
  },
  polylineDrawingOpts: {
    type: Object,
    default: () => defaultOpts.polylineDrawingDefault
  },
  polygonActionOpts: {
    type: Object,
    default: () => polygonDrawingActionDefault
  },
  polygonDrawingOpts: {
    type: Object,
    default: () => defaultOpts.polygonDrawingDefault
  },
  rectangleActionOpts: {
    type: Object,
    default: () => rectangleDrawingActionDefault
  },
  rectangleDrawingOpts: {
    type: Object,
    default: () => defaultOpts.rectangleDrawingDefault
  },
  circleActionOpts: {
    type: Object,
    default: () => defaultOpts.circleDrawingActionDefault
  },
  circleDrawingOpts: {
    type: Object,
    default: () => defaultOpts.circleDrawingDefault
  },
  regularActionOpts: {
    type: Object,
    default: () => defaultOpts.regularDrawingActionDefault
  },
  regularDrawingOpts: {
    type: Object,
    default: () => defaultOpts.regularDrawingDefault
  }
};
const defaultOptions = util.getDefaultOptionByProps(drawingsProps);

exports.defaultOptions = defaultOptions;
exports.drawingType = drawingType;
exports.drawingsProps = drawingsProps;
exports.mainFabDefault = mainFabDefault;
exports.pinDrawingActionDefault = pinDrawingActionDefault;
exports.pinDrawingDefault = pinDrawingDefault;
exports.pointDrawingActionDefault = pointDrawingActionDefault;
exports.polygonDrawingActionDefault = polygonDrawingActionDefault;
exports.polylineDrawingActionDefault = polylineDrawingActionDefault;
exports.rectangleDrawingActionDefault = rectangleDrawingActionDefault;
//# sourceMappingURL=defaultProps.js.map
