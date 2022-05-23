import ImageryLayer from './src/index.mjs';
export { imageryLayerProps } from './src/index.mjs';

ImageryLayer.install = (app) => {
  app.component(ImageryLayer.name, ImageryLayer);
};
const _ImageryLayer = ImageryLayer;
const VcLayerImagery = _ImageryLayer;

export { VcLayerImagery, _ImageryLayer as default };
//# sourceMappingURL=index.mjs.map
