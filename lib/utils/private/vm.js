'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../util.js');
var lodashUnified = require('lodash-unified');
var shared = require('@vue/shared');

function getParentVm(vm) {
  if (vm.$parent !== void 0 && vm.$parent !== null) {
    return vm.$parent;
  }
  vm = vm.$.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.proxy !== void 0 && vm.proxy !== null) {
      return vm.proxy;
    }
    vm = vm.parent;
  }
}
function getNormalizedVNodes(vnodes) {
  const children = /* @__PURE__ */ new Set();
  vnodes.forEach((vnode) => {
    if (typeof vnode.type === "symbol" && Array.isArray(vnode.children) === true) {
      vnode.children.forEach((child) => {
        children.add(child);
      });
    } else {
      children.add(vnode);
    }
  });
  return Array.from(children);
}
function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmHasListener(vm, listenerName) {
  return vm.vnode.props !== null && vm.vnode.props[listenerName] !== void 0;
}
function getInstanceListener(vcInstance, listenerName) {
  const props = vcInstance.vnode.props;
  if (props === null) {
    return void 0;
  }
  const propKeys = Object.keys(props);
  const index = lodashUnified.findIndex(propKeys, (o) => {
    return o.includes(`on${shared.capitalize(listenerName)}`) || o.includes(`on${shared.capitalize(lodashUnified.camelCase(listenerName))}`);
  });
  const listener = props[propKeys[index]];
  return listener;
}
function $(ref) {
  return ref.value;
}
function getVcParentInstance(instance) {
  var _a;
  const parentInstance = instance.parent;
  return !parentInstance.cesiumClass && ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) !== "VcViewer" ? getVcParentInstance(parentInstance) : parentInstance;
}

exports.$ = $;
exports.getInstanceListener = getInstanceListener;
exports.getNormalizedVNodes = getNormalizedVNodes;
exports.getParentVm = getParentVm;
exports.getVcParentInstance = getVcParentInstance;
exports.vmHasListener = vmHasListener;
exports.vmHasRouter = vmHasRouter;
//# sourceMappingURL=vm.js.map
