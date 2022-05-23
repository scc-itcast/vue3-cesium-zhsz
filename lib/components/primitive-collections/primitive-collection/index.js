'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var lodashUnified = require('lodash-unified');
require('../../../shared/index.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collections/index.js');
var PolygonPrimitive = require('../../../shared/src/PolygonPrimitive.js');

const primitiveCollectionProps = {
  ...cesiumProps.show,
  destroyPrimitives: {
    type: Boolean,
    default: true
  },
  ...cesiumProps.enableMouseEvent,
  polygons: {
    type: Array,
    default: () => []
  }
};
var CollectionPrimitive = vue.defineComponent({
  name: "VcCollectionPrimitive",
  props: primitiveCollectionProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PrimitiveCollection";
    const primitiveCollectionsState = index["default"](props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("polygons");
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.polygons), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const primitiveCollection = instance.cesiumObject;
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
          const modifyPolygon = primitiveCollection._primitives.find((v) => v._id === modify.oldOptions.id);
          modifyPolygon && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyPolygon[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
        const deletePolygons = [];
        for (let i = 0; i < deletes.length; i++) {
          const deletePolygon = primitiveCollection._primitives.find((v) => v.id === deletes[i].id);
          deletePolygon && deletePolygons.push(deletePolygon);
        }
        deletePolygons.forEach((v) => {
          primitiveCollection.remove(v);
        });
        addPolygons(primitiveCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addPolygons = (primitiveCollection, polygons) => {
      for (let i = 0; i < polygons.length; i++) {
        const polygonOptions = polygons[i];
        polygonOptions.id = Cesium.defined(polygonOptions.id) ? polygonOptions.id : Cesium.createGuid();
        const polygonOptionsTransform = primitiveCollectionsState.transformProps(polygonOptions);
        const polygonPrimitive = new PolygonPrimitive["default"](polygonOptionsTransform);
        polygonPrimitive._vcParent = primitiveCollection;
        util.addCustomProperty(polygonPrimitive, polygonOptionsTransform);
        primitiveCollection.add(polygonPrimitive);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const primitiveCollection = new Cesium.PrimitiveCollection(options);
      addPolygons(primitiveCollection, props.polygons);
      return primitiveCollection;
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

exports["default"] = CollectionPrimitive;
exports.primitiveCollectionProps = primitiveCollectionProps;
//# sourceMappingURL=index.js.map
