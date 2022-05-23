import { ref, onUnmounted, h, Teleport } from 'vue';
import { createGlobalNode, removeGlobalNode } from '../../utils/private/global-nodes.mjs';
import { portalList } from '../../utils/private/portal.mjs';

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
  const portalIsActive = ref(false);
  function showPortal() {
    if (onGlobalDialog === false && portalEl === null) {
      portalEl = createGlobalNode();
    }
    portalIsActive.value = true;
    portalList.push(vm.proxy);
  }
  function hidePortal() {
    var _a2, _b2;
    portalIsActive.value = false;
    const index = portalList.indexOf(vm.proxy);
    if (index > -1) {
      portalList.splice(index, 1);
    }
    if (portalEl !== null && !((_b2 = (_a2 = vm.props) == null ? void 0 : _a2.teleport) == null ? void 0 : _b2.to)) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(hidePortal);
  Object.assign(vm.proxy, { __vcPortalInnerRef: innerRef });
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    renderPortal: () => {
      return onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, renderPortalContent())] : void 0;
    }
  };
}

export { usePortal as default };
//# sourceMappingURL=use-portal.mjs.map
