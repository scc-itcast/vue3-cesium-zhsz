'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var defaultProps = require('./defaultProps.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const postProcessStageProps = defaultProps["default"];
var PostProcessStage = vue.defineComponent({
  name: "VcPostProcessStage",
  props: postProcessStageProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PostProcessStage";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
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
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = PostProcessStage;
exports.postProcessStageProps = postProcessStageProps;
//# sourceMappingURL=index.js.map
