'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingPoint = require('../../../../composables/use-drawing/use-drawing-point.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcMeasurementPoint = vue.defineComponent({
  name: "VcMeasurementPoint",
  props: {
    ...props.useDrawingActionProps,
    measureUnits: Object,
    labelOpts: Object,
    locale: String,
    decimals: Object,
    heightReference: Number
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPoint["default"](props, ctx, "VcMeasurementPoint");
  }
});

exports["default"] = VcMeasurementPoint;
//# sourceMappingURL=index.js.map
