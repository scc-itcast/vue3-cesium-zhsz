import useCommon from '../use-common/index.mjs';

function usePrimitiveCollectionItems(props, ctx, vcInstance) {
  const commonState = useCommon(props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.createCesiumObject = async () => {
    const options = commonState.transformProps(props);
    const primitives = commonState.$services.primitives;
    return primitives && primitives.add(options);
  };
  vcInstance.mount = async () => {
    const primitives = commonState.$services.primitives;
    const collectionItem = vcInstance.cesiumObject;
    return primitives && primitives.contains(collectionItem);
  };
  vcInstance.unmount = async () => {
    const primitives = commonState.$services.primitives;
    const collectionItem = vcInstance.cesiumObject;
    return primitives && !primitives.isDestroyed() && primitives.remove(collectionItem);
  };
  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher,
    $services: commonState.$services
  };
}

export { usePrimitiveCollectionItems as default };
//# sourceMappingURL=index.mjs.map
