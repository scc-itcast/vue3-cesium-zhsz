import { defineComponent } from 'vue';
import useDrawingPoint from '../../../../composables/use-drawing/use-drawing-point.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcMeasurementPoint = defineComponent({
  name: "VcMeasurementPoint",
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    labelOpts: Object,
    locale: String,
    decimals: Object,
    heightReference: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPoint(props, ctx, "VcMeasurementPoint");
  }
});

export { VcMeasurementPoint as default };
//# sourceMappingURL=index.mjs.map
