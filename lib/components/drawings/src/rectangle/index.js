'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcDrawingRectangle = vue.defineComponent({
  name: "VcDrawingRectangle",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    clampToGround: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcDrawingRectangle");
  }
});

exports["default"] = VcDrawingRectangle;
//# sourceMappingURL=index.js.map
