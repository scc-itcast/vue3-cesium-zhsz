import { defineComponent } from 'vue';
import useDrawingSegment from '../../../../composables/use-drawing/use-drawing-segment.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcDrawingRectangle = defineComponent({
  name: "VcDrawingRectangle",
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    clampToGround: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment(props, ctx, "VcDrawingRectangle");
  }
});

export { VcDrawingRectangle as default };
//# sourceMappingURL=index.mjs.map
