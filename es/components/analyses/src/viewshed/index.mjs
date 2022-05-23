import { defineComponent } from 'vue';
import { useDrawingActionProps } from '../../../../composables/use-drawing/props.mjs';
import useDrawingSegment from '../../../../composables/use-drawing/use-drawing-segment.mjs';
import fragmentShader from './fragmentShader.mjs';
import { drawingEmit } from '../../../../utils/emits.mjs';

var VcAnalysisViewshed = defineComponent({
  name: "VcAnalysisViewshed",
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    ellipsoidOpts: Object
  },
  emits: drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment(props, ctx, "VcAnalysisViewshed", fragmentShader);
  }
});

export { VcAnalysisViewshed as default };
//# sourceMappingURL=index.mjs.map
