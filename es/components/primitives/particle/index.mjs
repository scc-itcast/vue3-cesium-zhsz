import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, modelMatrix, color, startColor, endColor, image, imageSize, minimumImageSize, maximumImageSize, sizeInMeters, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveEmits } from '../../../utils/emits.mjs';
import usePrimitives from '../../../composables/use-primitives/index.mjs';

const emits = {
  ...primitiveEmits,
  complete: (evt) => true
};
const particlePrimitiveProps = {
  ...show,
  updateCallback: Function,
  emitter: Object,
  ...modelMatrix,
  emitterModelMatrix: Object,
  emissionRate: {
    type: Number,
    default: 5
  },
  bursts: Array,
  loop: {
    type: Boolean,
    default: true
  },
  scale: {
    type: Number,
    default: 1
  },
  startScale: Number,
  endScale: Number,
  ...color,
  ...startColor,
  ...endColor,
  ...image,
  ...imageSize,
  ...minimumImageSize,
  ...maximumImageSize,
  ...sizeInMeters,
  speed: {
    type: Number,
    default: 1
  },
  minimumSpeed: Number,
  maximumSpeed: Number,
  lifetime: {
    type: Number,
    default: Number.MAX_VALUE
  },
  particleLife: {
    type: Number,
    default: 5
  },
  minimumParticleLife: Number,
  maximumParticleLife: Number,
  mass: {
    type: Number,
    default: 1
  },
  minimumMass: Number,
  maximumMass: Number,
  ...enableMouseEvent
};
var PrimitiveParticle = defineComponent({
  name: "VcPrimitiveParticle",
  props: particlePrimitiveProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "ParticleSystem";
    instance.cesiumEvents = ["complete"];
    usePrimitives(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { PrimitiveParticle as default, particlePrimitiveProps };
//# sourceMappingURL=index.mjs.map
