import CollectionBillboard from './billboard-collection/index.mjs';
export { billboardCollectionProps } from './billboard-collection/index.mjs';
import Billboard from './billboard/index.mjs';
export { billboardProps } from './billboard/index.mjs';
import CollectionCloud from './cloud-collection/index.mjs';
export { cloudCollectionProps } from './cloud-collection/index.mjs';
import CumulusCloud from './cloud/index.mjs';
export { cumulusCloudProps } from './cloud/index.mjs';
import CollectionLabel from './label-collection/index.mjs';
export { labelCollectionProps } from './label-collection/index.mjs';
import Label from './label/index.mjs';
export { labelProps } from './label/index.mjs';
import CollectionPoint from './point-collection/index.mjs';
export { pointCollectionProps } from './point-collection/index.mjs';
import Point from './point/index.mjs';
export { pointProps } from './point/index.mjs';
import CollectionPolyline from './polyline-collection/index.mjs';
import Polyline from './polyline/index.mjs';
export { polylineProps } from './polyline/index.mjs';
import CollectionPrimitive from './primitive-collection/index.mjs';
export { primitiveCollectionProps } from './primitive-collection/index.mjs';
import Polygon from './polygon/index.mjs';
export { polygonProps } from './polygon/index.mjs';

const components = [
  CollectionBillboard,
  CollectionCloud,
  CollectionLabel,
  CollectionPoint,
  CollectionPolyline,
  CollectionPrimitive,
  CumulusCloud,
  Billboard,
  Label,
  Point,
  Polyline,
  Polygon
];
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
const VcCollectionBillboard = CollectionBillboard;
const VcCollectionCloud = CollectionCloud;
const VcCollectionLabel = CollectionLabel;
const VcCollectionPoint = CollectionPoint;
const VcCollectionPolyline = CollectionPolyline;
const VcCollectionPrimitive = CollectionPrimitive;
const VcBillboard = Billboard;
const VcCumulusCloud = CumulusCloud;
const VcLabel = Label;
const VcPoint = Point;
const VcPolyline = Polyline;
const VcPolygon = Polygon;

export { VcBillboard, VcCollectionBillboard, VcCollectionCloud, VcCollectionLabel, VcCollectionPoint, VcCollectionPolyline, VcCollectionPrimitive, VcCumulusCloud, VcLabel, VcPoint, VcPolygon, VcPolyline, index as default };
//# sourceMappingURL=index.mjs.map
