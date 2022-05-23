import { defineComponent } from 'vue';
import useDrawingSegment from '../../../../composables/use-drawing/use-drawing-segment.mjs';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcMeasurementRectangle = defineComponent({
  name: "VcMeasurementRectangle",
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    primitiveOpts: Object,
    polygonOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    clampToGround: Boolean,
    edge: Number,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment(props, ctx, "VcMeasurementRectangle");
  }
});

export { VcMeasurementRectangle as default };
//# sourceMappingURL=index.mjs.map
