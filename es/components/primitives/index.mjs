import PrimitiveClassification from './classification/index.mjs';
export { classificationPrimitiveProps } from './classification/index.mjs';
import PrimitiveGround from './ground/index.mjs';
export { groundPrimitiveProps } from './ground/index.mjs';
import PrimitiveGroundPolyline from './ground-polyline/index.mjs';
export { groundPolylinePrimitiveProps } from './ground-polyline/index.mjs';
import PrimitiveModel from './model/index.mjs';
export { modelPrimitiveProps } from './model/index.mjs';
import Primitive from './primitive/index.mjs';
export { primitiveProps } from './primitive/index.mjs';
import PrimitiveTileset from './tileset/index.mjs';
export { tilesetPrimitiveProps } from './tileset/index.mjs';
import PrimitiveParticle from './particle/index.mjs';
export { particlePrimitiveProps } from './particle/index.mjs';

const components = [PrimitiveClassification, PrimitiveGround, PrimitiveGroundPolyline, PrimitiveModel, Primitive, PrimitiveTileset, PrimitiveParticle];
const install = (app) => {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp);
  });
};
var index = {
  install
};
components.forEach((cmp) => {
  cmp["install"] = (app) => {
    app.component(cmp.name, cmp);
  };
});
const VcPrimitiveClassification = PrimitiveClassification;
const VcPrimitiveGround = PrimitiveGround;
const VcPrimitiveGroundPolyline = PrimitiveGroundPolyline;
const VcPrimitiveModel = PrimitiveModel;
const VcPrimitive = Primitive;
const VcPrimitiveTileset = PrimitiveTileset;
const VcPrimitiveParticle = PrimitiveParticle;

export { VcPrimitive, VcPrimitiveClassification, VcPrimitiveGround, VcPrimitiveGroundPolyline, VcPrimitiveModel, VcPrimitiveParticle, VcPrimitiveTileset, index as default };
//# sourceMappingURL=index.mjs.map
