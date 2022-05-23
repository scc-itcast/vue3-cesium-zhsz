'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var globalNodes = require('../../utils/private/global-nodes.js');
var portal = require('../../utils/private/portal.js');

function isOnGlobalDialog(vm) {
  vm = vm.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.type.name === "VcGlobalDialog") {
      return true;
    }
    if (vm.type.name === "VcDialog" || vm.type.name === "VcMenu") {
      return false;
    }
    vm = vm.parent;
  }
  return false;
}
function usePortal(vm, innerRef, renderPortalContent, checkGlobalDialog) {
  var _a, _b, _c, _d;
  let portalEl = null;
  if ((_b = (_a = vm.props) == null ? void 0 : _a.teleport) == null ? void 0 : _b.to) {
    portalEl = (_d = (_c = vm.props) == null ? void 0 : _c.teleport) == null ? void 0 : _d.to;
  }
  const onGlobalDialog = checkGlobalDialog === true && isOnGlobalDialog(vm);
  const portalIsActive = vue.ref(false);
  function showPortal() {
    if (onGlobalDialog === false && portalEl === null) {
      portalEl = globalNodes.createGlobalNode();
    }
    portalIsActive.value = true;
    portal.portalList.push(vm.proxy);
  }
  function hidePortal() {
    var _a2, _b2;
    portalIsActive.value = false;
    const index = portal.portalList.indexOf(vm.proxy);
    if (index > -1) {
      portal.portalList.splice(index, 1);
    }
    if (portalEl !== null && !((_b2 = (_a2 = vm.props) == null ? void 0 : _a2.teleport) == null ? void 0 : _b2.to)) {
      globalNodes.removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  vue.onUnmounted(hidePortal);
  Object.assign(vm.proxy, { __vcPortalInnerRef: innerRef });
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    renderPortal: () => {
      return onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [vue.h(vue.Teleport, { to: portalEl }, renderPortalContent())] : void 0;
    }
  };
}

exports["default"] = usePortal;
//# sourceMappingURL=use-portal.js.map
