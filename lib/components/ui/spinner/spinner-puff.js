'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("g", {
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-width": "2"
  }, [
    vue.h("circle", {
      cx: "22",
      cy: "22",
      r: "1"
    }, [
      vue.h("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "stroke-opacity",
        begin: "0s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("circle", {
      cx: "22",
      cy: "22",
      r: "1"
    }, [
      vue.h("animate", {
        attributeName: "r",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "stroke-opacity",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var SpinnerPuff = vue.defineComponent({
  name: "VcSpinnerPuff",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 44 44",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerPuff;
//# sourceMappingURL=spinner-puff.js.map
