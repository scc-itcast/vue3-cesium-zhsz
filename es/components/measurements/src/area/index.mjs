import { defineComponent } from 'vue';
import useDrawingPolyline from '../../../../composables/use-drawing/use-drawing-polyline.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcMeasurementArea = defineComponent({
  name: "VcMeasurementArea",
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    clampToGround: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingPolyline(props, ctx, "VcMeasurementArea");
  }
});

export { VcMeasurementArea as default };
//# sourceMappingURL=index.mjs.map
