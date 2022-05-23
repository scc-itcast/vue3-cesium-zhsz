'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var vm = require('../../../utils/private/vm.js');
var mergeDescriptors = require('../../../utils/merge-descriptors.js');
var render = require('../../../utils/private/render.js');
var config = require('../../../utils/config.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const geometryInstanceProps = {
  geometry: Object,
  ...cesiumProps.modelMatrix,
  ...cesiumProps.id,
  attributes: Object
};
const emits = {
  ...emits$1.commonEmits,
  "update:geometry": (payload) => true
};
var GeometryInstance = vue.defineComponent({
  name: "VcGeometryInstance",
  props: geometryInstanceProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.renderByParent = true;
    instance.cesiumClass = "GeometryInstance";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { emit } = ctx;
    const vcIndex = vue.ref(0);
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props);
      if (!options.geometry) {
        options.geometry = new Cesium.Geometry({ attributes: new Cesium.GeometryAttributes() });
      }
      return new Cesium.GeometryInstance(options);
    };
    instance.mount = async () => {
      var _a;
      const parentVM = vm.getVcParentInstance(instance).proxy;
      if (parentVM.__childCount !== void 0) {
        vcIndex.value = parentVM.__childCount.value || 0;
        parentVM.__childCount.value += 1;
      }
      const geometryInstance = instance.cesiumObject;
      (_a = parentVM.__updateGeometryInstances) == null ? void 0 : _a.call(parentVM, geometryInstance, vcIndex.value);
      return true;
    };
    instance.unmount = async () => {
      var _a;
      const geometryInstance = instance.cesiumObject;
      const parentVM = vm.getVcParentInstance(instance).proxy;
      (_a = parentVM.__removeGeometryInstances) == null ? void 0 : _a.call(parentVM, geometryInstance);
      return true;
    };
    const updateGeometry = (geometry) => {
      const listener = vm.getInstanceListener(instance, "update:geometry");
      if (listener) {
        emit("update:geometry", geometry);
      } else {
        const geometryInstance = instance.cesiumObject;
        geometryInstance.geometry = geometry;
      }
      return true;
    };
    const getServices = () => {
      return mergeDescriptors.mergeDescriptors(commonState.getServices(), {
        get geometryInstance() {
          return instance.cesiumObject;
        }
      });
    };
    vue.provide(config.vcKey, getServices());
    instance.appContext.config.globalProperties.$VueCesium = getServices();
    Object.assign(instance.proxy, {
      __updateGeometry: updateGeometry
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryInstance;
exports.geometryInstanceProps = geometryInstanceProps;
//# sourceMappingURL=index.js.map
