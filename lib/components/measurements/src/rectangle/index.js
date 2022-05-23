'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementRectangle = vue.defineComponent({
  name: "VcMeasurementRectangle",
  props: {
    ...props.useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    clampToGround: Boolean,
    edge: Number,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcMeasurementRectangle");
  }
});

exports["default"] = VcMeasurementRectangle;
//# sourceMappingURL=index.js.map
