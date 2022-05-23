import { rectangle, show, cutoutRectangle, colorToAlpha } from '../../../utils/cesium-props.mjs';

var defaultProps = {
  imageryProvider: Object,
  ...rectangle,
  alpha: {
    type: [Number, Function],
    default: 1
  },
  nightAlpha: {
    type: [Number, Function],
    default: 1
  },
  dayAlpha: {
    type: [Number, Function],
    default: 1
  },
  brightness: {
    type: [Number, Function],
    default: 1
  },
  contrast: {
    type: [Number, Function],
    default: 1
  },
  hue: {
    type: [Number, Function],
    default: 0
  },
  saturation: {
    type: [Number, Function],
    default: 1
  },
  gamma: {
    type: [Number, Function],
    default: 1
  },
  splitDirection: {
    type: [Number, Function],
    default: 0
  },
  minificationFilter: Number,
  magnificationFilter: Number,
  ...show,
  maximumAnisotropy: Number,
  minimumTerrainLevel: Number,
  maximumTerrainLevel: Number,
  ...cutoutRectangle,
  ...colorToAlpha,
  colorToAlphaThreshold: {
    type: Number,
    default: 4e-3
  },
  sortOrder: Number
};

export { defaultProps as default };
//# sourceMappingURL=defaultProps.mjs.map
