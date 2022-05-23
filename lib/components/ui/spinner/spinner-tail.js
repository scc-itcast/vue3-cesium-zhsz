'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("defs", [
    vue.h("linearGradient", {
      x1: "8.042%",
      y1: "0%",
      x2: "65.682%",
      y2: "23.865%",
      id: "a"
    }, [
      vue.h("stop", {
        "stop-color": "currentColor",
        "stop-opacity": "0",
        offset: "0%"
      }),
      vue.h("stop", {
        "stop-color": "currentColor",
        "stop-opacity": ".631",
        offset: "63.146%"
      }),
      vue.h("stop", {
        "stop-color": "currentColor",
        offset: "100%"
      })
    ])
  ]),
  vue.h("g", {
    transform: "translate(1 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    vue.h("path", {
      d: "M36 18c0-9.94-8.06-18-18-18",
      stroke: "url(#a)",
      "stroke-width": "2"
    }, [
      vue.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("circle", {
      fill: "currentColor",
      cx: "36",
      cy: "18",
      r: "1"
    }, [
      vue.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var SpinnerTail = vue.defineComponent({
  name: "VcSpinnerTail",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerTail;
//# sourceMappingURL=spinner-tail.js.map
