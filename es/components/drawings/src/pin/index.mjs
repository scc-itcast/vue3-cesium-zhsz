import { defineComponent } from 'vue';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import useDrawingPoint from '../../../../composables/use-drawing/use-drawing-point.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcDrawingPin = defineComponent({
  name: "VcDrawingPin",
  props: {
    ...useDrawingActionProps,
    billboardOpts: Object,
    labelOpts: Object,
    heightReference: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPoint(props, ctx, "VcDrawingPin");
  }
});

export { VcDrawingPin as default };
//# sourceMappingURL=index.mjs.map
