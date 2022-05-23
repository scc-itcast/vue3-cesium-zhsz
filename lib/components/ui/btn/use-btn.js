'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useAlign = require('../../../composables/private/use-align.js');
var useSize = require('../../../composables/private/use-size.js');

const padding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const useBtnProps = {
  ...useSize.useSizeProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  round: Boolean,
  outline: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  rounded: Boolean,
  push: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlign.useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function useBtn(props) {
  const sizeStyle = useSize["default"](props, defaultSizes);
  const alignClass = useAlign["default"](props);
  const style = vue.computed(() => {
    const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
    return props.padding !== void 0 ? Object.assign({}, obj, {
      padding: props.padding.split(/\s+/).map((v) => v in padding ? padding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = vue.computed(() => props.rounded === true || props.fab === true || props.fabMini === true);
  const isActionable = vue.computed(() => props.disable !== true && props.loading !== true);
  const tabIndex = vue.computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
  const design = vue.computed(() => {
    if (props.flat === true)
      return "flat";
    if (props.outline === true)
      return "outline";
    if (props.push === true)
      return "push";
    if (props.unelevated === true)
      return "unelevated";
    return "standard";
  });
  const attributes = vue.computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (props.type !== "a") {
      acc.type = props.type;
    }
    acc.role = props.type === "a" ? "link" : "button";
    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props.percentage
      });
    }
    if (props.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    return acc;
  });
  const classes = vue.computed(() => {
    let colors;
    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${props.textColor || props.color}`;
      } else {
        colors = `bg-${props.color} text-${props.textColor || "white"}`;
      }
    } else if (props.textColor) {
      colors = `text-${props.textColor}`;
    }
    return `vc-btn--${design.value} vc-btn--${props.round === true ? "round" : `rectangle${isRounded.value === true ? " vc-btn--rounded" : ""}`}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " vc-btn--actionable vc-focusable vc-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " vc-btn--fab" : props.fabMini === true ? " vc-btn--fab-mini" : "") + (props.noCaps === true ? " vc-btn--no-uppercase" : "") + (props.dense === true ? " vc-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "");
  });
  const innerClasses = vue.computed(() => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " vc-btn__content--hidden" : ""));
  return {
    classes,
    style,
    innerClasses,
    attributes,
    isActionable
  };
}

exports["default"] = useBtn;
exports.useBtnProps = useBtnProps;
//# sourceMappingURL=use-btn.js.map
