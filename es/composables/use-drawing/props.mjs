import { enableMouseEvent, show } from '../../utils/cesium-props.mjs';
import { clearActionDefault } from './defaultOpts.mjs';

const useDrawingActionProps = {
  ...enableMouseEvent,
  show: Boolean,
  editable: Boolean,
  drawtip: Object,
  pointOpts: Object,
  editorOpts: Object,
  mode: Number,
  preRenderDatas: Array,
  disableDepthTest: Boolean
};
const useDrawingFabProps = {
  ...show,
  position: {
    type: String,
    default: "bottom-left",
    validator: (v) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  mode: {
    type: Number,
    default: 1
  },
  activeColor: {
    type: String,
    default: "positive"
  },
  editable: {
    type: Boolean
  },
  clampToGround: {
    type: Boolean
  },
  clearActionOpts: {
    type: Object,
    default: () => clearActionDefault
  }
};

export { useDrawingActionProps, useDrawingFabProps };
//# sourceMappingURL=props.mjs.map
