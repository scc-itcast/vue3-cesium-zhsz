import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import { hSlot } from '../../../utils/private/render.mjs';
import '../../../composables/index.mjs';
import defaultProps from './defaultProps.mjs';
import { getInstanceListener } from '../../../utils/private/vm.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { isUndefined } from 'lodash-unified';

const emits = {
  ...commonEmits,
  "update:imageryProvider": (payload) => true
};
const imageryLayerProps = defaultProps;
var ImageryLayer = defineComponent({
  name: "VcLayerImagery",
  props: imageryLayerProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "ImageryLayer";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const { emit } = ctx;
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props);
      const imageryProvider = props.imageryProvider || {};
      return new Cesium.ImageryLayer(imageryProvider, options);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      const imageryLayer = instance.cesiumObject;
      imageryLayer.sortOrder = props.sortOrder;
      viewer.imageryLayers.add(imageryLayer);
      return !viewer.isDestroyed() && viewer.imageryLayers.contains(imageryLayer);
    };
    instance.unmount = async () => {
      const { viewer } = $services;
      const imageryLayer = instance.cesiumObject;
      return !viewer.isDestroyed() && viewer.imageryLayers.remove(imageryLayer);
    };
    const updateProvider = (provider) => {
      var _a;
      if (isUndefined(provider)) {
        return (_a = instance.unmount) == null ? void 0 : _a.call(instance);
      } else {
        const imageryLayer = instance.cesiumObject;
        imageryLayer._imageryProvider = provider;
        const listener = getInstanceListener(instance, "update:imageryProvider");
        if (listener)
          emit("update:imageryProvider", provider);
      }
      return true;
    };
    Object.assign(instance.proxy, {
      __updateProvider: updateProvider
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || "v-if"));
    };
  }
});

export { ImageryLayer as default, imageryLayerProps };
//# sourceMappingURL=index.mjs.map
