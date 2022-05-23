import '../../../utils/util.mjs';
import { isString } from '@vue/shared';

class Point {
  constructor(lng, lat) {
    if (isNaN(lng)) {
      lng = isNaN(lng) ? 0 : lng;
    }
    if (isString(lng)) {
      lng = parseFloat(lng);
    }
    if (isNaN(lat)) {
      lat = isNaN(lat) ? 0 : lat;
    }
    if (isString(lat)) {
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

export { Point as default };
//# sourceMappingURL=Point.mjs.map
