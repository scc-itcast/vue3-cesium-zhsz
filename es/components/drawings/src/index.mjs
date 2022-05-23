import { defineComponent, getCurrentInstance, reactive, computed, ref } from 'vue';
import { drawingsProps, defaultOptions } from './defaultProps.mjs';
export { drawingsProps } from './defaultProps.mjs';
import '../../../utils/util.mjs';
import VcDrawingPin from './pin/index.mjs';
export { default as VcDrawingPin } from './pin/index.mjs';
import VcDrawingPoint from './point/index.mjs';
export { default as VcDrawingPoint } from './point/index.mjs';
import VcDrawingPolyline from './polyline/index.mjs';
export { default as VcDrawingPolyline } from './polyline/index.mjs';
import VcDrawingPolygon from './polygon/index.mjs';
export { default as VcDrawingPolygon } from './polygon/index.mjs';
import VcDrawingRegular from './regular/index.mjs';
export { default as VcDrawingRegular } from './regular/index.mjs';
import VcDrawingRectangle from './rectangle/index.mjs';
export { default as VcDrawingRectangle } from './rectangle/index.mjs';
import useDrawingFab from '../../../composables/use-drawing/use-drawing-fab.mjs';
import '../../../composables/index.mjs';
import { drawingEmit } from '../../../utils/emits.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { camelize } from '@vue/shared';

const emits = {
  ...drawingEmit,
  fabUpdated: (value) => true
};
var Drawings = defineComponent({
  name: "VcDrawings",
  props: drawingsProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcDrawings";
    const { t } = useLocale();
    const options = {};
    const clearActionOpts = reactive(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts));
    const mainFabOpts = reactive(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts));
    const pointActionOpts = reactive(Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts));
    const pointDrawingOpts = reactive(Object.assign({}, defaultOptions.pointDrawingOpts, props.pointDrawingOpts));
    const polylineActionOpts = reactive(Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts));
    const polylineDrawingOpts = reactive(Object.assign({}, defaultOptions.polylineDrawingOpts, props.polylineDrawingOpts));
    const polygonActionOpts = reactive(Object.assign({}, defaultOptions.polygonActionOpts, props.polygonActionOpts));
    const polygonDrawingOpts = reactive(Object.assign({}, defaultOptions.polygonDrawingOpts, props.polygonDrawingOpts));
    const rectangleActionOpts = reactive(Object.assign({}, defaultOptions.rectangleActionOpts, props.rectangleActionOpts));
    const rectangleDrawingOpts = reactive(Object.assign({}, defaultOptions.rectangleDrawingOpts, props.rectangleDrawingOpts));
    const circleActionOpts = reactive(Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts));
    const circleDrawingOpts = reactive(Object.assign({}, defaultOptions.circleDrawingOpts, props.circleDrawingOpts));
    const regularActionOpts = reactive(Object.assign({}, defaultOptions.regularActionOpts, props.regularActionOpts));
    const regularDrawingOpts = reactive(Object.assign({}, defaultOptions.regularDrawingOpts, props.regularDrawingOpts));
    const pinActionOpts = reactive(Object.assign({}, defaultOptions.pinActionOpts, props.pinActionOpts));
    const pinDrawingOpts = reactive(Object.assign({}, defaultOptions.pinDrawingOpts, props.pinDrawingOpts));
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
    const drawingActionInstances = computed(() => {
      return props.drawings.map((drawing) => ({
        name: drawing,
        type: "drawing",
        actionStyle: {
          background: options[`${camelize(drawing)}ActionOpts`].color,
          color: options[`${camelize(drawing)}ActionOpts`].textColor
        },
        actionClass: `vc-draw-${drawing} vc-draw-button`,
        actionRef: ref(null),
        actionOpts: options[`${camelize(drawing)}ActionOpts`],
        cmp: getDrawingCmp(drawing),
        cmpRef: ref(null),
        cmpOpts: options[`${camelize(drawing)}DrawingOpts`],
        tip: options[`${camelize(drawing)}ActionOpts`].tooltip.tip || t(`vc.drawing.${camelize(drawing)}.tip`),
        isActive: false
      }));
    });
    function getDrawingCmp(name) {
      switch (name) {
        case "pin":
          return VcDrawingPin;
        case "point":
          return VcDrawingPoint;
        case "polyline":
          return VcDrawingPolyline;
        case "polygon":
          return VcDrawingPolygon;
        case "rectangle":
          if (rectangleDrawingOpts.regular) {
            return VcDrawingRegular;
          } else {
            return VcDrawingRectangle;
          }
        case "circle":
        case "regular":
          return VcDrawingRegular;
        default:
          return void 0;
      }
    }
    return (_a = useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, "drawing")) == null ? void 0 : _a.renderContent;
  }
});

export { Drawings as default };
//# sourceMappingURL=index.mjs.map
