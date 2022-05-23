'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingPolyline = require('../../../../composables/use-drawing/use-drawing-polyline.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementPolyline = vue.defineComponent({
  name: "VcMeasurementPolyline",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    loop: Boolean,
    clampToGround: Boolean,
    measureUnits: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showAngleLabel: Boolean,
    showDistanceLabel: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline["default"](props, ctx, "VcMeasurementPolyline");
  }
});

exports["default"] = VcMeasurementPolyline;
//# sourceMappingURL=index.js.map
