import Viewer from './src/index.mjs';
export { viewerProps } from './src/useViewer.mjs';

Viewer.install = (app, opts) => {
  app.component(Viewer.name, Viewer);
};
const _Viewer = Viewer;
const VcViewer = _Viewer;

export { VcViewer, _Viewer as default };
//# sourceMappingURL=index.mjs.map
