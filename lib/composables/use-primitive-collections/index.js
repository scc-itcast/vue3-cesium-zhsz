'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../use-common/index.js');
var mergeDescriptors = require('../../utils/merge-descriptors.js');
var vue = require('vue');
var config = require('../../utils/config.js');

function usePrimitiveCollections(props, ctx, vcInstance) {
  const commonState = index["default"](props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.mount = async () => {
    const primitives = commonState.$services.primitives;
    const collection = vcInstance.cesiumObject;
    const object = primitives && primitives.add(collection);
    return Cesium.defined(object);
  };
  vcInstance.unmount = async () => {
    const primitives = commonState.$services.primitives;
    const collection = vcInstance.cesiumObject;
    return primitives && primitives.remove(collection);
  };
  const getServices = () => {
    return mergeDescriptors.mergeDescriptors(commonState.getServices(), {
      get primitives() {
        return vcInstance.cesiumObject;
      }
    });
  };
  vue.provide(config.vcKey, getServices());
  vcInstance.appContext.config.globalProperties.$VueCesium = getServices();
  return {
    transformProps: commonState.transformProps,
    transformProp: commonState.transformProp,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

exports["default"] = usePrimitiveCollections;
//# sourceMappingURL=index.js.map
