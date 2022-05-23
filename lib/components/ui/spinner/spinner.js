'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSpinner = require('./use-spinner.js');

var Spinner = vue.defineComponent({
  name: "VcSpinner",
  props: {
    ...useSpinner.useSpinnerProps,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const { cSize, classes } = useSpinner["default"](props);
    return () => vue.h("svg", {
      class: classes.value + " vc-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      vue.h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});

exports["default"] = Spinner;
//# sourceMappingURL=spinner.js.map
