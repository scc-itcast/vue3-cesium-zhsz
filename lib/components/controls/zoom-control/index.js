"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var vue = require("vue");
var usePosition = require("../../../composables/private/use-position.js");
var vm = require("../../../utils/private/vm.js");
var cesiumHelpers = require("../../../utils/cesium-helpers.js");
var render = require("../../../utils/private/render.js");
var defaultProps = require("./defaultProps.js");
var index$2 = require("../../ui/index.js");
require("../../../composables/index.js");
var useZoomControl = require("./use-zoom-control.js");
var util = require("../../../utils/util.js");
var emits$1 = require("../../../utils/emits.js");
var index = require("../../../composables/use-common/index.js");
var index$1 = require("../../../composables/use-locale/index.js");

const emits = {
  ...emits$1.commonEmits,
  zoomEvt: (evt) => true,
};
const zoomControlProps = defaultProps.defaultProps;
var ZoomControl = vue.defineComponent({
  name: "VcZoomControl",
  props: zoomControlProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcZoomControl";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = index$1.useLocale();
    const { $services } = commonState;
    const zoomControlState = useZoomControl["default"](
      props,
      ctx,
      instance,
      $services
    );
    const positionState = usePosition["default"](props, $services);
    const rootRef = vue.ref(null);
    const zoomInRef = vue.ref(null);
    const zoomResetRef = vue.ref(null);
    const zoomOutRef = vue.ref(null);
    const parentInstance = vm.getVcParentInstance(instance);
    const hasVcNavigation =
      ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) ===
      "VcNavigation";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
    vue.watch(
      () => props,
      (val) => {
        vue.nextTick(() => {
          if (!instance.mounted) {
            return;
          }
          updateRootStyle();
        });
      },
      {
        deep: true,
      }
    );
    const zoomOutOptions = vue.computed(() =>
      Object.assign(
        {},
        defaultProps.defaultOptions.zoomOutOptions,
        props.zoomOutOptions
      )
    );
    const zoomInOptions = vue.computed(() =>
      Object.assign(
        {},
        defaultProps.defaultOptions.zoomInOptions,
        props.zoomInOptions
      )
    );
    const zoomResetOptions = vue.computed(() =>
      Object.assign(
        {},
        defaultProps.defaultOptions.zoomResetOptions,
        props.zoomResetOptions
      )
    );
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true;
        vue.nextTick(() => {
          const { viewer } = $services;
          if (props.overrideViewerCamera) {
            const resetView = props.defaultResetView;
            cesiumHelpers.setViewerCamera(viewer, resetView);
          }
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild(vm.$(rootRef));
            resolve(vm.$(rootRef));
          } else {
            resolve(vm.$(rootRef));
          }
        });
      });
    };
    instance.mount = async () => {
      var _a2;
      updateRootStyle();
      const { viewer } = $services;
      (_a2 = viewer.viewerWidgetResized) == null
        ? void 0
        : _a2.raiseEvent({
            type: instance.cesiumClass,
            status: "mounted",
            target: vm.$(rootRef),
          });
      return true;
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      if (!hasVcNavigation) {
        const viewerElement = viewer._element;
        viewerElement.contains(vm.$(rootRef)) &&
          viewerElement.removeChild(vm.$(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null
        ? void 0
        : _a2.raiseEvent({
            type: instance.cesiumClass,
            status: "unmounted",
            target: vm.$(rootRef),
          });
      return true;
    };
    const updateRootStyle = () => {
      var _a2, _b, _c;
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      css.flexDirection = props.direction === "vertical" ? "column" : "row";
      css.background = props.background;
      css.borderRadius = props.borderRadius;
      css.border = props.border;
      if (!hasVcNavigation) {
        const zoomInTarget = (_a2 = vm.$(zoomInRef)) == null ? void 0 : _a2.$el;
        const zoomResetTarget =
          (_b = vm.$(zoomResetRef)) == null ? void 0 : _b.$el;
        const zoomOutTarget = (_c = vm.$(zoomOutRef)) == null ? void 0 : _c.$el;
        let width = 0;
        let height = 0;
        if (zoomInTarget !== void 0) {
          const zoomInClientRect = zoomInTarget.getBoundingClientRect();
          if (props.direction === "horizontal") {
            width += zoomInClientRect.width;
            height =
              zoomInClientRect.height > height
                ? zoomInClientRect.height
                : height;
          } else {
            height += zoomInClientRect.height;
            width =
              zoomInClientRect.width > width ? zoomInClientRect.width : width;
          }
        }
        if (zoomResetTarget !== void 0) {
          const zoomResetClientRect = zoomResetTarget.getBoundingClientRect();
          if (props.direction === "horizontal") {
            width += zoomResetClientRect.width;
            height =
              zoomResetClientRect.height > height
                ? zoomResetClientRect.height
                : height;
          } else {
            height += zoomResetClientRect.height;
            width =
              zoomResetClientRect.width > width
                ? zoomResetClientRect.width
                : width;
          }
        }
        if (zoomOutTarget !== void 0) {
          const zoomOutClientRect = zoomOutTarget.getBoundingClientRect();
          if (props.direction === "horizontal") {
            width += zoomOutClientRect.width;
            height =
              zoomOutClientRect.height > height
                ? zoomOutClientRect.height
                : height;
          } else {
            height += zoomOutClientRect.height;
            width =
              zoomOutClientRect.width > width ? zoomOutClientRect.width : width;
          }
        }
        css.width = `${width + 4}px`;
        css.height = `${height + 4}px`;
        const side = positionState.attach.value;
        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = "50%";
          css.transform = "translate(-50%, 0)";
        }
        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = "50%";
          css.transform = "translate(0, -50%)";
        }
      }
      Object.assign(rootStyle, props.style, css);
    };
    const getContent = (options, type) => {
      var _a2, _b, _c;
      let btnRef;
      let tooltipRef;
      let tip;
      let onClick;
      if (type === "zoomIn") {
        btnRef = zoomInRef;
        tooltipRef = zoomControlState.zoomInTooltipRef;
        tip =
          ((_a2 = options.tooltip) == null ? void 0 : _a2.tip) ||
          t("vc.navigation.zoomCotrol.zoomInTip");
        onClick = zoomControlState.zoomIn;
      } else if (type === "zoomOut") {
        btnRef = zoomOutRef;
        tooltipRef = zoomControlState.zoomOutTooltipRef;
        tip =
          ((_b = options.tooltip) == null ? void 0 : _b.tip) ||
          t("vc.navigation.zoomCotrol.zoomOutTip");
        onClick = zoomControlState.zoomOut;
      } else if (type === "zoomReset") {
        btnRef = zoomResetRef;
        tooltipRef = zoomControlState.resetTooltipRef;
        tip =
          ((_c = options.tooltip) == null ? void 0 : _c.tip) ||
          t("vc.navigation.zoomCotrol.zoomResetTip");
        onClick = zoomControlState.zoomReset;
      }
      const inner = [];
      inner.push(
        vue.h(index$2.VcIcon, {
          name: options.icon,
          size: options.size,
        })
      );
      inner.push(vue.h("div", null, options.label));
      if (options.tooltip) {
        inner.push(
          vue.h(
            index$2.VcTooltip,
            {
              ref: tooltipRef,
              ...options.tooltip,
            },
            () => vue.h("strong", null, tip)
          )
        );
      } else {
        inner.push(vue.createCommentVNode("v-if"));
      }
      const content = vue.h(
        index$2.VcBtn,
        {
          class: `vc-${util.kebabCase(type)}`,
          ref: btnRef,
          size: options.size,
          flat: options.flat,
          stack: options.stack,
          round: options.round,
          dense: true,
          style: {
            color: options.color,
            background: options.background,
            ...options.style,
          },
          onClick,
        },
        () => render.hMergeSlot(ctx.slots.default, inner)
      );
      return content;
    };
    return () => {
      if (canRender.value) {
        const children = [];
        if (ctx.slots.outer) {
          children.push(
            h("li", { style: { position: "absolute" } }, ctx.slots.outer())
          );
        }
        children.push(
          vue.h("li", null, getContent(zoomInOptions.value, "zoomIn"))
        );
        if (props.enableResetButton) {
          children.push(
            vue.h("li", null, getContent(zoomResetOptions.value, "zoomReset"))
          );
        } else {
          children.push(vue.createCommentVNode("v-if"));
        }
        children.push(
          vue.h("li", null, getContent(zoomOutOptions.value, "zoomOut"))
        );
        return vue.h(
          "div",
          {
            ref: rootRef,
            class: "vc-zoom-control " + positionState.classes.value,
            style: rootStyle,
          },
          vue.h(
            "ul",
            {
              class: "vc-list",
            },
            children
          )
        );
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  },
});

exports["default"] = ZoomControl;
exports.zoomControlProps = zoomControlProps;
//# sourceMappingURL=index.js.map
