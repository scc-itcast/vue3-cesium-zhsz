'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("g", {
    transform: "translate(1 1)",
    "stroke-width": "2",
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    vue.h("circle", {
      "stroke-opacity": ".5",
      cx: "18",
      cy: "18",
      r: "18"
    }),
    vue.h("path", {
      d: "M36 18c0-9.94-8.06-18-18-18"
    }, [
      vue.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "1s",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var SpinnerOval = vue.defineComponent({
  name: "VcSpinnerOval",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerOval;
//# sourceMappingURL=spinner-oval.js.map
