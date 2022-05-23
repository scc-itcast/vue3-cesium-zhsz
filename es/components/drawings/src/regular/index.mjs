import { defineComponent } from 'vue';
import useDrawingSegment from '../../../../composables/use-drawing/use-drawing-segment.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcDrawingRegular = defineComponent({
  name: "VcDrawingRegular",
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    primitiveOpts: Object,
    clampToGround: Boolean,
    edge: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment(props, ctx, "VcDrawingRegular");
  }
});

export { VcDrawingRegular as default };
//# sourceMappingURL=index.mjs.map
