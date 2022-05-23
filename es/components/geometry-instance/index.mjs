import GeometryInstance from './src/index.mjs';
export { geometryInstanceProps } from './src/index.mjs';

GeometryInstance.install = (app) => {
  app.component(GeometryInstance.name, GeometryInstance);
};
const _GeometryInstance = GeometryInstance;
const VcGeometryInstance = _GeometryInstance;

export { VcGeometryInstance, _GeometryInstance as default };
//# sourceMappingURL=index.mjs.map
