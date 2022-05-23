'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitives/index.js');

const emits = {
  ...emits$1.primitiveEmits,
  complete: (evt) => true
};
const particlePrimitiveProps = {
  ...cesiumProps.show,
  updateCallback: Function,
  emitter: Object,
  ...cesiumProps.modelMatrix,
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
  ...cesiumProps.color,
  ...cesiumProps.startColor,
  ...cesiumProps.endColor,
  ...cesiumProps.image,
  ...cesiumProps.imageSize,
  ...cesiumProps.minimumImageSize,
  ...cesiumProps.maximumImageSize,
  ...cesiumProps.sizeInMeters,
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
  ...cesiumProps.enableMouseEvent
};
var PrimitiveParticle = vue.defineComponent({
  name: "VcPrimitiveParticle",
  props: particlePrimitiveProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "ParticleSystem";
    instance.cesiumEvents = ["complete"];
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = PrimitiveParticle;
exports.particlePrimitiveProps = particlePrimitiveProps;
//# sourceMappingURL=index.js.map
