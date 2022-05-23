import { getParentVm } from './vm.mjs';

const portalList = [];
function getPortalVm(el) {
  return portalList.find((vm) => vm.__vcPortalInnerRef.value !== null && vm.__vcPortalInnerRef.value.contains(el));
}
function closePortalMenus(vm, evt) {
  do {
    if (vm.$options.name === "VcMenu") {
      vm.hide(evt);
      if (vm.$props.separateClosePopup === true) {
        return getParentVm(vm);
      }
    } else if (vm.__vcPortalInnerRef !== void 0) {
      const parent = getParentVm(vm);
      if (parent !== void 0 && parent.$options.name === "VcPopupProxy") {
        vm.hide(evt);
        return parent;
      } else {
        return vm;
      }
    }
    vm = getParentVm(vm);
  } while (vm !== void 0 && vm !== null);
}
function closePortals(vm, evt, depth) {
  while (depth !== 0 && vm !== void 0 && vm !== null) {
    if (vm.__vcPortalInnerRef !== void 0) {
      depth--;
      if (vm.$options.name === "VcMenu") {
        vm = closePortalMenus(vm, evt);
        continue;
      }
      vm.hide(evt);
    }
    vm = getParentVm(vm);
  }
}

export { closePortalMenus, closePortals, getPortalVm, portalList };
//# sourceMappingURL=portal.mjs.map
