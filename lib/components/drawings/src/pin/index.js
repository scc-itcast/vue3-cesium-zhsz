'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../../composables/use-drawing/props.js');
var useDrawingPoint = require('../../../../composables/use-drawing/use-drawing-point.js');
var emits = require('../../../../utils/emits.js');

var VcDrawingPin = vue.defineComponent({
  name: "VcDrawingPin",
  props: {
    ...props.useDrawingActionProps,
    billboardOpts: Object,
    labelOpts: Object,
    heightReference: Number
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPoint["default"](props, ctx, "VcDrawingPin");
  }
});

exports["default"] = VcDrawingPin;
//# sourceMappingURL=index.js.map
