import { defineComponent } from 'vue';
import useDrawingPolyline from '../../../../composables/use-drawing/use-drawing-polyline.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcDrawingPolygon = defineComponent({
  name: "VcDrawingPolygon",
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline(props, ctx, "VcDrawingPolygon");
  }
});

export { VcDrawingPolygon as default };
//# sourceMappingURL=index.mjs.map
