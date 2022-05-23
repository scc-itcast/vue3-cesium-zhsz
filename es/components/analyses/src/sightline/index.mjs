import { defineComponent } from 'vue';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import useDrawingPolyline from '../../../../composables/use-drawing/use-drawing-polyline.mjs';
import useDrawingSegment from '../../../../composables/use-drawing/use-drawing-segment.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcAnalysisSightline = defineComponent({
  name: "VcAnalysisSightline",
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    primitiveOpts: Object,
    sightlineType: {
      type: String,
      default: "polyline"
    }
  },
  emits: drawingEmit,
  setup(props, ctx) {
    if (props.sightlineType === "segment" || props.sightlineType === "circle") {
      return useDrawingSegment(props, ctx, "VcAnalysisSightline");
    } else if (props.sightlineType === "polyline") {
      return useDrawingPolyline(props, ctx, "VcAnalysisSightline");
    }
  }
});

export { VcAnalysisSightline as default };
//# sourceMappingURL=index.mjs.map
