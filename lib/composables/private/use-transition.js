'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
  const transitionState = vue.ref(showing.value);
  vue.watch(showing, (val) => {
    vue.nextTick(() => {
      transitionState.value = val;
    });
  });
  return {
    transition: vue.computed(() => "vc-transition--" + (transitionState.value === true ? props.transitionHide : props.transitionShow)),
    transitionStyle: vue.computed(() => `--vc-transition-duration: ${props.transitionDuration}ms`)
  };
}

exports["default"] = useTransition;
exports.useTransitionProps = useTransitionProps;
//# sourceMappingURL=use-transition.js.map
