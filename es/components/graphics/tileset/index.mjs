import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, uri, maximumScreenSpaceError } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const tilesetGraphicsProps = {
  ...show,
  ...uri,
  ...maximumScreenSpaceError
};
var GraphicsTileset = defineComponent({
  name: "VcGraphicsTileset",
  props: tilesetGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Cesium3DTilesetGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsTileset as default, tilesetGraphicsProps };
//# sourceMappingURL=index.mjs.map
