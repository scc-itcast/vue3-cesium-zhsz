import {
  defineComponent,
  getCurrentInstance,
  ref,
  reactive,
  watch,
  nextTick,
  computed,
  h,
  createCommentVNode,
} from "vue";
import usePosition from "../../../composables/private/use-position.mjs";
import { getVcParentInstance, $ } from "../../../utils/private/vm.mjs";
import { setViewerCamera } from "../../../utils/cesium-helpers.mjs";
import { hMergeSlot } from "../../../utils/private/render.mjs";
import { defaultProps, defaultOptions } from "./defaultProps.mjs";
import { VcIcon, VcTooltip, VcBtn } from "../../ui/index.mjs";
import "../../../composables/index.mjs";
import useZoomControl from "./use-zoom-control.mjs";
import { kebabCase } from "../../../utils/util.mjs";
import { commonEmits } from "../../../utils/emits.mjs";
import useCommon from "../../../composables/use-common/index.mjs";
import { useLocale } from "../../../composables/use-locale/index.mjs";

const emits = {
  ...commonEmits,
  zoomEvt: (evt) => true,
};
const zoomControlProps = defaultProps;
var ZoomControl = defineComponent({
  name: "VcZoomControl",
  props: zoomControlProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcZoomControl";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = useLocale();
    const { $services } = commonState;
    const zoomControlState = useZoomControl(props, ctx, instance, $services);
    const positionState = usePosition(props, $services);
    const rootRef = ref(null);
    const zoomInRef = ref(null);
    const zoomResetRef = ref(null);
    const zoomOutRef = ref(null);
    const parentInstance = getVcParentInstance(instance);
    const hasVcNavigation =
      ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) ===
      "VcNavigation";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    watch(
      () => props,
      (val) => {
        nextTick(() => {
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
    const zoomOutOptions = computed(() =>
      Object.assign({}, defaultOptions.zoomOutOptions, props.zoomOutOptions)
    );
    const zoomInOptions = computed(() =>
      Object.assign({}, defaultOptions.zoomInOptions, props.zoomInOptions)
    );
    const zoomResetOptions = computed(() =>
      Object.assign({}, defaultOptions.zoomResetOptions, props.zoomResetOptions)
    );
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true;
        nextTick(() => {
          const { viewer } = $services;
          if (props.overrideViewerCamera) {
            const resetView = props.defaultResetView;
            setViewerCamera(viewer, resetView);
          }
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild($(rootRef));
            resolve($(rootRef));
          } else {
            resolve($(rootRef));
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
            target: $(rootRef),
          });
      return true;
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      if (!hasVcNavigation) {
        const viewerElement = viewer._element;
        viewerElement.contains($(rootRef)) &&
          viewerElement.removeChild($(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null
        ? void 0
        : _a2.raiseEvent({
            type: instance.cesiumClass,
            status: "unmounted",
            target: $(rootRef),
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
        const zoomInTarget = (_a2 = $(zoomInRef)) == null ? void 0 : _a2.$el;
        const zoomResetTarget =
          (_b = $(zoomResetRef)) == null ? void 0 : _b.$el;
        const zoomOutTarget = (_c = $(zoomOutRef)) == null ? void 0 : _c.$el;
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
        h(VcIcon, {
          name: options.icon,
          size: options.size,
        })
      );
      inner.push(h("div", null, options.label));
      if (options.tooltip) {
        inner.push(
          h(
            VcTooltip,
            {
              ref: tooltipRef,
              ...options.tooltip,
            },
            () => h("strong", null, tip)
          )
        );
      } else {
        inner.push(createCommentVNode("v-if"));
      }
      const content = h(
        VcBtn,
        {
          class: `vc-${kebabCase(type)}`,
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
        () => hMergeSlot(ctx.slots.default, inner)
      );
      return content;
    };
    return () => {
      if (canRender.value) {
        const children = [];
        children.push(h("li", null, getContent(zoomInOptions.value, "zoomIn")));
        if (props.enableResetButton) {
          children.push(
            h("li", null, getContent(zoomResetOptions.value, "zoomReset"))
          );
        } else {
          children.push(createCommentVNode("v-if"));
        }
        children.push(
          h("li", null, getContent(zoomOutOptions.value, "zoomOut"))
        );
        return h(
          "div",
          {
            ref: rootRef,
            class: "vc-zoom-control " + positionState.classes.value,
            style: rootStyle,
          },
          h(
            "ul",
            {
              class: "vc-list",
            },
            children
          )
        );
      } else {
        return createCommentVNode("v-if");
      }
    };
  },
});

export { ZoomControl as default, zoomControlProps };
//# sourceMappingURL=index.mjs.map
