'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vm = require('../../../utils/private/vm.js');
require('../../../composables/index.js');
var render = require('../../../utils/private/render.js');
var echarts = require('echarts');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var echarts__namespace = /*#__PURE__*/_interopNamespace(echarts);

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
  ...emits$1.commonEmits,
  mouseenter: (evt) => true,
  mouseleave: (evt) => true,
  click: (evt) => true
};
var OverlayEcharts = vue.defineComponent({
  name: "VcOverlayEcharts",
  props: echartsOverlayProps,
  emits: ["beforeLoad", "ready", "destroyed", "mouseenter", "mouseleave", "click"],
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcOverlayEcharts";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const canRender = vue.ref(false);
    const rootRef = vue.ref(null);
    const rootStyle = vue.reactive({
      left: "0px",
      top: "0px",
      pointerEvents: "none",
      position: "absolute"
    });
    let chart;
    const visible = vue.ref(true);
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => props.options, (val) => {
      commonState.reload();
    }));
    instance.createCesiumObject = async () => {
      return vm.$(rootRef);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      canRender.value = true;
      vue.nextTick(() => {
        echarts__namespace.registerCoordinateSystem(props.coordinateSystem, getE3CoordinateSystem(viewer));
        chart = echarts__namespace.init(vm.$(rootRef));
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
        return new echarts__namespace.graphic.BoundingRect(0, 0, canvas.width, canvas.height);
      };
      CoordSystem.prototype.getRoamTransform = function() {
        return echarts__namespace.matrix.create();
      };
      return CoordSystem;
    };
    const renderContent = () => {
      if (canRender.value) {
        return vue.h("div", {
          ref: rootRef,
          class: `vc-echart-container${props.customClass ? " " + props.customClass : ""}`,
          style: rootStyle,
          onMouseenter,
          onMouseleave,
          onClick
        }, render.hSlot(ctx.slots.default));
      } else {
        return vue.createCommentVNode("v-if");
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
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => renderContent();
  }
});

exports["default"] = OverlayEcharts;
exports.echartsOverlayProps = echartsOverlayProps;
//# sourceMappingURL=index.js.map
