'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../composables/index.js');
var usePosition = require('../../../composables/private/use-position.js');
var index$2 = require('../../ui/index.js');
var vm = require('../../../utils/private/vm.js');
var vue = require('vue');
var index$3 = require('../../viewer/index.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');
var index$1 = require('../../../composables/use-locale/index.js');

const overviewProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => ["top-right", "top-left", "bottom-right", "bottom-left"].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  width: {
    type: String,
    default: "150px"
  },
  height: {
    type: String,
    default: "150px"
  },
  border: {
    type: String,
    default: "solid 4px rgb(255, 255, 255)"
  },
  borderRadius: {
    type: String
  },
  toggleOpts: {
    type: Object
  },
  viewerOpts: {
    type: Object
  }
};
var OverviewMap = vue.defineComponent({
  name: "VcOverviewMap",
  props: overviewProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcOverviewMap";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = index$1.useLocale();
    const { $services } = commonState;
    const rootRef = vue.ref(null);
    const rootStyle = vue.reactive({});
    const toggleBtnRef = vue.ref(null);
    const tooltipRef = vue.ref(null);
    const viewerRef = vue.ref(null);
    const positionState = usePosition["default"](props, $services);
    let minimized = false;
    let unwatchFns = [];
    let overviewViewer;
    const toggleOpts = vue.computed(() => {
      return Object.assign({}, {
        show: true,
        color: "#fff",
        background: "#3f4854",
        icon: "vc-icons-overview-toggle",
        size: "15px",
        tooltip: {
          delay: 500,
          anchor: "bottom middle",
          offset: [0, 20],
          tip: void 0
        }
      }, props.toggleOpts);
    });
    const viewerOpts = vue.computed(() => {
      return Object.assign({}, {
        removeCesiumScript: false,
        showCredit: false,
        sceneMode: 2
      }, props.viewerOpts);
    });
    instance.createCesiumObject = async () => {
      const { viewer } = $services;
      const viewerElement = viewer._element;
      viewerElement.appendChild(vm.$(rootRef));
      return [vm.$(rootRef), vm.$(viewerRef)];
    };
    instance.mount = async () => {
      updateRootStyle();
      const { viewer } = $services;
      viewer.clock.onTick.addEventListener(onClockTick);
      return true;
    };
    instance.unmount = async () => {
      const { viewer } = $services;
      const viewerElement = viewer._element;
      viewer.clock.onTick.removeEventListener(onClockTick);
      viewerElement.contains(vm.$(rootRef)) && viewerElement.removeChild(vm.$(rootRef));
      return true;
    };
    const onClockTick = () => {
      const { viewer } = $services;
      overviewViewer && overviewViewer.camera.flyTo({
        destination: viewer.camera.position,
        orientation: {
          heading: viewer.camera.heading,
          pitch: viewer.camera.pitch,
          roll: viewer.camera.roll
        },
        duration: 0
      });
    };
    const onViewerReady = (readyObj) => {
      const { viewer } = readyObj;
      overviewViewer = viewer;
      const control = viewer.scene.screenSpaceCameraController;
      control.enableRotate = false;
      control.enableTranslate = false;
      control.enableZoom = false;
      control.enableTilt = false;
      control.enableLook = false;
    };
    const updateRootStyle = () => {
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      css.borderRadius = props.borderRadius;
      css.border = props.border;
      css.width = props.width;
      css.height = props.height;
      minimized = false;
      Object.assign(rootStyle, css);
    };
    const onToggle = () => {
      if (!minimized) {
        minimize();
      } else {
        restore();
      }
      minimized = !minimized;
    };
    const minimize = () => {
      var _a;
      if (toggleOpts.value.show) {
        const reg = /(\d+)/g;
        const regResult = reg.exec(props.border);
        const boder = (regResult == null ? void 0 : regResult.length) ? parseFloat(regResult[0]) : 0;
        const toggleBtnRefStyle = getComputedStyle((_a = vm.$(toggleBtnRef)) == null ? void 0 : _a.$el);
        rootStyle.width = `${parseFloat(toggleBtnRefStyle.width) + parseFloat(toggleBtnRefStyle.padding) + boder}px`;
        rootStyle.height = `${parseFloat(toggleBtnRefStyle.height) + parseFloat(toggleBtnRefStyle.padding) + boder}px`;
      } else {
        rootStyle.display = "block";
      }
    };
    const restore = () => {
      if (toggleOpts.value.show) {
        rootStyle.width = props.width;
        rootStyle.height = props.height;
      } else {
        rootStyle.display = "none";
      }
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      const children = [];
      children.push(vue.h(index$2.VcBtn, {
        ref: toggleBtnRef,
        class: "toggle toggle-" + props.position + (minimized ? " minimized " : ""),
        flat: true,
        dense: true,
        icon: toggleOpts.value.icon,
        size: toggleOpts.value.size,
        style: { color: toggleOpts.value.color, background: toggleOpts.value.background },
        onClick: onToggle
      }, () => toggleOpts.value.tooltip ? vue.h(index$2.VcTooltip, {
        ref: tooltipRef,
        ...toggleOpts.value.tooltip
      }, () => vue.h("strong", {}, toggleOpts.value.tooltip.tip || t(`vc.overview.${minimized ? "show" : "hidden"}`))) : vue.createCommentVNode("v-if")));
      children.push(vue.h(index$3["default"], {
        ref: viewerRef,
        ...viewerOpts.value,
        onReady: onViewerReady
      }, () => render.hSlot(ctx.slots.default)));
      return vue.h("div", {
        ref: rootRef,
        class: "vc-overview-map " + positionState.classes.value,
        style: rootStyle
      }, children);
    };
  }
});

exports["default"] = OverviewMap;
exports.overviewProps = overviewProps;
//# sourceMappingURL=index.js.map
