'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingPolyline = require('../../../../composables/use-drawing/use-drawing-polyline.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementArea = vue.defineComponent({
  name: "VcMeasurementArea",
  props: {
    ...props.useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    clampToGround: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline["default"](props, ctx, "VcMeasurementArea");
  }
});

exports["default"] = VcMeasurementArea;
//# sourceMappingURL=index.js.map
