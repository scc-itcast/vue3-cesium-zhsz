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
      cx: "5",
      cy: "50",
      r: "5"
    }, [
      vue.h("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;5;50;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        values: "5;27;49;5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("circle", {
      cx: "27",
      cy: "5",
      r: "5"
    }, [
      vue.h("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        from: "5",
        to: "5",
        values: "5;50;50;5",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        from: "27",
        to: "27",
        values: "27;49;5;27",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("circle", {
      cx: "49",
      cy: "50",
      r: "5"
    }, [
      vue.h("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;50;5;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      vue.h("animate", {
        attributeName: "cx",
        from: "49",
        to: "49",
        begin: "0s",
        dur: "2.2s",
        values: "49;5;27;49",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var SpinnerBall = vue.defineComponent({
  name: "VcSpinnerBall",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      stroke: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 57 57",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerBall;
//# sourceMappingURL=spinner-ball.js.map
