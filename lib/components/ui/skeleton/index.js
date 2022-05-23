'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useDark = require('../../../composables/private/use-dark.js');
var render = require('../../../utils/private/render.js');

const skeletonTypes = [
  "text",
  "rect",
  "circle",
  "VcBtn",
  "VcBadge",
  "VcChip",
  "VcToolbar",
  "VcCheckbox",
  "VcRadio",
  "VcToggle",
  "VcSlider",
  "VcRange",
  "VcInput",
  "VcAvatar"
];
const skeletonAnimations = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
const skeletonProps = {
  ...useDark.useDarkProps,
  tag: {
    type: String,
    default: "div"
  },
  type: {
    type: String,
    validator: (v) => skeletonTypes.includes(v),
    default: "rect"
  },
  animation: {
    type: String,
    validator: (v) => skeletonAnimations.includes(v),
    default: "wave"
  },
  square: Boolean,
  bordered: Boolean,
  size: String,
  width: String,
  height: String
};
var Skeleton = vue.defineComponent({
  name: "VcSkeleton",
  props: skeletonProps,
  setup(props, { slots }) {
    const isDark = useDark["default"](props);
    const style = vue.computed(() => props.size !== void 0 ? { width: props.size, height: props.size } : { width: props.width, height: props.height });
    const classes = vue.computed(() => `vc-skeleton vc-skeleton--${isDark.value === true ? "dark" : "light"} vc-skeleton--type-${props.type}` + (props.animation !== "none" ? ` vc-skeleton--anim vc-skeleton--anim-${props.animation}` : "") + (props.square === true ? " vc-skeleton--square" : "") + (props.bordered === true ? " vc-skeleton--bordered" : ""));
    return () => vue.h(props.tag, {
      class: classes.value,
      style: style.value
    }, render.hSlot(slots.default));
  }
});

exports["default"] = Skeleton;
exports.skeletonAnimations = skeletonAnimations;
exports.skeletonProps = skeletonProps;
exports.skeletonTypes = skeletonTypes;
//# sourceMappingURL=index.js.map
