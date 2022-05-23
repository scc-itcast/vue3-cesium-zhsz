'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementRegular = vue.defineComponent({
  name: "VcMeasurementRegular",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    clampToGround: Boolean,
    edge: Number,
    measureUnits: Object,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcMeasurementRegular");
  }
});

exports["default"] = VcMeasurementRegular;
//# sourceMappingURL=index.js.map
