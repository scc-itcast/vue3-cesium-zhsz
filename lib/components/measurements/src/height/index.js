'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementHeight = vue.defineComponent({
  name: "VcMeasurementHeight",
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
    return useDrawingSegment["default"](props, ctx, "VcMeasurementHeight");
  }
});

exports["default"] = VcMeasurementHeight;
//# sourceMappingURL=index.js.map
