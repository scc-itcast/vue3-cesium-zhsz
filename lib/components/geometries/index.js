'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./box/index.js');
var index$2 = require('./box-outline/index.js');
var index$3 = require('./circle/index.js');
var index$4 = require('./circle-outline/index.js');
var index$5 = require('./coplanar-polygon/index.js');
var index$6 = require('./coplanar-polygon-outline/index.js');
var index$7 = require('./corridor/index.js');
var index$8 = require('./corridor-outline/index.js');
var index$9 = require('./cylinder/index.js');
var index$a = require('./cylinder-outline/index.js');
var index$b = require('./ellipse/index.js');
var index$c = require('./ellipse-outline/index.js');
var index$d = require('./ellipsoid/index.js');
var index$u = require('./ellipsoid-outline/index.js');
var index$e = require('./frustum/index.js');
var index$f = require('./frustum-outline/index.js');
var index$g = require('./ground-polyline/index.js');
var index$h = require('./plane/index.js');
var index$v = require('./plane-outline/index.js');
var index$i = require('./polygon/index.js');
var index$j = require('./polygon-outline/index.js');
var index$k = require('./polyline/index.js');
var index$l = require('./polyline-volume/index.js');
var index$m = require('./polyline-volume-outline/index.js');
var index$n = require('./rectangle/index.js');
var index$o = require('./rectangle-outline/index.js');
var index$p = require('./simple-polyline/index.js');
var index$q = require('./sphere/index.js');
var index$r = require('./sphere-outline/index.js');
var index$s = require('./wall/index.js');
var index$t = require('./wall-outline/index.js');

