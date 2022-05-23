'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("g", {
    "stroke-width": "4",
    "stroke-linecap": "round"
  }, [
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(180)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(210)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(240)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(270)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(300)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(330)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(0)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(30)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(60)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(90)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(120)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",
        repeatCount: "indefinite"
      })
    ]),
    vue.h("line", {
      y1: "17",
      y2: "29",
      transform: "translate(32,32) rotate(150)"
    }, [
      vue.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var SpinnerIos = vue.defineComponent({
  name: "VcSpinnerIos",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      width: cSize.value,
      height: cSize.value,
      stroke: "currentColor",
      fill: "currentColor",
      viewBox: "0 0 64 64"
    }, svg);
  }
});

exports["default"] = SpinnerIos;
//# sourceMappingURL=spinner-ios.js.map
