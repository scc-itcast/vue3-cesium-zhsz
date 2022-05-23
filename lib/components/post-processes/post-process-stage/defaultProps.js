'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cesiumProps = require('../../../utils/cesium-props.js');

const defaultProps = {
  fragmentShader: String,
  uniforms: Object,
  textureScale: {
    type: Number,
    default: 1
  },
  forcePowerOfTwo: {
    type: Boolean,
    default: false
  },
  sampleMode: Number,
  pixelFormat: Number,
  pixelDatatype: Number,
  ...cesiumProps.clearColor,
  ...cesiumProps.scissorRectangle,
  name: String
};

exports["default"] = defaultProps;
//# sourceMappingURL=defaultProps.js.map
