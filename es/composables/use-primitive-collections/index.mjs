import useCommon from '../use-common/index.mjs';
import { mergeDescriptors } from '../../utils/merge-descriptors.mjs';
import { provide } from 'vue';
import { vcKey } from '../../utils/config.mjs';

function usePrimitiveCollections(props, ctx, vcInstance) {
  const commonState = useCommon(props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.mount = async () => {
    const primitives = commonState.$services.primitives;
    const collection = vcInstance.cesiumObject;
    const object = primitives && primitives.add(collection);
    return Cesium.defined(object);
  };
  vcInstance.unmount = async () => {
    const primitives = commonState.$services.primitives;
    const collection = vcInstance.cesiumObject;
    return primitives && primitives.remove(collection);
  };
  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get primitives() {
        return vcInstance.cesiumObject;
      }
    });
  };
  provide(vcKey, getServices());
  vcInstance.appContext.config.globalProperties.$VueCesium = getServices();
  return {
    transformProps: commonState.transformProps,
    transformProp: commonState.transformProp,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

export { usePrimitiveCollections as default };
//# sourceMappingURL=index.mjs.map