const components = [
  index$1["default"],
  index$2["default"],
  index$3["default"],
  index$4["default"],
  index$5["default"],
  index$6["default"],
  index$7["default"],
  index$8["default"],
  index$9["default"],
  index$a["default"],
  index$b["default"],
  index$c["default"],
  index$d["default"],
  index$u["default"],
  index$e["default"],
  index$f["default"],
  index$g["default"],
  index$h["default"],
  index$v["default"],
  index$i["default"],
  index$j["default"],
  index$k["default"],
  index$l["default"],
  index$m["default"],
  index$n["default"],
  index$o["default"],
  index$p["default"],
  index$q["default"],
  index$r["default"],
  index$s["default"],
  index$t["default"]
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
const VcGeometryBox = index$1["default"];
const VcGeometryBoxOutline = index$2["default"];
const VcGeometryCircle = index$3["default"];
const VcGeometryCircleOutline = index$4["default"];
const VcGeometryPolygonCoplanar = index$5["default"];
const VcGeometryPolygonCoplanarOutline = index$6["default"];
const VcGeometryCorridor = index$7["default"];
const VcGeometryCorridorOutline = index$8["default"];
const VcGeometryCylinder = index$9["default"];
const VcGeometryCylinderOutline = index$a["default"];
const VcGeometryEllipse = index$b["default"];
const VcGeometryEllipseOutline = index$c["default"];
const VcGeometryEllipsoid = index$d["default"];
const VcGeometryEllipsoidOutline = index$u["default"];
const VcGeometryFrustum = index$e["default"];
const VcGeometryFrustumOutline = index$f["default"];
const VcGeometryGroundPolyline = index$g["default"];
const VcGeometryPlane = index$h["default"];
const VcGeometryPlaneOutline = index$v["default"];
const VcGeometryPolygon = index$i["default"];
const VcGeometryPolygonOutline = index$j["default"];
const VcGeometryPolyline = index$k["default"];
const VcGeometryPolylineVolume = index$l["default"];
const VcGeometryPolylineVolumeOutline = index$m["default"];
const VcGeometryRectangle = index$n["default"];
const VcGeometryRectangleOutline = index$o["default"];
const VcGeometrySimplePolyline = index$p["default"];
const VcGeometrySphere = index$q["default"];
const VcGeometrySphereOutline = index$r["default"];
const VcGeometryWall = index$s["default"];
const VcGeometryWallOutline = index$t["default"];

exports.boxGeometryProps = index$1.boxGeometryProps;
exports.boxOutlineGeometryProps = index$2.boxOutlineGeometryProps;
exports.circleGeometryProps = index$3.circleGeometryProps;
exports.circleOutlineGeometryProps = index$4.circleOutlineGeometryProps;
exports.polygonCoplanarProps = index$5.polygonCoplanarProps;
exports.polygonCoplanarOutlineProps = index$6.polygonCoplanarOutlineProps;
exports.corridorGeometryProps = index$7.corridorGeometryProps;
exports.corridorOutlineGeometryProps = index$8.corridorOutlineGeometryProps;
exports.cylinderGeometryProps = index$9.cylinderGeometryProps;
exports.cylinderOutlineGeometryProps = index$a.cylinderOutlineGeometryProps;
exports.ellipseGeometryProps = index$b.ellipseGeometryProps;
exports.ellipseOutlineGeometryProps = index$c.ellipseOutlineGeometryProps;
exports.ellipsoidGeometryProps = index$d.ellipsoidGeometryProps;
exports.frustumGeometryProps = index$e.frustumGeometryProps;
exports.frustumOutlineGeometryProps = index$f.frustumOutlineGeometryProps;
exports.groundPolylineGeometryProps = index$g.groundPolylineGeometryProps;
exports.planeGeometryProps = index$h.planeGeometryProps;
exports.polygonGeometryProps = index$i.polygonGeometryProps;
exports.polygonOutlineGeometryProps = index$j.polygonOutlineGeometryProps;
exports.polylineGeometryProps = index$k.polylineGeometryProps;
exports.polylineVolumeGeometryProps = index$l.polylineVolumeGeometryProps;
exports.polylineVolumeOutlineGeometryProps = index$m.polylineVolumeOutlineGeometryProps;
exports.rectangleGeometryProps = index$n.rectangleGeometryProps;
exports.rectangleOutlineGeometryProps = index$o.rectangleOutlineGeometryProps;
exports.simplePolylineGeometryProps = index$p.simplePolylineGeometryProps;
exports.sphereGeometryProps = index$q.sphereGeometryProps;
exports.sphereGeometryOutlineProps = index$r.sphereGeometryOutlineProps;
exports.wallGeometryProps = index$s.wallGeometryProps;
exports.wallOutlineProps = index$t.wallOutlineProps;
exports.VcGeometryBox = VcGeometryBox;
exports.VcGeometryBoxOutline = VcGeometryBoxOutline;
exports.VcGeometryCircle = VcGeometryCircle;
exports.VcGeometryCircleOutline = VcGeometryCircleOutline;
exports.VcGeometryCorridor = VcGeometryCorridor;
exports.VcGeometryCorridorOutline = VcGeometryCorridorOutline;
exports.VcGeometryCylinder = VcGeometryCylinder;
exports.VcGeometryCylinderOutline = VcGeometryCylinderOutline;
exports.VcGeometryEllipse = VcGeometryEllipse;
exports.VcGeometryEllipseOutline = VcGeometryEllipseOutline;
exports.VcGeometryEllipsoid = VcGeometryEllipsoid;
exports.VcGeometryEllipsoidOutline = VcGeometryEllipsoidOutline;
exports.VcGeometryFrustum = VcGeometryFrustum;
exports.VcGeometryFrustumOutline = VcGeometryFrustumOutline;
exports.VcGeometryGroundPolyline = VcGeometryGroundPolyline;
exports.VcGeometryPlane = VcGeometryPlane;
exports.VcGeometryPlaneOutline = VcGeometryPlaneOutline;
exports.VcGeometryPolygon = VcGeometryPolygon;
exports.VcGeometryPolygonCoplanar = VcGeometryPolygonCoplanar;
exports.VcGeometryPolygonCoplanarOutline = VcGeometryPolygonCoplanarOutline;
exports.VcGeometryPolygonOutline = VcGeometryPolygonOutline;
exports.VcGeometryPolyline = VcGeometryPolyline;
exports.VcGeometryPolylineVolume = VcGeometryPolylineVolume;
exports.VcGeometryPolylineVolumeOutline = VcGeometryPolylineVolumeOutline;
exports.VcGeometryRectangle = VcGeometryRectangle;
exports.VcGeometryRectangleOutline = VcGeometryRectangleOutline;
exports.VcGeometrySimplePolyline = VcGeometrySimplePolyline;
exports.VcGeometrySphere = VcGeometrySphere;
exports.VcGeometrySphereOutline = VcGeometrySphereOutline;
exports.VcGeometryWall = VcGeometryWall;
exports.VcGeometryWallOutline = VcGeometryWallOutline;
exports["default"] = index;
//# sourceMappingURL=index.js.map
