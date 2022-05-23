'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../../composables/use-drawing/props.js');
var useDrawingPolyline = require('../../../../composables/use-drawing/use-drawing-polyline.js');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var emits = require('../../../../utils/emits.js');

var VcAnalysisSightline = vue.defineComponent({
  name: "VcAnalysisSightline",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    primitiveOpts: Object,
    sightlineType: {
      type: String,
      default: "polyline"
    }
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    if (props.sightlineType === "segment" || props.sightlineType === "circle") {
      return useDrawingSegment["default"](props, ctx, "VcAnalysisSightline");
    } else if (props.sightlineType === "polyline") {
      return useDrawingPolyline["default"](props, ctx, "VcAnalysisSightline");
    }
  }
});

exports["default"] = VcAnalysisSightline;
//# sourceMappingURL=index.js.map
