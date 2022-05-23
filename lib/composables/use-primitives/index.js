'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../use-common/index.js');
var mergeDescriptors = require('../../utils/merge-descriptors.js');
var vue = require('vue');
var config = require('../../utils/config.js');
var vm = require('../../utils/private/vm.js');
require('../../utils/util.js');
var shared = require('@vue/shared');

function usePrimitives(props, ctx, vcInstance) {
  const commonState = index["default"](props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  const { emit } = ctx;
  const childCount = vue.ref(0);
  const instances = vue.ref([]);
  vcInstance.createCesiumObject = async () => {
    var _a, _b;
    const options = commonState.transformProps(props);
    if (!options.asynchronous) {
      await ((_b = (_a = Cesium[vcInstance.cesiumClass]).initializeTerrainHeights) == null ? void 0 : _b.call(_a));
    }
    if (props.geometryInstances) {
      if (shared.isArray(props.geometryInstances)) {
        instances.value.push(...props.geometryInstances);
        childCount.value += props.geometryInstances.length;
      } else {
        childCount.value += 1;
        instances.value.push(props.geometryInstances);
      }
    }
    return new Cesium[vcInstance.cesiumClass](options);
  };
  vcInstance.mount = async () => {
    const primitives = vcInstance.cesiumClass.includes("Ground") ? commonState.$services.groundPrimitives : commonState.$services.primitives;
    const primitive = vcInstance.cesiumObject;
    primitive.readyPromise && primitive.readyPromise.then((e) => {
      const listener = vm.getInstanceListener(vcInstance, "readyPromise");
      listener && emit("readyPromise", e, commonState.$services.viewer, vcInstance.proxy);
    });
    primitive._vcParent = primitives;
    const object = primitives && primitives.add(primitive);
    if (vcInstance.cesiumClass === "ParticleSystem") {
      const intervalId = setInterval(() => {
        if (Cesium.defined(object._billboardCollection)) {
          object._billboardCollection._vcParent = object;
          clearInterval(intervalId);
        }
      }, 500);
    }
    return Cesium.defined(object);
  };
  vcInstance.unmount = async () => {
    childCount.value = 0;
    instances.value = [];
    const primitives = vcInstance.cesiumClass.includes("Ground") ? commonState.$services.groundPrimitives : commonState.$services.primitives;
    const primitive = vcInstance.cesiumObject;
    return primitives && primitives.remove(primitive);
  };
  const updateGeometryInstances = (instance, index) => {
    instances.value.push(instance);
    if (index === childCount.value - 1) {
      const listener = vm.getInstanceListener(vcInstance, "update:geometryInstances");
      if (listener) {
        ctx.emit("update:geometryInstances", instances.value);
      } else {
        const primitive = vcInstance.cesiumObject;
        primitive.geometryInstances = index === 0 ? instance : instances.value;
      }
    }
    return true;
  };
  const removeGeometryInstances = (instance) => {
    const index = instances.value.indexOf(instance);
    instances.value.splice(index, 1);
    return true;
  };
  const getServices = () => {
    return mergeDescriptors.mergeDescriptors(commonState.getServices(), {
      get primitive() {
        return vcInstance.cesiumObject;
      }
    });
  };
  vue.provide(config.vcKey, getServices());
  vcInstance.appContext.config.globalProperties.$VueCesium = getServices();
  Object.assign(vcInstance.proxy, {
    __updateGeometryInstances: updateGeometryInstances,
    __removeGeometryInstances: removeGeometryInstances,
    __childCount: childCount
  });
  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

exports["default"] = usePrimitives;
//# sourceMappingURL=index.js.map
