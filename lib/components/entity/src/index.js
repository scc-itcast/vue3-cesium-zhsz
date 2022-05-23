'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var vm = require('../../../utils/private/vm.js');
var render = require('../../../utils/private/render.js');
var util = require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const entityProps = {
  id: String,
  name: String,
  availability: Object,
  ...cesiumProps.show,
  description: [String, Object],
  ...cesiumProps.position,
  orientation: Object,
  ...cesiumProps.viewFrom,
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
  ...cesiumProps.enableMouseEvent
};
const emits = {
  ...emits$1.commonEmits,
  ...emits$1.pickEventEmits,
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
var Entity = vue.defineComponent({
  name: "VcEntity",
  props: entityProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Entity";
    instance.cesiumEvents = ["definitionChanged"];
    const commonState = index["default"](props, ctx, instance);
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
      const listener = vm.getInstanceListener(instance, emitType);
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
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

exports["default"] = Entity;
exports.entityProps = entityProps;
//# sourceMappingURL=index.js.map
