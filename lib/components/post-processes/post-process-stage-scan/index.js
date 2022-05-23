'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../composables/index.js');
var vue = require('vue');
var index$1 = require('../post-process-stage/index.js');
var useRadarScan = require('./use-radar-scan.js');
var useCircleScan = require('./use-circle-scan.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const defaultOptions = {
  position: [0, 0],
  radius: 1500,
  interval: 3500,
  color: [0, 0, 0, 255]
};
const postProcessStageScanProps = {
  type: {
    type: String,
    default: "radar"
  },
  options: Object
};
var PostProcessStageScan = vue.defineComponent({
  name: "VcPostProcessStageScan",
  props: postProcessStageScanProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcPostProcessStageScan";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const fragmentShader = vue.ref("");
    const uniforms = vue.ref(null);
    const { $services } = commonState;
    const useRadarState = useRadarScan["default"]($services);
    const useCircleState = useCircleScan["default"]($services);
    let unwatchFns = [];
    const options = vue.computed(() => {
      return Object.assign({}, defaultOptions, props.options);
    });
    unwatchFns.push(vue.watch(() => options, (val) => {
      if (instance.mounted) {
        ;
        instance.proxy.reload();
      }
    }, { deep: true }));
    instance.createCesiumObject = async () => {
      const opts = commonState.transformProps(options.value);
      let result;
      if (props.type === "radar") {
        result = useRadarState.webgl(opts);
      } else if (props.type === "circle") {
        result = useCircleState.webgl(opts);
      }
      fragmentShader.value = result.shaderSource;
      uniforms.value = result.uniforms;
      return true;
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      return vue.h(index$1["default"], {
        fragmentShader: fragmentShader.value,
        uniforms: uniforms.value
      });
    };
  }
});

exports["default"] = PostProcessStageScan;
exports.postProcessStageScanProps = postProcessStageScanProps;
//# sourceMappingURL=index.js.map
