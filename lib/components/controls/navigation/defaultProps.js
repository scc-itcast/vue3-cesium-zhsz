'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usePosition = require('../../../composables/private/use-position.js');
var util = require('../../../utils/util.js');
var defaultProps$1 = require('../compass/defaultProps.js');
var defaultProps$2 = require('../zoom-control/defaultProps.js');
var defaultProps$3 = require('../print/defaultProps.js');
var defaultProps$4 = require('../my-location/defaultProps.js');
var defaultProps$5 = require('../status-bar/defaultProps.js');
var defaultProps$6 = require('../distance-legend/defaultProps.js');

const defaultProps = {
  ...usePosition.positionProps,
  compassOpts: {
    type: [Object, Boolean],
    default: () => util.getDefaultOptionByProps(defaultProps$1.defaultProps, ["position", "offset"])
  },
  zoomOpts: {
    type: [Object, Boolean],
    default: () => util.getDefaultOptionByProps(defaultProps$2.defaultProps, ["position", "offset"])
  },
  printOpts: {
    type: [Object, Boolean],
    default: () => util.getDefaultOptionByProps(defaultProps$3["default"], ["position", "offset"])
  },
  locationOpts: {
    type: [Object, Boolean],
    default: () => util.getDefaultOptionByProps(defaultProps$4["default"], ["position", "offset"])
  },
  otherOpts: {
    type: [Object, Boolean],
    default: () => ({
      position: "bottom-right",
      offset: [2, 3],
      statusBarOpts: util.getDefaultOptionByProps(defaultProps$5["default"], ["position", "offset"]),
      distancelegendOpts: util.getDefaultOptionByProps(defaultProps$6["default"], ["position", "offset"])
    })
  }
};
const defaultOptions = util.getDefaultOptionByProps(defaultProps);

exports.defaultOptions = defaultOptions;
exports.defaultProps = defaultProps;
//# sourceMappingURL=defaultProps.js.map
