import useCommon from '../use-common/index.mjs';
import { getVcParentInstance } from '../../utils/private/vm.mjs';

function useGeometries(props, ctx, vcInstance) {
  vcInstance.cesiumEvents = [];
  vcInstance.renderByParent = true;
  const commonState = useCommon(props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.mount = async () => {
    var _a;
    const geometry = vcInstance.cesiumObject;
    const parentVM = getVcParentInstance(vcInstance).proxy;
    return (_a = parentVM.__updateGeometry) == null ? void 0 : _a.call(parentVM, geometry);
  };
  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

export { useGeometries as default };
//# sourceMappingURL=index.mjs.map
