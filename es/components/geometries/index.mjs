import GeometryBox from './box/index.mjs';
export { boxGeometryProps } from './box/index.mjs';
import GeometryBoxOutline from './box-outline/index.mjs';
export { boxOutlineGeometryProps } from './box-outline/index.mjs';
import GeometryCircle from './circle/index.mjs';
export { circleGeometryProps } from './circle/index.mjs';
import GeometryCircleOutline from './circle-outline/index.mjs';
export { circleOutlineGeometryProps } from './circle-outline/index.mjs';
import GeometryPolygonCoplanar from './coplanar-polygon/index.mjs';
export { polygonCoplanarProps } from './coplanar-polygon/index.mjs';
import GeometryPolygonCoplanarOutline from './coplanar-polygon-outline/index.mjs';
export { polygonCoplanarOutlineProps } from './coplanar-polygon-outline/index.mjs';
import GeometryCorridor from './corridor/index.mjs';
export { corridorGeometryProps } from './corridor/index.mjs';
import GeometryCorridorOutline from './corridor-outline/index.mjs';
export { corridorOutlineGeometryProps } from './corridor-outline/index.mjs';
import GeometryCylinder from './cylinder/index.mjs';
export { cylinderGeometryProps } from './cylinder/index.mjs';
import GeometryCylinderOutline from './cylinder-outline/index.mjs';
export { cylinderOutlineGeometryProps } from './cylinder-outline/index.mjs';
import GeometryEllipse from './ellipse/index.mjs';
export { ellipseGeometryProps } from './ellipse/index.mjs';
import GeometryEllipseOutline from './ellipse-outline/index.mjs';
export { ellipseOutlineGeometryProps } from './ellipse-outline/index.mjs';
import GeometryEllipsoid from './ellipsoid/index.mjs';
export { ellipsoidGeometryProps } from './ellipsoid/index.mjs';
import GeometryEllipsoidOutline from './ellipsoid-outline/index.mjs';
import GeometryFrustum from './frustum/index.mjs';
export { frustumGeometryProps } from './frustum/index.mjs';
import GeometryFrustumOutline from './frustum-outline/index.mjs';
export { frustumOutlineGeometryProps } from './frustum-outline/index.mjs';
import GeometryGroundPolyline from './ground-polyline/index.mjs';
export { groundPolylineGeometryProps } from './ground-polyline/index.mjs';
import GeometryPlane from './plane/index.mjs';
export { planeGeometryProps } from './plane/index.mjs';
import GeometryPlaneOutline from './plane-outline/index.mjs';
import GeometryPolygon from './polygon/index.mjs';
export { polygonGeometryProps } from './polygon/index.mjs';
import GeometryPolygonOutline from './polygon-outline/index.mjs';
export { polygonOutlineGeometryProps } from './polygon-outline/index.mjs';
import GeometryPolyline from './polyline/index.mjs';
export { polylineGeometryProps } from './polyline/index.mjs';
import GeometryPolylineVolume from './polyline-volume/index.mjs';
export { polylineVolumeGeometryProps } from './polyline-volume/index.mjs';
import GeometryPolylineVolumeOutline from './polyline-volume-outline/index.mjs';
export { polylineVolumeOutlineGeometryProps } from './polyline-volume-outline/index.mjs';
import GeometryRectangle from './rectangle/index.mjs';
export { rectangleGeometryProps } from './rectangle/index.mjs';
import GeometryRectangleOutline from './rectangle-outline/index.mjs';
export { rectangleOutlineGeometryProps } from './rectangle-outline/index.mjs';
import GeometrySimplePolyline from './simple-polyline/index.mjs';
export { simplePolylineGeometryProps } from './simple-polyline/index.mjs';
import GeometrySphere from './sphere/index.mjs';
export { sphereGeometryProps } from './sphere/index.mjs';
import GeometrySphereOutline from './sphere-outline/index.mjs';
export { sphereGeometryOutlineProps } from './sphere-outline/index.mjs';
import GeometryWall from './wall/index.mjs';
export { wallGeometryProps } from './wall/index.mjs';
import GeometryWallOutline from './wall-outline/index.mjs';
export { wallOutlineProps } from './wall-outline/index.mjs';

