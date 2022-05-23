import { defineComponent, getCurrentInstance, ref, watch, onUnmounted, h, createCommentVNode } from 'vue';
import { polygonHierarchy } from '../../../utils/cesium-props.mjs';
import { makeColor } from '../../../utils/cesium-helpers.mjs';
import { VcPrimitiveClassification } from '../../primitives/index.mjs';
import { VcGeometryInstance } from '../../geometry-instance/index.mjs';
import { VcGeometryPolygon } from '../../geometries/index.mjs';
import { getVcParentInstance, getInstanceListener } from '../../../utils/private/vm.mjs';
import '../../../composables/index.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const emits = {
  ...commonEmits,
  stop: (evt) => true
};
var AnalysisFlood = defineComponent({
  name: "VcAnalysisFlood",
  props: {
    minHeight: {
      type: Number,
      default: -1
    },
    maxHeight: {
      type: Number,
      default: 8888
    },
    speed: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: false
    },
    color: {
      type: [Object, Array, String],
      default: "rgba(40,150,200,0.6)"
    },
    ...polygonHierarchy
  },
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcAnalysisFlood";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { emit } = ctx;
    const canRender = ref(false);
    const vcParent = getVcParentInstance(instance);
    (_a = vcParent.proxy.creatingPromise) == null ? void 0 : _a.then(() => {
      canRender.value = true;
    });
    const flooding = ref(false);
    const attributes = ref(null);
    const extrudedHeight = ref(-1);
    const childRef = ref(null);
    let stoped = false;
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.minHeight, (val) => {
      extrudedHeight.value = val;
    }));
    instance.createCesiumObject = async () => {
      const { ColorGeometryInstanceAttribute } = Cesium;
      attributes.value = {
        color: ColorGeometryInstanceAttribute.fromColor(makeColor(props.color))
      };
      return childRef.value;
    };
    instance.mount = async () => {
      const { viewer } = commonState.$services;
      viewer.clock.onTick.addEventListener(onClockTick);
      return true;
    };
    instance.unmount = async () => {
      const { viewer } = commonState.$services;
      viewer.clock.onTick.removeEventListener(onClockTick);
      extrudedHeight.value = -1;
      flooding.value = false;
      return true;
    };
    const onClockTick = () => {
      if (flooding.value) {
        if (extrudedHeight.value <= props.maxHeight) {
          extrudedHeight.value += props.speed;
          stoped = false;
        } else {
          const listener = getInstanceListener(instance, "stop");
          listener && emit("stop", childRef.value);
          stoped = true;
          if (props.loop) {
            extrudedHeight.value = props.minHeight;
          } else {
            flooding.value = false;
          }
        }
      }
    };
    const start = () => {
      extrudedHeight.value = props.minHeight;
      flooding.value = true;
    };
    const pause = () => {
      flooding.value = !flooding.value;
      if (stoped) {
        extrudedHeight.value = props.minHeight;
      }
    };
    const stop = () => {
      extrudedHeight.value = -1;
      flooding.value = false;
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    Object.assign(instance.proxy, {
      start,
      pause,
      stop
    });
    return () => {
      if (canRender.value) {
        const { createGuid } = Cesium;
        return h(VcPrimitiveClassification, {
          asynchronous: false,
          ref: childRef
        }, () => h(VcGeometryInstance, {
          id: createGuid(),
          attributes: attributes.value
        }, () => h(VcGeometryPolygon, {
          extrudedHeight: extrudedHeight.value,
          polygonHierarchy: props.polygonHierarchy
        })));
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { AnalysisFlood as default };
//# sourceMappingURL=index.mjs.map
