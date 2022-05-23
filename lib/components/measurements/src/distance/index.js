'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementDistance = vue.defineComponent({
  name: "VcMeasurementDistance",
  props: {
    ...props.useDrawingActionProps,
    showComponentLines: {
      type: Boolean,
      default: false
    },
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    labelOpts: Object,
    xLabelOpts: Object,
    xAngleLabelOpts: Object,
    yLabelOpts: Object,
    yAngleLabelOpts: Object,
    locale: String,
    decimals: Object,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcMeasurementDistance");
  }
});

exports["default"] = VcMeasurementDistance;
//# sourceMappingURL=index.js.map
