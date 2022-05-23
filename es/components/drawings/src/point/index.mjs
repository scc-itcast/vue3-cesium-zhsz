import { defineComponent } from 'vue';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import useDrawingPoint from '../../../../composables/use-drawing/use-drawing-point.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcDrawingPoint = defineComponent({
  name: "VcDrawingPoint",
  props: {
    ...useDrawingActionProps,
    heightReference: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPoint(props, ctx, "VcDrawingPoint");
  }
});

export { VcDrawingPoint as default };
//# sourceMappingURL=index.mjs.map
