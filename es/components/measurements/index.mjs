import Measurements from './src/index.mjs';
export { default as VcMeasurementDistance } from './src/distance/index.mjs';
export { default as VcMeasurementPolyline } from './src/polyline/index.mjs';
export { default as VcMeasurementHorizontal } from './src/horizontal/index.mjs';
export { default as VcMeasurementVertical } from './src/vertical/index.mjs';
export { default as VcMeasurementHeight } from './src/height/index.mjs';
export { default as VcMeasurementPoint } from './src/point/index.mjs';
export { default as VcMeasurementArea } from './src/area/index.mjs';
export { default as VcMeasurementRectangle } from './src/rectangle/index.mjs';
export { default as VcMeasurementRegular } from './src/regular/index.mjs';
export { measurementsProps } from './src/defaultProps.mjs';

Measurements.install = (app) => {
  app.component(Measurements.name, Measurements);
};
const _Measurements = Measurements;
const VcMeasurements = _Measurements;

export { VcMeasurements, _Measurements as default };
//# sourceMappingURL=index.mjs.map
