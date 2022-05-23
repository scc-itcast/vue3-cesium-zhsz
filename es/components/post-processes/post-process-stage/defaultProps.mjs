import { clearColor, scissorRectangle } from '../../../utils/cesium-props.mjs';

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
  ...clearColor,
  ...scissorRectangle,
  name: String
};

export { defaultProps as default };
//# sourceMappingURL=defaultProps.mjs.map
