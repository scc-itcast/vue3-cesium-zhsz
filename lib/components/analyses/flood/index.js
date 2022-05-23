'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var cesiumProps = require('../../../utils/cesium-props.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var index$1 = require('../../primitives/index.js');
var index$2 = require('../../geometry-instance/index.js');
var index$3 = require('../../geometries/index.js');
var vm = require('../../../utils/private/vm.js');
require('../../../composables/index.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const emits = {
  ...emits$1.commonEmits,
  stop: (evt) => true
};
var AnalysisFlood = vue.defineComponent({
  name: "VcAnalysisFlood",
  props: {
    minHeight: {
      type: Number,
      default: -1
    },
    maxHeight: {
      type: Number,
      default: 8888
    },
    speed: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: false
    },
    color: {
      type: [Object, Array, String],
      default: "rgba(40,150,200,0.6)"
    },
    ...cesiumProps.polygonHierarchy
  },
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcAnalysisFlood";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { emit } = ctx;
    const canRender = vue.ref(false);
    const vcParent = vm.getVcParentInstance(instance);
    (_a = vcParent.proxy.creatingPromise) == null ? void 0 : _a.then(() => {
      canRender.value = true;
    });
    const flooding = vue.ref(false);
    const attributes = vue.ref(null);
    const extrudedHeight = vue.ref(-1);
    const childRef = vue.ref(null);
    let stoped = false;
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => props.minHeight, (val) => {
      extrudedHeight.value = val;
    }));
    instance.createCesiumObject = async () => {
      const { ColorGeometryInstanceAttribute } = Cesium;
      attributes.value = {
        color: ColorGeometryInstanceAttribute.fromColor(cesiumHelpers.makeColor(props.color))
      };
      return childRef.value;
    };
    instance.mount = async () => {
      const { viewer } = commonState.$services;
      viewer.clock.onTick.addEventListener(onClockTick);
      return true;
    };
    instance.unmount = async () => {
      const { viewer } = commonState.$services;
      viewer.clock.onTick.removeEventListener(onClockTick);
      extrudedHeight.value = -1;
      flooding.value = false;
      return true;
    };
    const onClockTick = () => {
      if (flooding.value) {
        if (extrudedHeight.value <= props.maxHeight) {
          extrudedHeight.value += props.speed;
          stoped = false;
        } else {
          const listener = vm.getInstanceListener(instance, "stop");
          listener && emit("stop", childRef.value);
          stoped = true;
          if (props.loop) {
            extrudedHeight.value = props.minHeight;
          } else {
            flooding.value = false;
          }
        }
      }
    };
    const start = () => {
      extrudedHeight.value = props.minHeight;
      flooding.value = true;
    };
    const pause = () => {
      flooding.value = !flooding.value;
      if (stoped) {
        extrudedHeight.value = props.minHeight;
      }
    };
    const stop = () => {
      extrudedHeight.value = -1;
      flooding.value = false;
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    Object.assign(instance.proxy, {
      start,
      pause,
      stop
    });
    return () => {
      if (canRender.value) {
        const { createGuid } = Cesium;
        return vue.h(index$1.VcPrimitiveClassification, {
          asynchronous: false,
          ref: childRef
        }, () => vue.h(index$2.VcGeometryInstance, {
          id: createGuid(),
          attributes: attributes.value
        }, () => vue.h(index$3.VcGeometryPolygon, {
          extrudedHeight: extrudedHeight.value,
          polygonHierarchy: props.polygonHierarchy
        })));
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = AnalysisFlood;
//# sourceMappingURL=index.js.map
