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

const billboardCollectionProps = {
  ...cesiumProps.scene,
  ...cesiumProps.blendOption,
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  ...cesiumProps.modelMatrix,
  ...cesiumProps.debugShowBoundingVolume,
  billboards: {
    type: Array,
    default: () => []
  }
};
var CollectionBillboard = vue.defineComponent({
  name: "VcCollectionBillboard",
  props: billboardCollectionProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "BillboardCollection";
    const primitiveCollectionsState = index["default"](props, ctx, instance);
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.billboards), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const billboardCollection = instance.cesiumObject;
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
          const modifyBillboard = billboardCollection._billboards.find((v) => v.id === modify.oldOptions.id);
          modifyBillboard && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyBillboard[prop] = primitiveCollectionsState == null ? void 0 : primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
        const deleteBillboards = [];
        for (let i = 0; i < deletes.length; i++) {
          const deleteBillboard = billboardCollection._billboards.find((v) => v.id === deletes[i].id);
          deleteBillboard && deleteBillboards.push(deleteBillboard);
        }
        deleteBillboards.forEach((v) => {
          billboardCollection.remove(v);
        });
        addBillboards(billboardCollection, addeds);
      }
    }, {
      deep: true
    }));
    instance.alreadyListening.push("billboards");
    const addBillboards = (billboardCollection, billboards) => {
      for (let i = 0; i < billboards.length; i++) {
        const billboardOptions = billboards[i];
        billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid();
        const billboardOptionsTransform = primitiveCollectionsState == null ? void 0 : primitiveCollectionsState.transformProps(billboardOptions);
        const billboard = billboardCollection.add(billboardOptionsTransform);
        util.addCustomProperty(billboard, billboardOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState == null ? void 0 : primitiveCollectionsState.transformProps(props);
      const billboardCollection = new Cesium.BillboardCollection(options);
      addBillboards(billboardCollection, props.billboards);
      return billboardCollection;
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
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

exports.billboardCollectionProps = billboardCollectionProps;
exports["default"] = CollectionBillboard;
//# sourceMappingURL=index.js.map
