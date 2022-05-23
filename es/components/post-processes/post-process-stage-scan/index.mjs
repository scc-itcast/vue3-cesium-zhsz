import '../../../composables/index.mjs';
import { defineComponent, getCurrentInstance, ref, computed, watch, onUnmounted, h } from 'vue';
import PostProcessStage from '../post-process-stage/index.mjs';
import useRadar from './use-radar-scan.mjs';
import useCircle from './use-circle-scan.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

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
var PostProcessStageScan = defineComponent({
  name: "VcPostProcessStageScan",
  props: postProcessStageScanProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcPostProcessStageScan";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const fragmentShader = ref("");
    const uniforms = ref(null);
    const { $services } = commonState;
    const useRadarState = useRadar($services);
    const useCircleState = useCircle($services);
    let unwatchFns = [];
    const options = computed(() => {
      return Object.assign({}, defaultOptions, props.options);
    });
    unwatchFns.push(watch(() => options, (val) => {
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
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      return h(PostProcessStage, {
        fragmentShader: fragmentShader.value,
        uniforms: uniforms.value
      });
    };
  }
});

export { PostProcessStageScan as default, postProcessStageScanProps };
//# sourceMappingURL=index.mjs.map
