import { defineComponent } from 'vue';
import useDrawingPolyline from '../../../../composables/use-drawing/use-drawing-polyline.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcMeasurementPolyline = defineComponent({
  name: "VcMeasurementPolyline",
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    loop: Boolean,
    clampToGround: Boolean,
    measureUnits: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showAngleLabel: Boolean,
    showDistanceLabel: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline(props, ctx, "VcMeasurementPolyline");
  }
});

export { VcMeasurementPolyline as default };
//# sourceMappingURL=index.mjs.map