const components = [
  GeometryBox,
  GeometryBoxOutline,
  GeometryCircle,
  GeometryCircleOutline,
  GeometryPolygonCoplanar,
  GeometryPolygonCoplanarOutline,
  GeometryCorridor,
  GeometryCorridorOutline,
  GeometryCylinder,
  GeometryCylinderOutline,
  GeometryEllipse,
  GeometryEllipseOutline,
  GeometryEllipsoid,
  GeometryEllipsoidOutline,
  GeometryFrustum,
  GeometryFrustumOutline,
  GeometryGroundPolyline,
  GeometryPlane,
  GeometryPlaneOutline,
  GeometryPolygon,
  GeometryPolygonOutline,
  GeometryPolyline,
  GeometryPolylineVolume,
  GeometryPolylineVolumeOutline,
  GeometryRectangle,
  GeometryRectangleOutline,
  GeometrySimplePolyline,
  GeometrySphere,
  GeometrySphereOutline,
  GeometryWall,
  GeometryWallOutline
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
const VcGeometryBox = GeometryBox;
const VcGeometryBoxOutline = GeometryBoxOutline;
const VcGeometryCircle = GeometryCircle;
const VcGeometryCircleOutline = GeometryCircleOutline;
const VcGeometryPolygonCoplanar = GeometryPolygonCoplanar;
const VcGeometryPolygonCoplanarOutline = GeometryPolygonCoplanarOutline;
const VcGeometryCorridor = GeometryCorridor;
const VcGeometryCorridorOutline = GeometryCorridorOutline;
const VcGeometryCylinder = GeometryCylinder;
const VcGeometryCylinderOutline = GeometryCylinderOutline;
const VcGeometryEllipse = GeometryEllipse;
const VcGeometryEllipseOutline = GeometryEllipseOutline;
const VcGeometryEllipsoid = GeometryEllipsoid;
const VcGeometryEllipsoidOutline = GeometryEllipsoidOutline;
const VcGeometryFrustum = GeometryFrustum;
const VcGeometryFrustumOutline = GeometryFrustumOutline;
const VcGeometryGroundPolyline = GeometryGroundPolyline;
const VcGeometryPlane = GeometryPlane;
const VcGeometryPlaneOutline = GeometryPlaneOutline;
const VcGeometryPolygon = GeometryPolygon;
const VcGeometryPolygonOutline = GeometryPolygonOutline;
const VcGeometryPolyline = GeometryPolyline;
const VcGeometryPolylineVolume = GeometryPolylineVolume;
const VcGeometryPolylineVolumeOutline = GeometryPolylineVolumeOutline;
const VcGeometryRectangle = GeometryRectangle;
const VcGeometryRectangleOutline = GeometryRectangleOutline;
const VcGeometrySimplePolyline = GeometrySimplePolyline;
const VcGeometrySphere = GeometrySphere;
const VcGeometrySphereOutline = GeometrySphereOutline;
const VcGeometryWall = GeometryWall;
const VcGeometryWallOutline = GeometryWallOutline;

export { VcGeometryBox, VcGeometryBoxOutline, VcGeometryCircle, VcGeometryCircleOutline, VcGeometryCorridor, VcGeometryCorridorOutline, VcGeometryCylinder, VcGeometryCylinderOutline, VcGeometryEllipse, VcGeometryEllipseOutline, VcGeometryEllipsoid, VcGeometryEllipsoidOutline, VcGeometryFrustum, VcGeometryFrustumOutline, VcGeometryGroundPolyline, VcGeometryPlane, VcGeometryPlaneOutline, VcGeometryPolygon, VcGeometryPolygonCoplanar, VcGeometryPolygonCoplanarOutline, VcGeometryPolygonOutline, VcGeometryPolyline, VcGeometryPolylineVolume, VcGeometryPolylineVolumeOutline, VcGeometryRectangle, VcGeometryRectangleOutline, VcGeometrySimplePolyline, VcGeometrySphere, VcGeometrySphereOutline, VcGeometryWall, VcGeometryWallOutline, index as default };
//# sourceMappingURL=index.mjs.map
