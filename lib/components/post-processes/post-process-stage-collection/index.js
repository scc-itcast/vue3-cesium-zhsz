'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const postProcessStageCollectionProps = {
  postProcesses: {
    type: Array,
    default: () => []
  }
};
var PostProcessStageCollection = vue.defineComponent({
  name: "VcPostProcessStageCollection",
  props: postProcessStageCollectionProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PostProcessStageCollection";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const stages = [];
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => props.postProcesses, (val) => {
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
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

exports["default"] = PostProcessStageCollection;
exports.postProcessStageCollectionProps = postProcessStageCollectionProps;
//# sourceMappingURL=index.js.map
