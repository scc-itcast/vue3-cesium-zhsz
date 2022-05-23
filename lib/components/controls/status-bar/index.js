'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vm = require('../../../utils/private/vm.js');
var usePosition = require('../../../composables/private/use-position.js');
var MouseCoords = require('./MouseCoords.js');
var throttle = require('../../../utils/private/throttle.js');
require('../../../composables/index.js');
var index$2 = require('../../ui/index.js');
var defaultProps = require('./defaultProps.js');
require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var index = require('../../../composables/use-common/index.js');
var index$1 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

const emits = {
  ...emits$1.commonEmits,
  statusBarEvt: (evt) => true
};
const statusBarProps = defaultProps["default"];
var StatusBar = vue.defineComponent({
  name: "VcStatusBar",
  props: statusBarProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcStatusBar";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const parentInstance = vm.getVcParentInstance(instance);
    const { $services } = commonState;
    const rootRef = vue.ref(null);
    const tooltipRef = vue.ref(null);
    const { t } = index$1.useLocale();
    let lastMouseX = -1;
    let lastMouseY = -1;
    const cameraInfo = vue.reactive({
      heading: "NaN",
      pitch: "NaN",
      roll: "NaN",
      height: "NaN",
      level: "NaN"
    });
    const performanceInfo = vue.reactive({
      fps: "NaN",
      ms: "NaN"
    });
    const mouseCoordsInfo = vue.ref();
    const positionState = usePosition["default"](props, $services);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
    vue.watch(() => props, (val) => {
      vue.nextTick(() => {
        if (!instance.mounted) {
          return;
        }
        updateRootStyle();
      });
    }, {
      deep: true
    });
    instance.createCesiumObject = async () => {
      canRender.value = true;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      if (props.showMouseInfo) {
        mouseCoordsInfo.value = new MouseCoords["default"]({
          gridFileUrl: props.gridFileUrl,
          proj4Projection: props.proj4Projection,
          projectionUnits: props.projectionUnits,
          proj4longlat: props.proj4longlat
        });
        viewerElement.addEventListener("wheel", onMouseMove, false);
        viewerElement.addEventListener("mousemove", onMouseMove, false);
        viewerElement.addEventListener("touchmove", onMouseMove, false);
        MouseCoords.extendForMouseCoords();
      }
      if (props.showCameraInfo) {
        viewer.camera.changed.addEventListener(onCameraChanged);
        onCameraChanged();
      }
      if (props.showPerformanceInfo) {
        viewer.scene.debugShowFramesPerSecond = true;
        viewer.scene.postRender.addEventListener(onScenePostRender);
      }
      return new Promise((resolve, reject) => {
        vue.nextTick(() => {
          var _a2, _b, _c;
          if (!hasVcNavigation) {
            const viewerElement2 = viewer._element;
            viewerElement2.appendChild((_a2 = vm.$(rootRef)) == null ? void 0 : _a2.$el);
            resolve((_b = vm.$(rootRef)) == null ? void 0 : _b.$el);
          } else {
            resolve((_c = vm.$(rootRef)) == null ? void 0 : _c.$el);
          }
        });
      });
    };
    instance.mount = async () => {
      var _a2, _b;
      updateRootStyle();
      const { viewer } = $services;
      (_b = viewer.viewerWidgetResized) == null ? void 0 : _b.raiseEvent({
        type: instance.cesiumClass,
        status: "mounted",
        target: (_a2 = vm.$(rootRef)) == null ? void 0 : _a2.$el
      });
      return true;
    };
    instance.unmount = async () => {
      var _a2, _b, _c, _d;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      if (props.showMouseInfo) {
        mouseCoordsInfo.value = void 0;
        viewerElement.removeEventListener("wheel", onMouseMove);
        viewerElement.removeEventListener("mousemove", onMouseMove);
        viewerElement.removeEventListener("touchmove", onMouseMove);
      }
      if (props.showCameraInfo) {
        viewer.camera.changed.removeEventListener(onCameraChanged);
      }
      if (props.showPerformanceInfo) {
        if (viewer.scene._performanceDisplay) {
          viewer.scene._performanceDisplay._container.style.display = "block";
        }
        viewer.scene.postRender.removeEventListener(onScenePostRender);
      }
      if (!hasVcNavigation) {
        viewerElement.contains((_a2 = vm.$(rootRef)) == null ? void 0 : _a2.$el) && viewerElement.removeChild((_b = vm.$(rootRef)) == null ? void 0 : _b.$el);
      }
      (_d = viewer.viewerWidgetResized) == null ? void 0 : _d.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: (_c = vm.$(rootRef)) == null ? void 0 : _c.$el
      });
      return true;
    };
    const updateRootStyle = () => {
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      css.background = props.background;
      css.color = props.color;
      const side = positionState.attach.value;
      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = "50%";
        css.transform = "translate(-50%, 0)";
      }
      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = "50%";
        css.transform = "translate(0, -50%)";
      }
      Object.assign(rootStyle, css);
    };
    const onScenePostRender = throttle["default"]((scene) => {
      var _a2, _b;
      performanceInfo.fps = (_a2 = scene._performanceDisplay) == null ? void 0 : _a2._fpsText.nodeValue;
      performanceInfo.ms = (_b = scene._performanceDisplay) == null ? void 0 : _b._msText.nodeValue;
      scene._performanceDisplay._container.style.display = "none";
    }, 500);
    const onCameraChanged = () => {
      const { viewer } = $services;
      const { Math: CesiumMath } = Cesium;
      cameraInfo.heading = CesiumMath.toDegrees(viewer.camera.heading).toFixed(1);
      cameraInfo.pitch = CesiumMath.toDegrees(viewer.camera.pitch).toFixed(1);
      cameraInfo.roll = CesiumMath.toDegrees(viewer.camera.roll).toFixed(1);
      cameraInfo.height = viewer.camera.positionCartographic.height.toFixed(2);
      cameraInfo.level = cesiumHelpers.heightToLevel(Number(cameraInfo.height)).toFixed(0);
    };
    const onMouseMove = (e) => {
      var _a2;
      const { Cartesian2, SceneMode } = Cesium;
      const { viewer } = $services;
      if (viewer.scene.mode === SceneMode.MORPHING)
        return;
      const clientX = e.type === "mousemove" || e.type === "wheel" ? e.clientX : e.changedTouches[0].clientX;
      const clientY = e.type === "mousemove" || e.type === "wheel" ? e.clientY : e.changedTouches[0].clientY;
      if (clientX === lastMouseX && clientY === lastMouseY) {
        return;
      }
      lastMouseX = clientX;
      lastMouseY = clientY;
      const viewerElement = viewer._element;
      if (viewer) {
        if (props.showMouseInfo) {
          const rect = viewerElement.getBoundingClientRect();
          const position = new Cartesian2(clientX - rect.left, clientY - rect.top);
          (_a2 = mouseCoordsInfo.value) == null ? void 0 : _a2.updateCoordinatesFromCesium(viewer, position);
        }
        const listener = vm.getInstanceListener(instance, "statusBarEvt");
        listener && ctx.emit("statusBarEvt", {
          type: "statusBar",
          mouseCoordsInfo: mouseCoordsInfo.value,
          cameraInfo,
          performanceInfo
        });
      }
    };
    const toggleUseProjection = () => {
      var _a2, _b;
      if (!props.useProjection) {
        return;
      }
      (_a2 = vm.$(tooltipRef)) == null ? void 0 : _a2.hide();
      if (props.showMouseInfo) {
        (_b = mouseCoordsInfo.value) == null ? void 0 : _b.toggleUseProjection();
      }
    };
    Object.assign(instance.proxy, {
      getMouseCoordsInfo: () => mouseCoordsInfo.value,
      getCameraInfo: () => cameraInfo,
      getPerformanceInfo: () => performanceInfo
    });
    return () => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      if (canRender.value) {
        const inner = [];
        if (props.showMouseInfo) {
          if (!((_a2 = mouseCoordsInfo.value) == null ? void 0 : _a2.useProjection)) {
            inner.push(vue.h("div", {
              class: "vc-section ellipsis"
            }, [
              vue.h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.lng")),
              vue.h("span", {}, (_b = mouseCoordsInfo.value) == null ? void 0 : _b.longitude)
            ]), vue.h("div", {
              class: "vc-section ellipsis"
            }, [vue.h("span", {}, t("vc.navigation.statusBar.lat")), vue.h("span", {}, (_c = mouseCoordsInfo.value) == null ? void 0 : _c.latitude)]));
          } else {
            inner.push(vue.h("div", {
              class: "vc-section-short ellipsis"
            }, [
              vue.h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.zone")),
              vue.h("span", null, (_d = mouseCoordsInfo.value) == null ? void 0 : _d.utmZone)
            ]), vue.h("div", {
              class: "vc-section ellipsis"
            }, [
              vue.h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.e")),
              vue.h("span", null, (_e = mouseCoordsInfo.value) == null ? void 0 : _e.east)
            ]), vue.h("div", {
              class: "vc-section ellipsis"
            }, [
              vue.h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.n")),
              vue.h("span", null, (_f = mouseCoordsInfo.value) == null ? void 0 : _f.north)
            ]));
          }
          if ((_g = mouseCoordsInfo.value) == null ? void 0 : _g.elevation) {
            inner.push(vue.h("div", {
              class: "vc-section ellipsis"
            }, [
              vue.h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.elev")),
              vue.h("span", {}, (_h = mouseCoordsInfo.value) == null ? void 0 : _h.elevation)
            ]));
          } else {
            inner.push(vue.createCommentVNode("v-if"));
          }
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        if (props.showCameraInfo) {
          inner.push(vue.h("div", {
            class: "vc-section-short-mini ellipsis"
          }, [
            vue.h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.level")),
            vue.h("span", null, cameraInfo.level)
          ]), vue.h("div", {
            class: "vc-section-short ellipsis"
          }, [
            vue.h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.heading")),
            vue.h("span", null, `${cameraInfo.heading}\xB0`)
          ]), vue.h("div", {
            class: "vc-section-short ellipsis"
          }, [
            vue.h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.pitch")),
            vue.h("span", null, `${cameraInfo.pitch}\xB0`)
          ]), vue.h("div", {
            class: "vc-section-short ellipsis"
          }, [
            vue.h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.roll")),
            vue.h("span", null, `${cameraInfo.roll}\xB0`)
          ]), vue.h("div", {
            class: "vc-section ellipsis"
          }, [
            vue.h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.cameraHeight")),
            vue.h("span", null, `${cameraInfo.height}m`)
          ]));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        if (props.showPerformanceInfo) {
          inner.push(vue.h("div", {
            class: "vc-section-short-mini ellipsis"
          }, [vue.h("span", null, performanceInfo.ms)]), vue.h("div", {
            class: "vc-section-short-mini ellipsis"
          }, [vue.h("span", null, performanceInfo.fps)]));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        if (shared.isPlainObject(props.tooltip) && props.showMouseInfo && props.useProjection) {
          inner.push(vue.h(index$2.VcTooltip, {
            ref: tooltipRef,
            ...props.tooltip
          }, () => vue.h("strong", null, shared.isPlainObject(props.tooltip) && props.tooltip.tip || t("vc.navigation.statusBar.tip"))));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        return vue.h(index$2.VcBtn, {
          ref: rootRef,
          class: "vc-status-bar " + positionState.classes.value,
          style: rootStyle,
          noCaps: true,
          onClick: toggleUseProjection
        }, () => inner);
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = StatusBar;
exports.statusBarProps = statusBarProps;
//# sourceMappingURL=index.js.map
