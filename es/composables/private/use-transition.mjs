import { ref, watch, nextTick, computed } from 'vue';

const useTransitionProps = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function useTransition(props, showing) {
  const transitionState = ref(showing.value);
  watch(showing, (val) => {
    nextTick(() => {
      transitionState.value = val;
    });
  });
  return {
    transition: computed(() => "vc-transition--" + (transitionState.value === true ? props.transitionHide : props.transitionShow)),
    transitionStyle: computed(() => `--vc-transition-duration: ${props.transitionDuration}ms`)
  };
}

export { useTransition as default, useTransitionProps };
//# sourceMappingURL=use-transition.mjs.map
