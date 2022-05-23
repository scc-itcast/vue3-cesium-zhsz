import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, computed, h, createCommentVNode } from 'vue';
import { getVcParentInstance, $, getInstanceListener } from '../../../utils/private/vm.mjs';
import usePosition from '../../../composables/private/use-position.mjs';
import throttle from '../../../utils/private/throttle.mjs';
import '../../../composables/index.mjs';
import distancelegendDefaultProps from './defaultProps.mjs';
import { VcBtn } from '../../ui/index.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const emits = {
  ...commonEmits,
  distanceLegendEvt: (evt) => true
};
const distanceLegendProps = distancelegendDefaultProps;
var DistanceLegend = defineComponent({
  name: "VcDistanceLegend",
  props: distanceLegendProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcDistanceLegend";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const parentInstance = getVcParentInstance(instance);
    const { $services } = commonState;
    const rootRef = ref(null);
    const distanceLabel = ref("");
    const positionState = usePosition(props, $services);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    let lastLegendUpdate = 0;
    const barWidth = ref(0);
    let distance = 0;
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
    const barStyle = computed(() => {
      return {
        width: `${barWidth.value}px`,
        left: `${5 + (props.width + 15 - barWidth.value) / 2}px`,
        height: "2px",
        background: props.barBackground
      };
    });
    instance.createCesiumObject = async () => {
      canRender.value = true;
      distanceLabel.value = "";
      return new Promise((resolve, reject) => {
        nextTick(() => {
          var _a2, _b, _c;
          const { viewer } = $services;
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild((_a2 = $(rootRef)) == null ? void 0 : _a2.$el);
            resolve((_b = $(rootRef)) == null ? void 0 : _b.$el);
          } else {
            resolve((_c = $(rootRef)) == null ? void 0 : _c.$el);
          }
          viewer.scene.postRender.addEventListener(onScenePostRender);
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
      viewer.scene.postRender.removeEventListener(onScenePostRender);
      const viewerElement = viewer._element;
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
      css.width = `${props.width}px`;
      Object.assign(rootStyle, css);
    };
    const onScenePostRender = throttle((scene) => {
      const { Cartesian2, defined, getTimestamp, EllipsoidGeodesic } = Cesium;
      const now = getTimestamp();
      if (now < lastLegendUpdate + 250) {
        return;
      }
      lastLegendUpdate = now;
      const geodesic = new EllipsoidGeodesic();
      const width = scene.canvas.clientWidth;
      const height = scene.canvas.clientHeight;
      const left = scene.camera.getPickRay(new Cartesian2(width / 2 | 0, height - 1));
      const right = scene.camera.getPickRay(new Cartesian2(1 + width / 2 | 0, height - 1));
      const globe = scene.globe;
      const leftPosition = globe.pick(left, scene);
      const rightPosition = globe.pick(right, scene);
      if (!defined(leftPosition) || !defined(rightPosition)) {
        barWidth.value = 0;
        distanceLabel.value = "";
        return;
      }
      const leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition);
      const rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition);
      geodesic.setEndPoints(leftCartographic, rightCartographic);
      const pixelDistance = geodesic.surfaceDistance;
      const maxBarWidth = props.width - 10;
      let _distance;
      for (let i = distances.length - 1; !defined(_distance) && i >= 0; --i) {
        if (distances[i] / pixelDistance < maxBarWidth) {
          _distance = distances[i];
          if (distance !== _distance) {
            distance = _distance;
            const listener = getInstanceListener(instance, "distanceLegendEvt");
            listener && ctx.emit("distanceLegendEvt", {
              type: "distanceLegend",
              distance,
              status: "changed"
            });
          }
        }
      }
      if (defined(_distance)) {
        let label;
        if (distance >= 1e3) {
          label = (_distance / 1e3).toString() + " km";
        } else {
          label = _distance.toString() + " m";
        }
        barWidth.value = _distance / pixelDistance | 0;
        distanceLabel.value = label;
      } else {
        barWidth.value = 0;
        distanceLabel.value = "";
      }
    }, 500);
    return () => {
      if (canRender.value && distanceLabel.value !== void 0) {
        return h(VcBtn, {
          ref: rootRef,
          class: "vc-distance-legend " + positionState.classes.value,
          style: rootStyle,
          stack: true,
          noCaps: true
        }, () => [
          h("label", null, distanceLabel.value),
          h("div", {
            style: barStyle.value,
            class: "vc-bar"
          })
        ]);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});
const distances = [
  1,
  2,
  3,
  5,
  10,
  20,
  30,
  50,
  100,
  200,
  300,
  500,
  1e3,
  2e3,
  3e3,
  5e3,
  1e4,
  2e4,
  3e4,
  5e4,
  1e5,
  2e5,
  3e5,
  5e5,
  1e6,
  2e6,
  3e6,
  5e6,
  1e7,
  2e7,
  3e7,
  5e7
];

export { DistanceLegend as default, distanceLegendProps };
//# sourceMappingURL=index.mjs.map
