'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementVertical = vue.defineComponent({
  name: "VcMeasurementVertical",
  props: {
    ...props.useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    labelOpts: Object,
    locale: String,
    decimals: Object,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcMeasurementVertical");
  }
});

exports["default"] = VcMeasurementVertical;
//# sourceMappingURL=index.js.map
