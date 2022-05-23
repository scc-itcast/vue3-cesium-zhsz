import { defineComponent, computed, h } from 'vue';
import useDark, { useDarkProps } from '../../../composables/private/use-dark.mjs';
import { hSlot } from '../../../utils/private/render.mjs';

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
  ...useDarkProps,
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
var Skeleton = defineComponent({
  name: "VcSkeleton",
  props: skeletonProps,
  setup(props, { slots }) {
    const isDark = useDark(props);
    const style = computed(() => props.size !== void 0 ? { width: props.size, height: props.size } : { width: props.width, height: props.height });
    const classes = computed(() => `vc-skeleton vc-skeleton--${isDark.value === true ? "dark" : "light"} vc-skeleton--type-${props.type}` + (props.animation !== "none" ? ` vc-skeleton--anim vc-skeleton--anim-${props.animation}` : "") + (props.square === true ? " vc-skeleton--square" : "") + (props.bordered === true ? " vc-skeleton--bordered" : ""));
    return () => h(props.tag, {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});

export { Skeleton as default, skeletonAnimations, skeletonProps, skeletonTypes };
//# sourceMappingURL=index.mjs.map
