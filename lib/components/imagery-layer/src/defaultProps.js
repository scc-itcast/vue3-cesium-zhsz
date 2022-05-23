'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cesiumProps = require('../../../utils/cesium-props.js');

var defaultProps = {
  imageryProvider: Object,
  ...cesiumProps.rectangle,
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
  ...cesiumProps.show,
  maximumAnisotropy: Number,
  minimumTerrainLevel: Number,
  maximumTerrainLevel: Number,
  ...cesiumProps.cutoutRectangle,
  ...cesiumProps.colorToAlpha,
  colorToAlphaThreshold: {
    type: Number,
    default: 4e-3
  },
  sortOrder: Number
};

exports["default"] = defaultProps;
//# sourceMappingURL=defaultProps.js.map
