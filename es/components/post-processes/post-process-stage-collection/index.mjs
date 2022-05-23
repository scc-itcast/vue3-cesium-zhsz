import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const postProcessStageCollectionProps = {
  postProcesses: {
    type: Array,
    default: () => []
  }
};
var PostProcessStageCollection = defineComponent({
  name: "VcPostProcessStageCollection",
  props: postProcessStageCollectionProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PostProcessStageCollection";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const stages = [];
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.postProcesses, (val) => {
      var _a, _b;
      if (instance.mounted) {
        ;
        (_b = (_a = instance.proxy).reload) == null ? void 0 : _b.call(_a);
      }
    }, { deep: true }));
    instance.createCesiumObject = async () => {
      return stages;
    };
    instance.mount = async () => {
      const { postProcessStages } = $services;
      props.postProcesses.forEach((postProcess) => {
        const opts = commonState.transformProps(postProcess);
        stages.push(postProcessStages.add(new Cesium.PostProcessStage(opts)));
      });
      return true;
    };
    instance.unmount = async () => {
      const { postProcessStages } = $services;
      stages.forEach((stage) => {
        postProcessStages.remove(stage);
      });
      stages.length = 0;
      return true;
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

export { PostProcessStageCollection as default, postProcessStageCollectionProps };
//# sourceMappingURL=index.mjs.map
