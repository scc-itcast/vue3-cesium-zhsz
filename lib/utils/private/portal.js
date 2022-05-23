'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vm = require('./vm.js');

const portalList = [];
function getPortalVm(el) {
  return portalList.find((vm) => vm.__vcPortalInnerRef.value !== null && vm.__vcPortalInnerRef.value.contains(el));
}
function closePortalMenus(vm$1, evt) {
  do {
    if (vm$1.$options.name === "VcMenu") {
      vm$1.hide(evt);
      if (vm$1.$props.separateClosePopup === true) {
        return vm.getParentVm(vm$1);
      }
    } else if (vm$1.__vcPortalInnerRef !== void 0) {
      const parent = vm.getParentVm(vm$1);
      if (parent !== void 0 && parent.$options.name === "VcPopupProxy") {
        vm$1.hide(evt);
        return parent;
      } else {
        return vm$1;
      }
    }
    vm$1 = vm.getParentVm(vm$1);
  } while (vm$1 !== void 0 && vm$1 !== null);
}
function closePortals(vm$1, evt, depth) {
  while (depth !== 0 && vm$1 !== void 0 && vm$1 !== null) {
    if (vm$1.__vcPortalInnerRef !== void 0) {
      depth--;
      if (vm$1.$options.name === "VcMenu") {
        vm$1 = closePortalMenus(vm$1, evt);
        continue;
      }
      vm$1.hide(evt);
    }
    vm$1 = vm.getParentVm(vm$1);
  }
}

exports.closePortalMenus = closePortalMenus;
exports.closePortals = closePortals;
exports.getPortalVm = getPortalVm;
exports.portalList = portalList;
//# sourceMappingURL=portal.js.map
