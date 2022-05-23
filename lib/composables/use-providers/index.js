'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vm = require('../../utils/private/vm.js');
var coordtransform = require('../../utils/coordtransform.js');
var index = require('../use-common/index.js');

function useProviders(props, ctx, vcInstance) {
  vcInstance.cesiumEvents = ["errorEvent"];
  const commonState = index["default"](props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  const { emit } = ctx;
  vcInstance.mount = async () => {
    var _a, _b, _c, _d;
    const { viewer } = commonState.$services;
    if (vcInstance.cesiumClass.indexOf("ImageryProvider") !== -1) {
      vcInstance.renderByParent = true;
      const imageryProvider = vcInstance.cesiumObject;
      (_a = imageryProvider == null ? void 0 : imageryProvider.readyPromise) == null ? void 0 : _a.then(() => {
        const listener = vm.getInstanceListener(vcInstance, "readyPromise");
        listener && emit("readyPromise", imageryProvider, viewer, vcInstance.proxy);
      });
      if (props.projectionTransforms && props.projectionTransforms.from !== props.projectionTransforms.to) {
        const ignoreTransforms = ((_b = vcInstance.proxy) == null ? void 0 : _b.$options.name) === "VcImageryProviderBaidu" || ((_c = vcInstance.proxy) == null ? void 0 : _c.$options.name) === "VcImageryProviderTianditu" && imageryProvider._epsgCode === "4490";
        if (!ignoreTransforms) {
          const { WebMercatorTilingScheme, Cartographic, Math: CesiumMath } = Cesium;
          const tilingScheme = new WebMercatorTilingScheme();
          const projection = tilingScheme.projection;
          const nativeProject = projection.project;
          const nativeUnProject = projection.unproject;
          let projectMethods;
          let unprojectMethods;
          if (props.projectionTransforms.to.toUpperCase() === "WGS84") {
            projectMethods = "wgs84togcj02";
            unprojectMethods = "gcj02towgs84";
          } else if (props.projectionTransforms.to.toUpperCase() === "GCJ02") {
            projectMethods = "gcj02towgs84";
            unprojectMethods = "wgs84togcj02";
          }
          if (projectMethods && unprojectMethods) {
            projection.project = function(cartographic, result) {
              result = result || new Cesium.Cartesian3();
              result = coordtransform[projectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude));
              return nativeProject.call(this, new Cartographic(CesiumMath.toRadians(result == null ? void 0 : result[0]), CesiumMath.toRadians(result == null ? void 0 : result[1])));
            };
            projection.unproject = function(cartesian2, result) {
              result = result || new Cartographic();
              const cartographic = nativeUnProject.call(this, cartesian2);
              result = coordtransform[unprojectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude));
              return new Cartographic(CesiumMath.toRadians(result == null ? void 0 : result[0]), CesiumMath.toRadians(result == null ? void 0 : result[1]));
            };
            imageryProvider._tilingScheme = tilingScheme;
          }
        }
      }
      const parentVM = vm.getVcParentInstance(vcInstance).proxy;
      return parentVM && ((_d = parentVM.__updateProvider) == null ? void 0 : _d.call(parentVM, imageryProvider));
    } else {
      const terrainProvider = vcInstance.cesiumObject;
      terrainProvider.readyPromise.then(() => {
        const listener = vm.getInstanceListener(vcInstance, "readyPromise");
        listener && emit("readyPromise", terrainProvider, viewer, vcInstance.proxy);
      });
      viewer.terrainProvider = terrainProvider;
      return true;
    }
  };
  vcInstance.unmount = async () => {
    var _a;
    const { viewer } = commonState.$services;
    if (vcInstance.cesiumClass.indexOf("ImageryProvider") !== -1) {
      const parentVM = vm.getVcParentInstance(vcInstance).proxy;
      return parentVM && ((_a = parentVM.__updateProvider) == null ? void 0 : _a.call(parentVM, void 0));
    } else {
      const terrainProvider = new Cesium.EllipsoidTerrainProvider();
      terrainProvider.readyPromise.then(() => {
        const listener = vm.getInstanceListener(vcInstance, "readyPromise");
        listener && emit("readyPromise", terrainProvider, viewer, vcInstance.proxy);
      });
      viewer.terrainProvider = terrainProvider;
      return true;
    }
  };
  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

exports["default"] = useProviders;
//# sourceMappingURL=index.js.map
