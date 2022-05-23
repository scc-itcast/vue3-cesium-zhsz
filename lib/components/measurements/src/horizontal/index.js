'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingPolyline = require('../../../../composables/use-drawing/use-drawing-polyline.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementHorizontal = vue.defineComponent({
  name: "VcMeasurementHorizontal",
  props: {
    ...props.useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    dashLineOpts: Object,
    dashLinePrimitiveOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showAngleLabel: Boolean,
    showDashedLine: Boolean,
    showDistanceLabel: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline["default"](props, ctx, "VcMeasurementHorizontal");
  }
});

exports["default"] = VcMeasurementHorizontal;
//# sourceMappingURL=index.js.map
