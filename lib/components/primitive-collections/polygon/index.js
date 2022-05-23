'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
require('../../../shared/index.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collection-items/index.js');
var PolygonPrimitive = require('../../../shared/src/PolygonPrimitive.js');

const polygonProps = {
  ...cesiumProps.positions,
  ...cesiumProps.polygonHierarchy,
  ...cesiumProps.appearance,
  ...cesiumProps.depthFailAppearance,
  ...cesiumProps.show,
  ...cesiumProps.id,
  ...cesiumProps.classificationType,
  ...cesiumProps.clampToGround,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.allowPicking,
  ...cesiumProps.asynchronous,
  ...cesiumProps.enableMouseEvent
};
var Polygon = vue.defineComponent({
  name: "VcPolygon",
  props: polygonProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolygonPrimitive";
    const primitiveCollectionItemsState = index["default"](props, ctx, instance);
    if (primitiveCollectionItemsState === void 0) {
      return;
    }
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => props.clampToGround, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.clampToGround = val);
    }));
    unwatchFns.push(vue.watch(() => props.positions, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.positions = cesiumHelpers.makeCartesian3Array(val));
    }));
    unwatchFns.push(vue.watch(() => props.polygonHierarchy, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.polygonHierarchy = cesiumHelpers.makePolygonHierarchy(val));
    }));
    unwatchFns.push(vue.watch(() => props.appearance, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.appearance = cesiumHelpers.makeAppearance.call(instance, val));
    }));
    unwatchFns.push(vue.watch(() => props.depthFailAppearance, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.depthFailAppearance = cesiumHelpers.makeAppearance.call(instance, val));
    }));
    unwatchFns.push(vue.watch(() => props.show, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.show = val);
    }));
    unwatchFns.push(vue.watch(() => props.classificationType, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.classificationType = val);
    }));
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionItemsState.transformProps(props);
      return new PolygonPrimitive["default"](options);
    };
    instance.mount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives;
      const collectionItem = instance.cesiumObject;
      collectionItem._vcParent = primitives;
      return primitives && primitives.add(collectionItem);
    };
    instance.unmount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives;
      const collectionItem = instance.cesiumObject;
      return primitives && !primitives.isDestroyed() && primitives.remove(collectionItem);
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = Polygon;
exports.polygonProps = polygonProps;
//# sourceMappingURL=index.js.map
