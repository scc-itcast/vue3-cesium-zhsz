import '../../../composables/index.mjs';
import usePosition from '../../../composables/private/use-position.mjs';
import { VcBtn, VcTooltip } from '../../ui/index.mjs';
import { $ } from '../../../utils/private/vm.mjs';
import { defineComponent, getCurrentInstance, ref, reactive, computed, onUnmounted, h, createCommentVNode } from 'vue';
import _Viewer from '../../viewer/index.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';

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
var OverviewMap = defineComponent({
  name: "VcOverviewMap",
  props: overviewProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcOverviewMap";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = useLocale();
    const { $services } = commonState;
    const rootRef = ref(null);
    const rootStyle = reactive({});
    const toggleBtnRef = ref(null);
    const tooltipRef = ref(null);
    const viewerRef = ref(null);
    const positionState = usePosition(props, $services);
    let minimized = false;
    let unwatchFns = [];
    let overviewViewer;
    const toggleOpts = computed(() => {
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
    const viewerOpts = computed(() => {
      return Object.assign({}, {
        removeCesiumScript: false,
        showCredit: false,
        sceneMode: 2
      }, props.viewerOpts);
    });
    instance.createCesiumObject = async () => {
      const { viewer } = $services;
      const viewerElement = viewer._element;
      viewerElement.appendChild($(rootRef));
      return [$(rootRef), $(viewerRef)];
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
      viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
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
        const toggleBtnRefStyle = getComputedStyle((_a = $(toggleBtnRef)) == null ? void 0 : _a.$el);
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
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      const children = [];
      children.push(h(VcBtn, {
        ref: toggleBtnRef,
        class: "toggle toggle-" + props.position + (minimized ? " minimized " : ""),
        flat: true,
        dense: true,
        icon: toggleOpts.value.icon,
        size: toggleOpts.value.size,
        style: { color: toggleOpts.value.color, background: toggleOpts.value.background },
        onClick: onToggle
      }, () => toggleOpts.value.tooltip ? h(VcTooltip, {
        ref: tooltipRef,
        ...toggleOpts.value.tooltip
      }, () => h("strong", {}, toggleOpts.value.tooltip.tip || t(`vc.overview.${minimized ? "show" : "hidden"}`))) : createCommentVNode("v-if")));
      children.push(h(_Viewer, {
        ref: viewerRef,
        ...viewerOpts.value,
        onReady: onViewerReady
      }, () => hSlot(ctx.slots.default)));
      return h("div", {
        ref: rootRef,
        class: "vc-overview-map " + positionState.classes.value,
        style: rootStyle
      }, children);
    };
  }
});

export { OverviewMap as default, overviewProps };
//# sourceMappingURL=index.mjs.map
