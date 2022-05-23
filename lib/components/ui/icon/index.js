'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useSize = require('../../../composables/private/use-size.js');
var render = require('../../../utils/private/render.js');

const iconProps = {
  ...useSize.useSizeProps,
  tag: {
    type: String,
    default: "i"
  },
  name: String,
  color: String,
  hoverColor: String,
  left: Boolean,
  right: Boolean
};
var Icon = vue.defineComponent({
  name: "VcIcon",
  props: iconProps,
  setup(props, { slots }) {
    const sizeStyle = useSize["default"](props);
    const style = vue.computed(() => {
      const css = sizeStyle.value;
      if (!css) {
        return void 0;
      }
      props.color && (css.color = props.color);
      props.hoverColor && (css["--hover-color"] = props.hoverColor);
      return css;
    });
    const classes = vue.computed(() => "vc-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : ""));
    const type = vue.computed(() => {
      let cls;
      let icon = props.name;
      if (!icon) {
        return {
          none: true,
          cls: classes.value
        };
      }
      if (icon.startsWith("M") === true) {
        const [def, viewBox] = icon.split("|");
        return {
          svg: true,
          cls: classes.value,
          nodes: def.split("&&").map((path) => {
            const [d, style2, transform] = path.split("@@");
            return vue.h("path", {
              style: style2,
              d,
              transform
            });
          }),
          viewBox: viewBox !== void 0 ? viewBox : "0 0 24 24"
        };
      }
      if (icon.startsWith("img:") === true) {
        return {
          img: true,
          cls: classes.value,
          src: icon.substring(4)
        };
      }
      if (icon.startsWith("svguse:") === true) {
        const [def, viewBox] = icon.split("|");
        return {
          svguse: true,
          cls: classes.value,
          src: def.substring(7),
          viewBox: viewBox !== void 0 ? viewBox : "0 0 24 24"
        };
      }
      let content = " ";
      if (/^[l|f]a[s|r|l|b|d]{0,1} /.test(icon) || icon.startsWith("icon-") === true) {
        cls = icon;
      } else if (icon.startsWith("bt-") === true) {
        cls = `bt ${icon}`;
      } else if (icon.startsWith("eva-") === true) {
        cls = `eva ${icon}`;
      } else if (/^ion-(md|ios|logo)/.test(icon) === true) {
        cls = `ionicons ${icon}`;
      } else if (icon.startsWith("ion-") === true) {
        cls = `ionicons ion-md${icon.substr(3)}`;
      } else if (icon.startsWith("mdi-") === true) {
        cls = `mdi ${icon}`;
      } else if (icon.startsWith("iconfont ") === true) {
        cls = `${icon}`;
      } else if (icon.startsWith("ti-") === true) {
        cls = `themify-icon ${icon}`;
      } else if (icon.startsWith("vc-") === true) {
        cls = `vc-icons ${icon}`;
      } else {
        cls = "notranslate material-icons";
        if (icon.startsWith("o_") === true) {
          icon = icon.substring(2);
          cls += "-outlined";
        } else if (icon.startsWith("r_") === true) {
          icon = icon.substring(2);
          cls += "-round";
        } else if (icon.startsWith("s_") === true) {
          icon = icon.substring(2);
          cls += "-sharp";
        }
        content = icon;
      }
      return {
        cls: cls + " " + classes.value,
        content
      };
    });
    return () => {
      const data = {
        class: type.value.cls,
        style: style.value,
        "aria-hidden": "true",
        role: "presentation",
        viewBox: "",
        src: ""
      };
      if (type.value.none === true) {
        return vue.h(props.tag, data, render.hSlot(slots.default));
      }
      if (type.value.img === true) {
        data.src = type.value.src;
        if (data.style) {
          data.style.width = data.style.fontSize;
          data.style.height = data.style.fontSize;
        }
        return vue.h("img", data);
      }
      if (type.value.svg === true) {
        data.viewBox = type.value.viewBox;
        data["aria-hidden"] = "true";
        if (data.style) {
          data.style.width = data.style.fontSize;
          data.style.height = data.style.fontSize;
        }
        return vue.h("svg", data, render.hMergeSlot(slots.default, type.value.nodes));
      }
      if (type.value.svguse === true) {
        data.viewBox = type.value.viewBox;
        data["aria-hidden"] = "true";
        if (data.style) {
          data.style.width = data.style.fontSize;
          data.style.height = data.style.fontSize;
        }
        return vue.h("svg", data, render.hMergeSlot(slots.default, [vue.h("use", { "xlink:href": type.value.src })]));
      }
      return vue.h(props.tag, data, render.hMergeSlot(slots.default, [type.value.content]));
    };
  }
});

exports["default"] = Icon;
exports.iconProps = iconProps;
//# sourceMappingURL=index.js.map
