'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingPolyline = require('../../../../composables/use-drawing/use-drawing-polyline.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcDrawingPolyline = vue.defineComponent({
  name: "VcDrawingPolyline",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline["default"](props, ctx, "VcDrawingPolyline");
  }
});

exports["default"] = VcDrawingPolyline;
//# sourceMappingURL=index.js.map
