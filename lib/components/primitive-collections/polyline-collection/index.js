'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var lodashUnified = require('lodash-unified');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collections/index.js');

const polylineCollectionProps = {
  ...cesiumProps.modelMatrix,
  ...cesiumProps.debugShowBoundingVolume,
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  polylines: {
    type: Array,
    default: () => []
  }
};
var CollectionPolyline = vue.defineComponent({
  name: "VcCollectionPolyline",
  props: polylineCollectionProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolylineCollection";
    const primitiveCollectionsState = index["default"](props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("polylines");
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.polylines), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const polylineCollection = instance.cesiumObject;
      if (newVal.length === oldVal.length) {
        const modifies = [];
        for (let i = 0; i < newVal.length; i++) {
          const options = newVal[i];
          const oldOptions = oldVal[i];
          if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
            modifies.push({
              newOptions: options,
              oldOptions
            });
          }
        }
        modifies.forEach((modify) => {
          const modifyPolyline = polylineCollection._polylines.find((v) => v.id === modify.oldOptions.id);
          modifyPolyline && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyPolyline[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
        const deletePolylines = [];
        for (let i = 0; i < deletes.length; i++) {
          const deletePolyline = polylineCollection._polylines.find((v) => v.id === deletes[i].id);
          deletePolyline && deletePolylines.push(deletePolyline);
        }
        deletePolylines.forEach((v) => {
          polylineCollection.remove(v);
        });
        addPolylines(polylineCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addPolylines = (polylineCollection, polylines) => {
      for (let i = 0; i < polylines.length; i++) {
        const polylineOptions = polylines[i];
        polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid();
        const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions);
        const polyline = polylineCollection.add(polylineOptionsTransform);
        util.addCustomProperty(polyline, polylineOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const polylineCollection = new Cesium.PolylineCollection(options);
      addPolylines(polylineCollection, props.polylines);
      return polylineCollection;
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => ctx.slots.default ? vue.h("i", {
      class: util.kebabCase(name),
      style: { display: "none !important" }
    }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(name));
  }
});

exports["default"] = CollectionPolyline;
//# sourceMappingURL=index.js.map
