import useCommon from '../use-common/index.mjs';
import { kebabCase } from '../../utils/util.mjs';
import { getVcParentInstance } from '../../utils/private/vm.mjs';

function useGraphics(props, ctx, vcInstance) {
  vcInstance.cesiumEvents = ["definitionChanged"];
  const commonState = useCommon(props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.mount = async () => {
    var _a, _b;
    const graphics = vcInstance.cesiumObject;
    if (graphics === void 0) {
      return false;
    }
    const cmpNameArr = kebabCase(((_a = vcInstance.proxy) == null ? void 0 : _a.$options.name) || "").split("-");
    const emitType = cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : "update:polylineVolume";
    const parentVM = getVcParentInstance(vcInstance).proxy;
    return parentVM && ((_b = parentVM.__updateGraphics) == null ? void 0 : _b.call(parentVM, graphics, emitType));
  };
  vcInstance.unmount = async () => {
    var _a, _b;
    const cmpNameArr = kebabCase(((_a = vcInstance.proxy) == null ? void 0 : _a.$options.name) || "").split("-");
    const emitType = cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : "update:polylineVolume";
    const parentVM = getVcParentInstance(vcInstance).proxy;
    return parentVM && ((_b = parentVM.__updateGraphics) == null ? void 0 : _b.call(parentVM, void 0, emitType));
  };
}

export { useGraphics as default };
//# sourceMappingURL=index.mjs.map
