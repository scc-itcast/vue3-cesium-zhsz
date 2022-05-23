import { actionOptions, pointDrawingDefault, pointOptsDefault, billboardOptsDefault, labelOptsDefault, polylineDrawingDefault, polygonDrawingDefault, rectangleDrawingDefault, circleDrawingActionDefault, circleDrawingDefault, regularDrawingActionDefault, regularDrawingDefault } from '../../../composables/use-drawing/defaultOpts.mjs';
import { useDrawingFabProps } from '../../../composables/use-drawing/props.mjs';
import { getDefaultOptionByProps } from '../../../utils/util.mjs';

const pointDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-point"
});
const polylineDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-polyline"
});
const polygonDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-polygon"
});
const rectangleDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-rectangle"
});
const pinDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: "vc-icons-drawing-pin"
});
const pinDrawingDefault = Object.assign({}, pointDrawingDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
  }),
  billboardOpts: billboardOptsDefault,
  labelOpts: Object.assign({}, labelOptsDefault, {
    pixelOffset: [0, -30],
    verticalOrigin: 1
  })
});
const mainFabDefault = Object.assign({}, actionOptions, {
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
  ...useDrawingFabProps,
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
    default: () => pointDrawingDefault
  },
  polylineActionOpts: {
    type: Object,
    default: () => polylineDrawingActionDefault
  },
  polylineDrawingOpts: {
    type: Object,
    default: () => polylineDrawingDefault
  },
  polygonActionOpts: {
    type: Object,
    default: () => polygonDrawingActionDefault
  },
  polygonDrawingOpts: {
    type: Object,
    default: () => polygonDrawingDefault
  },
  rectangleActionOpts: {
    type: Object,
    default: () => rectangleDrawingActionDefault
  },
  rectangleDrawingOpts: {
    type: Object,
    default: () => rectangleDrawingDefault
  },
  circleActionOpts: {
    type: Object,
    default: () => circleDrawingActionDefault
  },
  circleDrawingOpts: {
    type: Object,
    default: () => circleDrawingDefault
  },
  regularActionOpts: {
    type: Object,
    default: () => regularDrawingActionDefault
  },
  regularDrawingOpts: {
    type: Object,
    default: () => regularDrawingDefault
  }
};
const defaultOptions = getDefaultOptionByProps(drawingsProps);

export { defaultOptions, drawingType, drawingsProps, mainFabDefault, pinDrawingActionDefault, pinDrawingDefault, pointDrawingActionDefault, polygonDrawingActionDefault, polylineDrawingActionDefault, rectangleDrawingActionDefault };
//# sourceMappingURL=defaultProps.mjs.map
