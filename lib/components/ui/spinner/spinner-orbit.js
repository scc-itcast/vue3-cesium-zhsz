'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("circle", {
    cx: "50",
    cy: "50",
    r: "44",
    fill: "none",
    "stroke-width": "4",
    "stroke-opacity": ".5",
    stroke: "currentColor"
  }),
  vue.h("circle", {
    cx: "8",
    cy: "54",
    r: "6",
    fill: "currentColor",
    "stroke-width": "3",
    stroke: "currentColor"
  }, [
    vue.h("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "0 50 48",
      to: "360 50 52",
      dur: "2s",
      repeatCount: "indefinite"
    })
  ])
];
var SpinnerOrbit = vue.defineComponent({
  name: "VcSpinnerOrbit",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerOrbit;
//# sourceMappingURL=spinner-orbit.js.map
