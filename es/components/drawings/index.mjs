import Drawings from './src/index.mjs';
export { default as VcDrawingPin } from './src/pin/index.mjs';
export { default as VcDrawingPoint } from './src/point/index.mjs';
export { default as VcDrawingPolygon } from './src/polygon/index.mjs';
export { default as VcDrawingPolyline } from './src/polyline/index.mjs';
export { default as VcDrawingRectangle } from './src/rectangle/index.mjs';
export { default as VcDrawingRegular } from './src/regular/index.mjs';
export { drawingsProps } from './src/defaultProps.mjs';

Drawings.install = (app) => {
  app.component(Drawings.name, Drawings);
};
const _Drawings = Drawings;
const VcDrawings = _Drawings;

export { VcDrawings, _Drawings as default };
//# sourceMappingURL=index.mjs.map
