'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

const svg = [
  vue.h("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, [
    vue.h("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    vue.h("animate", {
      attributeName: "y",
      begin: "0.5s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  vue.h("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, [
    vue.h("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    vue.h("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  vue.h("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, [
    vue.h("animate", {
      attributeName: "height",
      begin: "0s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    vue.h("animate", {
      attributeName: "y",
      begin: "0s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  vue.h("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, [
    vue.h("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    vue.h("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  vue.h("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, [
    vue.h("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    vue.h("animate", {
      attributeName: "y",
      begin: "0.5s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ])
];
var SpinnerBars = vue.defineComponent({
  name: "VcSpinnerBars",
  props: useSpinner.useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 135 140",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});

exports["default"] = SpinnerBars;
//# sourceMappingURL=spinner-bars.js.map
