import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, position, viewFrom, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { getInstanceListener } from '../../../utils/private/vm.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits, pickEventEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const entityProps = {
  id: String,
  name: String,
  availability: Object,
  ...show,
  description: [String, Object],
  ...position,
  orientation: Object,
  ...viewFrom,
  parent: Object,
  billboard: Object,
  box: Object,
  corridor: Object,
  cylinder: Object,
  ellipse: Object,
  ellipsoid: Object,
  label: Object,
  model: Object,
  tileset: Object,
  path: Object,
  plane: Object,
  point: Object,
  polygon: Object,
  polyline: Object,
  properties: Object,
  polylineVolume: Object,
  rectangle: Object,
  wall: Object,
  ...enableMouseEvent
};
const emits = {
  ...commonEmits,
  ...pickEventEmits,
  definitionChanged: (property) => true,
  "update:billboard": (payload) => true,
  "update:box": (payload) => true,
  "update:corridor": (payload) => true,
  "update:cylinder": (payload) => true,
  "update:ellipse": (payload) => true,
  "update:ellipsoid": (payload) => true,
  "update:label": (payload) => true,
  "update:model": (payload) => true,
  "update:path": (payload) => true,
  "update:plane": (payload) => true,
  "update:point": (payload) => true,
  "update:polygon": (payload) => true,
  "update:polyline": (payload) => true,
  "update:polylineVolume": (payload) => true,
  "update:rectangle": (payload) => true,
  "update:tileset": (payload) => true,
  "update:wall": (payload) => true
};
var Entity = defineComponent({
  name: "VcEntity",
  props: entityProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Entity";
    instance.cesiumEvents = ["definitionChanged"];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const { emit } = ctx;
    instance.mount = async () => {
      var _a;
      const entity = (_a = $services == null ? void 0 : $services.entities) == null ? void 0 : _a.add(instance.cesiumObject);
      return $services == null ? void 0 : $services.entities.contains(entity);
    };
    instance.unmount = async () => {
      var _a;
      return (_a = $services == null ? void 0 : $services.entities) == null ? void 0 : _a.remove(instance.cesiumObject);
    };
    const updateGraphics = (graphics, emitType) => {
      const listener = getInstanceListener(instance, emitType);
      if (listener) {
        emit(emitType, graphics);
      } else {
        instance.cesiumObject && (instance.cesiumObject[emitType.substring(7)] = graphics);
      }
      graphics && (graphics._vcParent = instance.cesiumObject);
      return true;
    };
    Object.assign(instance.proxy, {
      __updateGraphics: updateGraphics
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

export { Entity as default, entityProps };
//# sourceMappingURL=index.mjs.map
