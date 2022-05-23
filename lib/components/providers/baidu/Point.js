'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/util.js');
var shared = require('@vue/shared');

class Point {
  constructor(lng, lat) {
    if (isNaN(lng)) {
      lng = isNaN(lng) ? 0 : lng;
    }
    if (shared.isString(lng)) {
      lng = parseFloat(lng);
    }
    if (isNaN(lat)) {
      lat = isNaN(lat) ? 0 : lat;
    }
    if (shared.isString(lat)) {
      lat = parseFloat(lat);
    }
    this.lng = lng;
    this.lat = lat;
  }
  equals(other) {
    return other && this.lat === other.lat && this.lng === other.lng;
  }
}
Point.isInRange = function(pt) {
  return pt && pt.lng <= 180 && pt.lng >= -180 && pt.lat <= 74 && pt.lat >= -74;
};

exports["default"] = Point;
//# sourceMappingURL=Point.js.map
