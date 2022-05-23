import { positionProps } from '../../../composables/private/use-position.mjs';
import { getDefaultOptionByProps } from '../../../utils/util.mjs';
import { defaultProps as defaultProps$1 } from '../compass/defaultProps.mjs';
import { defaultProps as defaultProps$2 } from '../zoom-control/defaultProps.mjs';
import printDefaultProps from '../print/defaultProps.mjs';
import locationDefaultProps from '../my-location/defaultProps.mjs';
import statusBarDefaultProps from '../status-bar/defaultProps.mjs';
import distancelegendDefaultProps from '../distance-legend/defaultProps.mjs';

const defaultProps = {
  ...positionProps,
  compassOpts: {
    type: [Object, Boolean],
    default: () => getDefaultOptionByProps(defaultProps$1, ["position", "offset"])
  },
  zoomOpts: {
    type: [Object, Boolean],
    default: () => getDefaultOptionByProps(defaultProps$2, ["position", "offset"])
  },
  printOpts: {
    type: [Object, Boolean],
    default: () => getDefaultOptionByProps(printDefaultProps, ["position", "offset"])
  },
  locationOpts: {
    type: [Object, Boolean],
    default: () => getDefaultOptionByProps(locationDefaultProps, ["position", "offset"])
  },
  otherOpts: {
    type: [Object, Boolean],
    default: () => ({
      position: "bottom-right",
      offset: [2, 3],
      statusBarOpts: getDefaultOptionByProps(statusBarDefaultProps, ["position", "offset"]),
      distancelegendOpts: getDefaultOptionByProps(distancelegendDefaultProps, ["position", "offset"])
    })
  }
};
const defaultOptions = getDefaultOptionByProps(defaultProps);

export { defaultOptions, defaultProps };
//# sourceMappingURL=defaultProps.mjs.map
