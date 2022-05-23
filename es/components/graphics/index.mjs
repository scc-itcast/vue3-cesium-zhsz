import GraphicsBillboard from './billboard/index.mjs';
export { billboarGraphicsProps } from './billboard/index.mjs';
import GraphicsBox from './box/index.mjs';
export { boxGraphicsProps } from './box/index.mjs';
import GraphicsCorridor from './corridor/index.mjs';
import GraphicsCylinder from './cylinder/index.mjs';
export { cylinderGraphicsProps } from './cylinder/index.mjs';
import GraphicsEllipse from './ellipse/index.mjs';
export { ellipseGraphicsProps } from './ellipse/index.mjs';
import GraphicsEllipsoid from './ellipsoid/index.mjs';
export { ellipsoidGraphicsProps } from './ellipsoid/index.mjs';
import GraphicsLabel from './label/index.mjs';
export { labelGraphicsProps } from './label/index.mjs';
import GraphicsModel from './model/index.mjs';
export { modelGraphicsProps } from './model/index.mjs';
import GraphicsPath from './path/index.mjs';
export { pathGraphicsProps } from './path/index.mjs';
import GraphicsPlane from './plane/index.mjs';
export { planeGraphicsProps } from './plane/index.mjs';
import GraphicsPoint from './point/index.mjs';
export { pointGraphicsProps } from './point/index.mjs';
import GraphicsPolygon from './polygon/index.mjs';
export { polygonGraphicsProps } from './polygon/index.mjs';
import GraphicsPolyline from './polyline/index.mjs';
export { polylineGraphicsProps } from './polyline/index.mjs';
import GraphicsPolylineVolume from './polylineVolume/index.mjs';
export { polylineVolumeGraphicsProps } from './polylineVolume/index.mjs';
import GraphicsRectangle from './rectangle/index.mjs';
export { rectangleGraphicsProps } from './rectangle/index.mjs';
import GraphicsTileset from './tileset/index.mjs';
export { tilesetGraphicsProps } from './tileset/index.mjs';
import GraphicsWall from './wall/index.mjs';
export { wallGraphicsProps } from './wall/index.mjs';

const components = [
  GraphicsBillboard,
  GraphicsBox,
  GraphicsCorridor,
  GraphicsCylinder,
  GraphicsEllipse,
  GraphicsEllipsoid,
  GraphicsLabel,
  GraphicsModel,
  GraphicsPath,
  GraphicsPlane,
  GraphicsPoint,
  GraphicsPolygon,
  GraphicsPolyline,
  GraphicsPolylineVolume,
  GraphicsRectangle,
  GraphicsTileset,
  GraphicsWall
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
const VcGraphicsBillboard = GraphicsBillboard;
const VcGraphicsBox = GraphicsBox;
const VcGraphicsCorridor = GraphicsCorridor;
const VcGraphicsCylinder = GraphicsCylinder;
const VcGraphicsEllipse = GraphicsEllipse;
const VcGraphicsEllipsoid = GraphicsEllipsoid;
const VcGraphicsLabel = GraphicsLabel;
const VcGraphicsModel = GraphicsModel;
const VcGraphicsPath = GraphicsPath;
const VcGraphicsPlane = GraphicsPlane;
const VcGraphicsPoint = GraphicsPoint;
const VcGraphicsPolygon = GraphicsPolygon;
const VcGraphicsPolyline = GraphicsPolyline;
const VcGraphicsPolylineVolume = GraphicsPolylineVolume;
const VcGraphicsRectangle = GraphicsRectangle;
const VcGraphicsTileset = GraphicsTileset;
const VcGraphicsWall = GraphicsWall;

export { VcGraphicsBillboard, VcGraphicsBox, VcGraphicsCorridor, VcGraphicsCylinder, VcGraphicsEllipse, VcGraphicsEllipsoid, VcGraphicsLabel, VcGraphicsModel, VcGraphicsPath, VcGraphicsPlane, VcGraphicsPoint, VcGraphicsPolygon, VcGraphicsPolyline, VcGraphicsPolylineVolume, VcGraphicsRectangle, VcGraphicsTileset, VcGraphicsWall, index as default };
//# sourceMappingURL=index.mjs.map
