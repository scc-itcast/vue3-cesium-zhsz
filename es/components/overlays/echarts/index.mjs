import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, h, createCommentVNode, onUnmounted } from 'vue';
import { $ } from '../../../utils/private/vm.mjs';
import '../../../composables/index.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import * as echarts from 'echarts';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const echartsOverlayProps = {
  options: {
    type: Object,
    required: true
  },
  autoHidden: {
    type: Boolean,
    default: true
  },
  customClass: String,
  coordinateSystem: {
    type: String,
    default: "cesium"
  }
};
const emits = {
  ...commonEmits,
  mouseenter: (evt) => true,
  mouseleave: (evt) => true,
  click: (evt) => true
};
var OverlayEcharts = defineComponent({
  name: "VcOverlayEcharts",
  props: echartsOverlayProps,
  emits: ["beforeLoad", "ready", "destroyed", "mouseenter", "mouseleave", "click"],
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcOverlayEcharts";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const canRender = ref(false);
    const rootRef = ref(null);
    const rootStyle = reactive({
      left: "0px",
      top: "0px",
      pointerEvents: "none",
      position: "absolute"
    });
    let chart;
    const visible = ref(true);
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.options, (val) => {
      commonState.reload();
    }));
    instance.createCesiumObject = async () => {
      return $(rootRef);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      canRender.value = true;
      nextTick(() => {
        echarts.registerCoordinateSystem(props.coordinateSystem, getE3CoordinateSystem(viewer));
        chart = echarts.init($(rootRef));
        setCharts();
        viewer.scene.postRender.addEventListener(onPreRender);
      });
      return true;
    };
    instance.unmount = async () => {
      const { viewer } = $services;
      viewer.scene.postRender.removeEventListener(onPreRender);
      canRender.value = false;
      return true;
    };
    const onPreRender = () => {
      if (visible.value) {
        const { viewer } = $services;
        chart.resize({
          width: viewer.canvas.width,
          height: viewer.canvas.height
        });
      }
    };
    const setCharts = () => {
      if (visible.value && props.options) {
        chart.setOption(props.options);
      }
    };
    const getE3CoordinateSystem = (viewer) => {
      const CoordSystem = function CoordSystem2(viewer2) {
        this.viewer = viewer2;
        this._mapOffset = [0, 0];
      };
      CoordSystem.create = function(ecModel) {
        ecModel.eachSeries(function(seriesModel) {
          if (seriesModel.get("coordinateSystem") === props.coordinateSystem) {
            seriesModel.coordinateSystem = new CoordSystem(viewer);
          }
        });
        return [];
      };
      CoordSystem.getDimensionsInfo = function() {
        return ["x", "y"];
      };
      CoordSystem.dimensions = ["x", "y"];
      CoordSystem.prototype.dimensions = ["x", "y"];
      CoordSystem.prototype.setMapOffset = function setMapOffset(mapOffset) {
        this._mapOffset = mapOffset;
      };
      CoordSystem.prototype.dataToPoint = function(data) {
        const result = [];
        const cartesian3 = Cesium.Cartesian3.fromDegrees(data[0], data[1]);
        if (!cartesian3) {
          return result;
        }
        if (props.autoHidden) {
          const up = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(cartesian3, new Cesium.Cartesian3());
          const cd = this.viewer.camera.direction;
          if (Cesium.Cartesian3.dot(up, cd) >= 0) {
            return result;
          }
        }
        const coords = this.viewer.scene.cartesianToCanvasCoordinates(cartesian3);
        if (!coords) {
          return result;
        }
        return [coords.x - this._mapOffset[0], coords.y - this._mapOffset[1]];
      };
      CoordSystem.prototype.pointToData = function(pt) {
        const mapOffset = this._mapOffset;
        const ellipsoid = viewer.scene.globe.ellipsoid;
        const car3 = new Cesium.Cartesian3(pt[1] + mapOffset[1], pt[2] + mapOffset[2], 0);
        const cart = ellipsoid.cartesianToCartographic(car3);
        return cart ? [cart.longitude, cart.latitude] : [0, 0];
      };
      CoordSystem.prototype.getviewerRect = function() {
        const canvas = this.viewer.canvas;
        return new echarts.graphic.BoundingRect(0, 0, canvas.width, canvas.height);
      };
      CoordSystem.prototype.getRoamTransform = function() {
        return echarts.matrix.create();
      };
      return CoordSystem;
    };
    const renderContent = () => {
      if (canRender.value) {
        return h("div", {
          ref: rootRef,
          class: `vc-echart-container${props.customClass ? " " + props.customClass : ""}`,
          style: rootStyle,
          onMouseenter,
          onMouseleave,
          onClick
        }, hSlot(ctx.slots.default));
      } else {
        return createCommentVNode("v-if");
      }
    };
    const onClick = (evt) => {
      ctx.emit("click", evt);
    };
    const onMouseenter = (evt) => {
      ctx.emit("mouseenter", evt);
    };
    const onMouseleave = (evt) => {
      ctx.emit("mouseleave", evt);
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => renderContent();
  }
});

export { OverlayEcharts as default, echartsOverlayProps };
//# sourceMappingURL=index.mjs.map
