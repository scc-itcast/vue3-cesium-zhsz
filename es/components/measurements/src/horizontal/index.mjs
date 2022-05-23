import { defineComponent } from 'vue';
import useDrawingPolyline from '../../../../composables/use-drawing/use-drawing-polyline.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcMeasurementHorizontal = defineComponent({
  name: "VcMeasurementHorizontal",
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    dashLineOpts: Object,
    dashLinePrimitiveOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showAngleLabel: Boolean,
    showDashedLine: Boolean,
    showDistanceLabel: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline(props, ctx, "VcMeasurementHorizontal");
  }
});

export { VcMeasurementHorizontal as default };
//# sourceMappingURL=index.mjs.map
