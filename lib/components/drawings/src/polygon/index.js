'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDrawingPolyline = require('../../../../composables/use-drawing/use-drawing-polyline.js');
var props = require('../../../../composables/use-drawing/props.js');
var emits = require('../../../../utils/emits.js');

var VcDrawingPolygon = vue.defineComponent({
  name: "VcDrawingPolygon",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline["default"](props, ctx, "VcDrawingPolygon");
  }
});

exports["default"] = VcDrawingPolygon;
//# sourceMappingURL=index.js.map
