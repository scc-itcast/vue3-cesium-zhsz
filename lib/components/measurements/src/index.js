'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var defaultProps = require('./defaultProps.js');
require('../../../utils/util.js');
var index = require('./distance/index.js');
var index$1 = require('./polyline/index.js');
var index$2 = require('./horizontal/index.js');
var index$3 = require('./vertical/index.js');
var index$4 = require('./height/index.js');
var index$5 = require('./point/index.js');
var index$6 = require('./area/index.js');
var index$7 = require('./rectangle/index.js');
var index$8 = require('./regular/index.js');
require('../../../composables/index.js');
var useDrawingFab = require('../../../composables/use-drawing/use-drawing-fab.js');
var emits$1 = require('../../../utils/emits.js');
var index$9 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

const emits = {
  ...emits$1.drawingEmit,
  fabUpdated: (value) => true
};
var Measurements = vue.defineComponent({
  name: "VcMeasurements",
  props: defaultProps.measurementsProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcMeasurements";
    const { t } = index$9.useLocale();
    const clearActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.clearActionOpts, props.clearActionOpts));
    const mainFabOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.mainFabOpts, props.mainFabOpts));
    const distanceActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.distanceActionOpts, props.distanceActionOpts));
    const distanceMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.distanceMeasurementOpts, props.distanceMeasurementOpts));
    const componentDistanceActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.componentDistanceActionOpts, props.componentDistanceActionOpts));
    const componentDistanceMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.componentDistanceMeasurementOpts, props.componentDistanceMeasurementOpts));
    const polylineActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.polylineActionOpts, props.polylineActionOpts));
    const polylineMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.polylineMeasurementOpts, props.polylineMeasurementOpts));
    const horizontalActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.horizontalActionOpts, props.horizontalActionOpts));
    const horizontalMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.horizontalMeasurementOpts, props.horizontalMeasurementOpts));
    const verticalActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.verticalActionOpts, props.verticalActionOpts));
    const verticalMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.verticalMeasurementOpts, props.verticalMeasurementOpts));
    const heightActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.heightActionOpts, props.heightActionOpts));
    const heightMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.heightMeasurementOpts, props.heightMeasurementOpts));
    const areaActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.areaActionOpts, props.areaActionOpts));
    const areaMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.areaMeasurementOpts, props.areaMeasurementOpts));
    const pointActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.pointActionOpts, props.pointActionOpts));
    const pointMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.pointMeasurementOpts, props.pointMeasurementOpts));
    const rectangleActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.rectangleActionOpts, props.rectangleActionOpts));
    const rectangleMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.rectangleMeasurementOpts, props.rectangleMeasurementOpts));
    const regularActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.regularActionOpts, props.regularActionOpts));
    const regularMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.regularMeasurementOpts, props.regularMeasurementOpts));
    const circleActionOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.circleActionOpts, props.circleActionOpts));
    const circleMeasurementOpts = vue.reactive(Object.assign({}, defaultProps.defaultOptions.circleMeasurementOpts, props.circleMeasurementOpts));
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
    const drawingActionInstances = vue.computed(() => {
      return props.measurements.map((measurement) => ({
        name: measurement,
        type: "measurement",
        actionStyle: {
          background: options[`${shared.camelize(measurement)}ActionOpts`].color,
          color: options[`${shared.camelize(measurement)}ActionOpts`].textColor
        },
        actionClass: `vc-measure-${measurement} vc-measure-button`,
        actionRef: vue.ref(null),
        actionOpts: options[`${shared.camelize(measurement)}ActionOpts`],
        cmp: getMeasurementCmp(measurement),
        cmpRef: vue.ref(null),
        cmpOpts: options[`${shared.camelize(measurement)}MeasurementOpts`],
        tip: options[`${shared.camelize(measurement)}ActionOpts`].tooltip.tip || t(`vc.measurement.${measurement}.tip`),
        isActive: false
      }));
    });
    function getMeasurementCmp(name) {
      switch (name) {
        case "distance":
        case "component-distance":
          return index["default"];
        case "polyline":
          return index$1["default"];
        case "horizontal":
          return index$2["default"];
        case "vertical":
          return index$3["default"];
        case "height":
          return index$4["default"];
        case "point":
          return index$5["default"];
        case "area":
          return index$6["default"];
        case "rectangle":
          return index$7["default"];
        case "regular":
        case "circle":
          return index$8["default"];
        default:
          return void 0;
      }
    }
    return (_a = useDrawingFab["default"](props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, "measurement")) == null ? void 0 : _a.renderContent;
  }
});

exports.measurementsProps = defaultProps.measurementsProps;
exports.VcMeasurementDistance = index["default"];
exports.VcMeasurementPolyline = index$1["default"];
exports.VcMeasurementHorizontal = index$2["default"];
exports.VcMeasurementVertical = index$3["default"];
exports.VcMeasurementHeight = index$4["default"];
exports.VcMeasurementPoint = index$5["default"];
exports.VcMeasurementArea = index$6["default"];
exports.VcMeasurementRectangle = index$7["default"];
exports.VcMeasurementRegular = index$8["default"];
exports["default"] = Measurements;
//# sourceMappingURL=index.js.map
