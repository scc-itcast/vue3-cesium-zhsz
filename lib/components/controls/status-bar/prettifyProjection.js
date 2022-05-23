'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var proj4 = require('proj4');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var proj4__default = /*#__PURE__*/_interopDefaultLegacy(proj4);

function prettifyProjection(longitude, latitude, proj4Projection, proj4longlat, projectionUnits) {
  const zone = 1 + Math.floor((longitude + 180) / 6);
  const projection = proj4Projection + " +zone=" + zone + (latitude < 0 ? " +south" : "");
  const projPoint = proj4__default["default"](proj4longlat, projection, [longitude, latitude]);
  return {
    utmZone: zone + (latitude < 0 ? "S" : "N"),
    north: projPoint[1].toFixed(2) + projectionUnits,
    east: projPoint[0].toFixed(2) + projectionUnits
  };
}

exports["default"] = prettifyProjection;
//# sourceMappingURL=prettifyProjection.js.map
