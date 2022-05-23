'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcDrawingRegular = vue.defineComponent({
  name: "VcDrawingRegular",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    primitiveOpts: Object,
    clampToGround: Boolean,
    edge: Number
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcDrawingRegular");
  }
});

exports["default"] = VcDrawingRegular;
//# sourceMappingURL=index.js.map
