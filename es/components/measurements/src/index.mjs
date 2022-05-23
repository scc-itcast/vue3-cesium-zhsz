import { defineComponent, getCurrentInstance, reactive, computed, ref } from 'vue';
import { measurementsProps, defaultOptions } from './defaultProps.mjs';
export { measurementsProps } from './defaultProps.mjs';
import '../../../utils/util.mjs';
import VcMeasurementDistance from './distance/index.mjs';
export { default as VcMeasurementDistance } from './distance/index.mjs';
import VcMeasurementPolyline from './polyline/index.mjs';
export { default as VcMeasurementPolyline } from './polyline/index.mjs';
import VcMeasurementHorizontal from './horizontal/index.mjs';
export { default as VcMeasurementHorizontal } from './horizontal/index.mjs';
import VcMeasurementVertical from './vertical/index.mjs';
export { default as VcMeasurementVertical } from './vertical/index.mjs';
import VcMeasurementHeight from './height/index.mjs';
export { default as VcMeasurementHeight } from './height/index.mjs';
import VcMeasurementPoint from './point/index.mjs';
export { default as VcMeasurementPoint } from './point/index.mjs';
import VcMeasurementArea from './area/index.mjs';
export { default as VcMeasurementArea } from './area/index.mjs';
import VcMeasurementRectangle from './rectangle/index.mjs';
export { default as VcMeasurementRectangle } from './rectangle/index.mjs';
import VcMeasurementRegular from './regular/index.mjs';
export { default as VcMeasurementRegular } from './regular/index.mjs';
import '../../../composables/index.mjs';
import useDrawingFab from '../../../composables/use-drawing/use-drawing-fab.mjs';
import { drawingEmit } from '../../../utils/emits.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { camelize } from '@vue/shared';

