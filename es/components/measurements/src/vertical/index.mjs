import { defineComponent } from 'vue';
import useDrawingSegment from '../../../../composables/use-drawing/use-drawing-segment.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcMeasurementVertical = defineComponent({
  name: "VcMeasurementVertical",
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    labelOpts: Object,
    locale: String,
    decimals: Object,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment(props, ctx, "VcMeasurementVertical");
  }
});

export { VcMeasurementVertical as default };
//# sourceMappingURL=index.mjs.map
