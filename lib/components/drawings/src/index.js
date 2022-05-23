'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var defaultProps = require('./defaultProps.js');
require('../../../utils/util.js');
var index = require('./pin/index.js');
var index$1 = require('./point/index.js');
var index$3 = require('./polyline/index.js');
var index$2 = require('./polygon/index.js');
var index$5 = require('./regular/index.js');
var index$4 = require('./rectangle/index.js');
var useDrawingFab = require('../../../composables/use-drawing/use-drawing-fab.js');
require('../../../composables/index.js');
var emits$1 = require('../../../utils/emits.js');
var index$6 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

const emits = {
  ...emits$1.drawingEmit,
  fabUpdated: (value) => true
};
var Drawings = vue.defineComponent({
  name: "VcDrawings",
  props: defaultProps.drawingsProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcDrawings";
    const { t } = index$6.useLocale();
    const options = {};
    const clearActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.clearActionOpts, props.clearActionOpts));
    const mainFabOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.mainFabOpts, props.mainFabOpts));
    const pointActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.pointActionOpts, props.pointActionOpts));
    const pointDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.pointDrawingOpts, props.pointDrawingOpts));
    const polylineActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.polylineActionOpts, props.polylineActionOpts));
    const polylineDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.polylineDrawingOpts, props.polylineDrawingOpts));
    const polygonActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.polygonActionOpts, props.polygonActionOpts));
    const polygonDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.polygonDrawingOpts, props.polygonDrawingOpts));
    const rectangleActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.rectangleActionOpts, props.rectangleActionOpts));
    const rectangleDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.rectangleDrawingOpts, props.rectangleDrawingOpts));
    const circleActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.circleActionOpts, props.circleActionOpts));
    const circleDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.circleDrawingOpts, props.circleDrawingOpts));
    const regularActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.regularActionOpts, props.regularActionOpts));
    const regularDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.regularDrawingOpts, props.regularDrawingOpts));
    const pinActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.pinActionOpts, props.pinActionOpts));
    const pinDrawingOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.pinDrawingOpts, props.pinDrawingOpts));
    options.pointActionOpts = pointActionOpts;
    options.pointDrawingOpts = pointDrawingOpts;
    options.polylineActionOpts = polylineActionOpts;
    options.polylineDrawingOpts = polylineDrawingOpts;
    options.polygonActionOpts = polygonActionOpts;
    options.polygonDrawingOpts = polygonDrawingOpts;
    options.rectangleActionOpts = rectangleActionOpts;
    options.rectangleDrawingOpts = rectangleDrawingOpts;
    options.circleActionOpts = circleActionOpts;
    options.circleDrawingOpts = circleDrawingOpts;
    options.regularActionOpts = regularActionOpts;
    options.regularDrawingOpts = regularDrawingOpts;
    options.pinActionOpts = pinActionOpts;
    options.pinDrawingOpts = pinDrawingOpts;
    options.clearActionOpts = clearActionOpts;
    const drawingActionInstances = vue.computed(() => {
      return props.drawings.map((drawing) => ({
        name: drawing,
        type: "drawing",
        actionStyle: {
          background: options[`${shared.camelize(drawing)}ActionOpts`].color,
          color: options[`${shared.camelize(drawing)}ActionOpts`].textColor
        },
        actionClass: `vc-draw-${drawing} vc-draw-button`,
        actionRef: vue.ref(null),
        actionOpts: options[`${shared.camelize(drawing)}ActionOpts`],
        cmp: getDrawingCmp(drawing),
        cmpRef: vue.ref(null),
        cmpOpts: options[`${shared.camelize(drawing)}DrawingOpts`],
        tip: options[`${shared.camelize(drawing)}ActionOpts`].tooltip.tip || t(`vc.drawing.${shared.camelize(drawing)}.tip`),
        isActive: false
      }));
    });
    function getDrawingCmp(name) {
      switch (name) {
        case "pin":
          return index["default"];
        case "point":
          return index$1["default"];
        case "polyline":
          return index$3["default"];
        case "polygon":
          return index$2["default"];
        case "rectangle":
          if (rectangleDrawingOpts.regular) {
            return index$5["default"];
          } else {
            return index$4["default"];
          }
        case "circle":
        case "regular":
          return index$5["default"];
        default:
          return void 0;
      }
    }
    return (_a = useDrawingFab["default"](props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, "drawing")) == null ? void 0 : _a.renderContent;
  }
});

exports.drawingsProps = defaultProps.drawingsProps;
exports.VcDrawingPin = index["default"];
exports.VcDrawingPoint = index$1["default"];
exports.VcDrawingPolyline = index$3["default"];
exports.VcDrawingPolygon = index$2["default"];
exports.VcDrawingRegular = index$5["default"];
exports.VcDrawingRectangle = index$4["default"];
exports["default"] = Drawings;
//# sourceMappingURL=index.js.map
