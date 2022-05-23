'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../use-common/index.js');
var util = require('../../utils/util.js');
var vm = require('../../utils/private/vm.js');

function useGraphics(props, ctx, vcInstance) {
  vcInstance.cesiumEvents = ["definitionChanged"];
  const commonState = index["default"](props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.mount = async () => {
    var _a, _b;
    const graphics = vcInstance.cesiumObject;
    if (graphics === void 0) {
      return false;
    }
    const cmpNameArr = util.kebabCase(((_a = vcInstance.proxy) == null ? void 0 : _a.$options.name) || "").split("-");
    const emitType = cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : "update:polylineVolume";
    const parentVM = vm.getVcParentInstance(vcInstance).proxy;
    return parentVM && ((_b = parentVM.__updateGraphics) == null ? void 0 : _b.call(parentVM, graphics, emitType));
  };
  vcInstance.unmount = async () => {
    var _a, _b;
    const cmpNameArr = util.kebabCase(((_a = vcInstance.proxy) == null ? void 0 : _a.$options.name) || "").split("-");
    const emitType = cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : "update:polylineVolume";
    const parentVM = vm.getVcParentInstance(vcInstance).proxy;
    return parentVM && ((_b = parentVM.__updateGraphics) == null ? void 0 : _b.call(parentVM, void 0, emitType));
  };
}

exports["default"] = useGraphics;
//# sourceMappingURL=index.js.map
