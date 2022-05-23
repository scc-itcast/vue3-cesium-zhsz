'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../../composables/use-drawing/props.js');
var useDrawingPoint = require('../../../../composables/use-drawing/use-drawing-point.js');
var emits = require('../../../../utils/emits.js');

var VcDrawingPoint = vue.defineComponent({
  name: "VcDrawingPoint",
  props: {
    ...props.useDrawingActionProps,
    heightReference: Number
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPoint["default"](props, ctx, "VcDrawingPoint");
  }
});

exports["default"] = VcDrawingPoint;
//# sourceMappingURL=index.js.map
