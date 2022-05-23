'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BaiduMapMercatorProjection = require('./BaiduMapMercatorProjection.js');
var Point = require('./Point.js');
var coordtransform = require('../../../utils/coordtransform.js');

class BaiduMapMercatorTilingScheme {
  constructor(options) {
    const { defaultValue, Ellipsoid, WebMercatorProjection, Cartesian2, Cartographic, Math: CesiumMath, Rectangle } = Cesium;
    options = options || {};
    this._ellipsoid = defaultValue(options.ellipsoid, Ellipsoid.WGS84);
    this._projection = new WebMercatorProjection(this._ellipsoid);
    const projection = new BaiduMapMercatorProjection["default"]();
    this._projection.project = function(cartographic, result) {
      result = result || {};
      if (options.projectionTransforms && options.projectionTransforms.from !== options.projectionTransforms.to) {
        if (options.projectionTransforms.to.toUpperCase() === "WGS84") {
          result = coordtransform.wgs84togcj02(CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude));
          result = coordtransform.gcj02tobd09(result[0], result[1]);
        } else {
          result = coordtransform.gcj02tobd09(CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude));
        }
      }
      result[0] = Math.min(result[0], 180);
      result[0] = Math.max(result[0], -180);
      result[1] = Math.min(result[1], 74.000022);
      result[1] = Math.max(result[1], -71.988531);
      result = projection.lngLatToPoint(new Point["default"](result[0], result[1]));
      return new Cartesian2(result.x, result.y);
    };
    this._projection.unproject = function(cartographic, result) {
      result = result || {};
      result = projection.mercatorToLngLat(new Point["default"](cartographic.x, cartographic.y));
      result[0] = (result[0] + 180) % 360 - 180;
      if (options.projectionTransforms && options.projectionTransforms.from !== options.projectionTransforms.to) {
        if (options.projectionTransforms.to.toUpperCase() === "WGS84") {
          result = coordtransform.bd09togcj02(result.lng, result.lat);
          result = coordtransform.gcj02towgs84(result[0], result[1]);
        } else {
          result = coordtransform.bd09togcj02(result.lng, result.lat);
        }
      }
      return new Cartographic(Cesium.Math.toRadians(result[0]), Cesium.Math.toRadians(result[1]));
    };
    this._rectangleSouthwestInMeters = new Cartesian2(-2003772637e-2, -1247410417e-2);
    this._rectangleNortheastInMeters = new Cartesian2(2003772637e-2, 1247410417e-2);
    const rectangleSouthwestInMeters = this._projection.unproject(this._rectangleSouthwestInMeters);
    const rectangleNortheastInMeters = this._projection.unproject(this._rectangleNortheastInMeters);
    this._rectangle = new Rectangle(rectangleSouthwestInMeters.longitude, rectangleSouthwestInMeters.latitude, rectangleNortheastInMeters.longitude, rectangleNortheastInMeters.latitude);
    this.resolutions = [];
    for (let i = 0; i < 19; i++) {
      this.resolutions[i] = 256 * Math.pow(2, 18 - i);
    }
  }
  getNumberOfXTilesAtLevel(level) {
    return 1 << level;
  }
  getNumberOfYTilesAtLevel(level) {
    return 1 << level;
  }
  rectangleToNativeRectangle(rectangle, result) {
    const { defined, Rectangle } = Cesium;
    const projection = this._projection;
    const southwest = projection.project(Rectangle.southwest(rectangle));
    const northeast = projection.project(Rectangle.northeast(rectangle));
    if (!defined(result)) {
      return new Rectangle(southwest.x, southwest.y, northeast.x, northeast.y);
    }
    result.west = southwest.x;
    result.south = southwest.y;
    result.east = northeast.x;
    result.north = northeast.y;
    return result;
  }
  tileXYToNativeRectangle(x, y, level, result) {
    const { defined, Rectangle } = Cesium;
    const tileWidth = this.resolutions[level];
    const west = x * tileWidth;
    const east = (x + 1) * tileWidth;
    const north = ((y = -y) + 1) * tileWidth;
    const south = y * tileWidth;
    if (!defined(result)) {
      return new Rectangle(west, south, east, north);
    }
    result.west = west;
    result.south = south;
    result.east = east;
    result.north = north;
    return result;
  }
  tileXYToRectangle(x, y, level, result) {
    const { Cartesian2 } = Cesium;
    const nativeRectangle = this.tileXYToNativeRectangle(x, y, level, result);
    const projection = this._projection;
    const southwest = projection.unproject(new Cartesian2(nativeRectangle.west, nativeRectangle.south));
    const northeast = projection.unproject(new Cartesian2(nativeRectangle.east, nativeRectangle.north));
    nativeRectangle.west = southwest.longitude;
    nativeRectangle.south = southwest.latitude;
    nativeRectangle.east = northeast.longitude;
    nativeRectangle.north = northeast.latitude;
    return nativeRectangle;
  }
  positionToTileXY(position, level, result) {
    const { Rectangle, defined, Cartesian2 } = Cesium;
    const rectangle = this._rectangle;
    if (!Rectangle.contains(rectangle, position)) {
      return void 0;
    }
    const projection = this._projection;
    const webMercatorPosition = projection.project(position);
    if (!defined(webMercatorPosition)) {
      return void 0;
    }
    const tileWidth = this.resolutions[level];
    const xTileCoordinate = Math.floor(webMercatorPosition.x / tileWidth);
    const yTileCoordinate = -Math.floor(webMercatorPosition.y / tileWidth);
    if (!defined(result)) {
      return new Cartesian2(xTileCoordinate, yTileCoordinate);
    }
    result.x = xTileCoordinate;
    result.y = yTileCoordinate;
    return result;
  }
  get ellipsoid() {
    return this._ellipsoid;
  }
  get rectangle() {
    return this._rectangle;
  }
  get projection() {
    return this._projection;
  }
}

exports["default"] = BaiduMapMercatorTilingScheme;
//# sourceMappingURL=BaiduMapTilingScheme.js.map
