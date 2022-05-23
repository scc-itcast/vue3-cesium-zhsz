import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import defaultProps from './defaultProps.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const postProcessStageProps = defaultProps;
var PostProcessStage = defineComponent({
  name: "VcPostProcessStage",
  props: postProcessStageProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PostProcessStage";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    instance.mount = async () => {
      const { postProcessStages } = $services;
      const stage = postProcessStages.add(instance.cesiumObject);
      return postProcessStages.contains(stage);
    };
    instance.unmount = async () => {
      const { postProcessStages } = $services;
      return postProcessStages == null ? void 0 : postProcessStages.remove(instance.cesiumObject);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { PostProcessStage as default, postProcessStageProps };
//# sourceMappingURL=index.mjs.map