const emits = {
  ...drawingEmit,
  fabUpdated: (value) => true
};
var Measurements = defineComponent({
  name: "VcMeasurements",
  props: measurementsProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcMeasurements";
    const { t } = useLocale();
    const clearActionOpts = reactive(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts));
    const mainFabOpts = reactive(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts));
    const distanceActionOpts = reactive(Object.assign({}, defaultOptions.distanceActionOpts, props.distanceActionOpts));
    const distanceMeasurementOpts = reactive(Object.assign({}, defaultOptions.distanceMeasurementOpts, props.distanceMeasurementOpts));
    const componentDistanceActionOpts = reactive(Object.assign({}, defaultOptions.componentDistanceActionOpts, props.componentDistanceActionOpts));
    const componentDistanceMeasurementOpts = reactive(Object.assign({}, defaultOptions.componentDistanceMeasurementOpts, props.componentDistanceMeasurementOpts));
    const polylineActionOpts = reactive(Object.assign({}, defaultOptions.polylineActionOpts, props.polylineActionOpts));
    const polylineMeasurementOpts = reactive(Object.assign({}, defaultOptions.polylineMeasurementOpts, props.polylineMeasurementOpts));
    const horizontalActionOpts = reactive(Object.assign({}, defaultOptions.horizontalActionOpts, props.horizontalActionOpts));
    const horizontalMeasurementOpts = reactive(Object.assign({}, defaultOptions.horizontalMeasurementOpts, props.horizontalMeasurementOpts));
    const verticalActionOpts = reactive(Object.assign({}, defaultOptions.verticalActionOpts, props.verticalActionOpts));
    const verticalMeasurementOpts = reactive(Object.assign({}, defaultOptions.verticalMeasurementOpts, props.verticalMeasurementOpts));
    const heightActionOpts = reactive(Object.assign({}, defaultOptions.heightActionOpts, props.heightActionOpts));
    const heightMeasurementOpts = reactive(Object.assign({}, defaultOptions.heightMeasurementOpts, props.heightMeasurementOpts));
    const areaActionOpts = reactive(Object.assign({}, defaultOptions.areaActionOpts, props.areaActionOpts));
    const areaMeasurementOpts = reactive(Object.assign({}, defaultOptions.areaMeasurementOpts, props.areaMeasurementOpts));
    const pointActionOpts = reactive(Object.assign({}, defaultOptions.pointActionOpts, props.pointActionOpts));
    const pointMeasurementOpts = reactive(Object.assign({}, defaultOptions.pointMeasurementOpts, props.pointMeasurementOpts));
    const rectangleActionOpts = reactive(Object.assign({}, defaultOptions.rectangleActionOpts, props.rectangleActionOpts));
    const rectangleMeasurementOpts = reactive(Object.assign({}, defaultOptions.rectangleMeasurementOpts, props.rectangleMeasurementOpts));
    const regularActionOpts = reactive(Object.assign({}, defaultOptions.regularActionOpts, props.regularActionOpts));
    const regularMeasurementOpts = reactive(Object.assign({}, defaultOptions.regularMeasurementOpts, props.regularMeasurementOpts));
    const circleActionOpts = reactive(Object.assign({}, defaultOptions.circleActionOpts, props.circleActionOpts));
    const circleMeasurementOpts = reactive(Object.assign({}, defaultOptions.circleMeasurementOpts, props.circleMeasurementOpts));
    const options = {};
    options.distanceActionOpts = distanceActionOpts;
    options.distanceMeasurementOpts = distanceMeasurementOpts;
    options.componentDistanceActionOpts = componentDistanceActionOpts;
    options.componentDistanceMeasurementOpts = componentDistanceMeasurementOpts;
    options.polylineActionOpts = polylineActionOpts;
    options.polylineMeasurementOpts = polylineMeasurementOpts;
    options.horizontalActionOpts = horizontalActionOpts;
    options.horizontalMeasurementOpts = horizontalMeasurementOpts;
    options.verticalActionOpts = verticalActionOpts;
    options.verticalMeasurementOpts = verticalMeasurementOpts;
    options.heightActionOpts = heightActionOpts;
    options.heightMeasurementOpts = heightMeasurementOpts;
    options.areaActionOpts = areaActionOpts;
    options.areaMeasurementOpts = areaMeasurementOpts;
    options.pointActionOpts = pointActionOpts;
    options.pointMeasurementOpts = pointMeasurementOpts;
    options.rectangleActionOpts = rectangleActionOpts;
    options.rectangleMeasurementOpts = rectangleMeasurementOpts;
    options.regularActionOpts = regularActionOpts;
    options.regularMeasurementOpts = regularMeasurementOpts;
    options.circleActionOpts = circleActionOpts;
    options.circleMeasurementOpts = circleMeasurementOpts;
    options.clearActionOpts = clearActionOpts;
    const drawingActionInstances = computed(() => {
      return props.measurements.map((measurement) => ({
        name: measurement,
        type: "measurement",
        actionStyle: {
          background: options[`${camelize(measurement)}ActionOpts`].color,
          color: options[`${camelize(measurement)}ActionOpts`].textColor
        },
        actionClass: `vc-measure-${measurement} vc-measure-button`,
        actionRef: ref(null),
        actionOpts: options[`${camelize(measurement)}ActionOpts`],
        cmp: getMeasurementCmp(measurement),
        cmpRef: ref(null),
        cmpOpts: options[`${camelize(measurement)}MeasurementOpts`],
        tip: options[`${camelize(measurement)}ActionOpts`].tooltip.tip || t(`vc.measurement.${measurement}.tip`),
        isActive: false
      }));
    });
    function getMeasurementCmp(name) {
      switch (name) {
        case "distance":
        case "component-distance":
          return VcMeasurementDistance;
        case "polyline":
          return VcMeasurementPolyline;
        case "horizontal":
          return VcMeasurementHorizontal;
        case "vertical":
          return VcMeasurementVertical;
        case "height":
          return VcMeasurementHeight;
        case "point":
          return VcMeasurementPoint;
        case "area":
          return VcMeasurementArea;
        case "rectangle":
          return VcMeasurementRectangle;
        case "regular":
        case "circle":
          return VcMeasurementRegular;
        default:
          return void 0;
      }
    }
    return (_a = useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, "measurement")) == null ? void 0 : _a.renderContent;
  }
});

export { Measurements as default };
//# sourceMappingURL=index.mjs.map
