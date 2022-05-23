'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("g", {
    fill: "none",
    "fill-rule": "evenodd",
    transform: "translate(1 1)",
    "stroke-width": "2"
  }, [
    vue.h("circle", {
      cx: "22",
      cy: "22",
      r: "6"
    }, [
      vue.h("animate", {
        attributeName: "r",
        begin: "1.5s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "stroke-opacity",
        begin: "1.5s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "stroke-width",
        begin: "1.5s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("circle", {
      cx: "22",
      cy: "22",
      r: "6"
    }, [
      vue.h("animate", {
        attributeName: "r",
        begin: "3s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "stroke-opacity",
        begin: "3s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "stroke-width",
        begin: "3s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("circle", {
      cx: "22",
      cy: "22",
      r: "8"
    }, [
      vue.h("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.5s",
        values: "6;1;2;3;4;5;6",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var SpinnerRings = vue.defineComponent({
  name: "VcSpinnerRings",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 45 45",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerRings;
//# sourceMappingURL=spinner-rings.js.map
