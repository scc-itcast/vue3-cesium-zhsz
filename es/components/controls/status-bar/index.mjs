import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, h, createCommentVNode } from 'vue';
import { getVcParentInstance, $, getInstanceListener } from '../../../utils/private/vm.mjs';
import usePosition from '../../../composables/private/use-position.mjs';
import MouseCoords, { extendForMouseCoords } from './MouseCoords.mjs';
import throttle from '../../../utils/private/throttle.mjs';
import '../../../composables/index.mjs';
import { VcTooltip, VcBtn } from '../../ui/index.mjs';
import statusBarDefaultProps from './defaultProps.mjs';
import '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import { heightToLevel } from '../../../utils/cesium-helpers.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { isPlainObject } from '@vue/shared';

const emits = {
  ...commonEmits,
  statusBarEvt: (evt) => true
};
const statusBarProps = statusBarDefaultProps;
var StatusBar = defineComponent({
  name: "VcStatusBar",
  props: statusBarProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcStatusBar";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const parentInstance = getVcParentInstance(instance);
    const { $services } = commonState;
    const rootRef = ref(null);
    const tooltipRef = ref(null);
    const { t } = useLocale();
    let lastMouseX = -1;
    let lastMouseY = -1;
    const cameraInfo = reactive({
      heading: "NaN",
      pitch: "NaN",
      roll: "NaN",
      height: "NaN",
      level: "NaN"
    });
    const performanceInfo = reactive({
      fps: "NaN",
      ms: "NaN"
    });
    const mouseCoordsInfo = ref();
    const positionState = usePosition(props, $services);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    watch(() => props, (val) => {
      nextTick(() => {
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
        mouseCoordsInfo.value = new MouseCoords({
          gridFileUrl: props.gridFileUrl,
          proj4Projection: props.proj4Projection,
          projectionUnits: props.projectionUnits,
          proj4longlat: props.proj4longlat
        });
        viewerElement.addEventListener("wheel", onMouseMove, false);
        viewerElement.addEventListener("mousemove", onMouseMove, false);
        viewerElement.addEventListener("touchmove", onMouseMove, false);
        extendForMouseCoords();
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
        nextTick(() => {
          var _a2, _b, _c;
          if (!hasVcNavigation) {
            const viewerElement2 = viewer._element;
            viewerElement2.appendChild((_a2 = $(rootRef)) == null ? void 0 : _a2.$el);
            resolve((_b = $(rootRef)) == null ? void 0 : _b.$el);
          } else {
            resolve((_c = $(rootRef)) == null ? void 0 : _c.$el);
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
        target: (_a2 = $(rootRef)) == null ? void 0 : _a2.$el
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
        viewerElement.contains((_a2 = $(rootRef)) == null ? void 0 : _a2.$el) && viewerElement.removeChild((_b = $(rootRef)) == null ? void 0 : _b.$el);
      }
      (_d = viewer.viewerWidgetResized) == null ? void 0 : _d.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: (_c = $(rootRef)) == null ? void 0 : _c.$el
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
    const onScenePostRender = throttle((scene) => {
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
      cameraInfo.level = heightToLevel(Number(cameraInfo.height)).toFixed(0);
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
        const listener = getInstanceListener(instance, "statusBarEvt");
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
      (_a2 = $(tooltipRef)) == null ? void 0 : _a2.hide();
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
            inner.push(h("div", {
              class: "vc-section ellipsis"
            }, [
              h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.lng")),
              h("span", {}, (_b = mouseCoordsInfo.value) == null ? void 0 : _b.longitude)
            ]), h("div", {
              class: "vc-section ellipsis"
            }, [h("span", {}, t("vc.navigation.statusBar.lat")), h("span", {}, (_c = mouseCoordsInfo.value) == null ? void 0 : _c.latitude)]));
          } else {
            inner.push(h("div", {
              class: "vc-section-short ellipsis"
            }, [
              h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.zone")),
              h("span", null, (_d = mouseCoordsInfo.value) == null ? void 0 : _d.utmZone)
            ]), h("div", {
              class: "vc-section ellipsis"
            }, [
              h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.e")),
              h("span", null, (_e = mouseCoordsInfo.value) == null ? void 0 : _e.east)
            ]), h("div", {
              class: "vc-section ellipsis"
            }, [
              h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.n")),
              h("span", null, (_f = mouseCoordsInfo.value) == null ? void 0 : _f.north)
            ]));
          }
          if ((_g = mouseCoordsInfo.value) == null ? void 0 : _g.elevation) {
            inner.push(h("div", {
              class: "vc-section ellipsis"
            }, [
              h("span", {
                ...ctx.attrs
              }, t("vc.navigation.statusBar.elev")),
              h("span", {}, (_h = mouseCoordsInfo.value) == null ? void 0 : _h.elevation)
            ]));
          } else {
            inner.push(createCommentVNode("v-if"));
          }
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        if (props.showCameraInfo) {
          inner.push(h("div", {
            class: "vc-section-short-mini ellipsis"
          }, [
            h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.level")),
            h("span", null, cameraInfo.level)
          ]), h("div", {
            class: "vc-section-short ellipsis"
          }, [
            h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.heading")),
            h("span", null, `${cameraInfo.heading}\xB0`)
          ]), h("div", {
            class: "vc-section-short ellipsis"
          }, [
            h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.pitch")),
            h("span", null, `${cameraInfo.pitch}\xB0`)
          ]), h("div", {
            class: "vc-section-short ellipsis"
          }, [
            h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.roll")),
            h("span", null, `${cameraInfo.roll}\xB0`)
          ]), h("div", {
            class: "vc-section ellipsis"
          }, [
            h("span", {
              ...ctx.attrs
            }, t("vc.navigation.statusBar.cameraHeight")),
            h("span", null, `${cameraInfo.height}m`)
          ]));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        if (props.showPerformanceInfo) {
          inner.push(h("div", {
            class: "vc-section-short-mini ellipsis"
          }, [h("span", null, performanceInfo.ms)]), h("div", {
            class: "vc-section-short-mini ellipsis"
          }, [h("span", null, performanceInfo.fps)]));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        if (isPlainObject(props.tooltip) && props.showMouseInfo && props.useProjection) {
          inner.push(h(VcTooltip, {
            ref: tooltipRef,
            ...props.tooltip
          }, () => h("strong", null, isPlainObject(props.tooltip) && props.tooltip.tip || t("vc.navigation.statusBar.tip"))));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        return h(VcBtn, {
          ref: rootRef,
          class: "vc-status-bar " + positionState.classes.value,
          style: rootStyle,
          noCaps: true,
          onClick: toggleUseProjection
        }, () => inner);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { StatusBar as default, statusBarProps };
//# sourceMappingURL=index.mjs.map
