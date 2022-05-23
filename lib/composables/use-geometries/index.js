'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../use-common/index.js');
var vm = require('../../utils/private/vm.js');

function useGeometries(props, ctx, vcInstance) {
  vcInstance.cesiumEvents = [];
  vcInstance.renderByParent = true;
  const commonState = index["default"](props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.mount = async () => {
    var _a;
    const geometry = vcInstance.cesiumObject;
    const parentVM = vm.getVcParentInstance(vcInstance).proxy;
    return (_a = parentVM.__updateGeometry) == null ? void 0 : _a.call(parentVM, geometry);
  };
  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

exports["default"] = useGeometries;
//# sourceMappingURL=index.js.map
