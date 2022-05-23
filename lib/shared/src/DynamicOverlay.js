'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cesiumHelpers = require('../../utils/cesium-helpers.js');

class DynamicOverlay {
  constructor(options) {
    const { SampledPositionProperty, Entity, ExtrapolationType, VelocityOrientationProperty } = Cesium;
    this._lastTime = void 0;
    this._sampledPosition = new SampledPositionProperty();
    this._sampledPosition.forwardExtrapolationType = options.forwardExtrapolationType || ExtrapolationType.HOLD;
    this._sampledPosition.backwardExtrapolationType = options.backwardExtrapolationType || ExtrapolationType.HOLD;
    this._cache = [];
    this._maxCacheSize = options.maxCacheSize || 10;
    const entity = new Entity(options);
    entity.position = this._sampledPosition;
    entity.orientation = new VelocityOrientationProperty(this._sampledPosition);
    this._entity = entity;
    this._velocityVectorProperty = new Cesium.VelocityVectorProperty(this._sampledPosition, false);
  }
  get id() {
    return this._entity.id;
  }
  set id(id) {
    this._entity.id = id;
  }
  set maxCacheSize(maxCacheSize) {
    this._maxCacheSize = maxCacheSize;
  }
  get maxCacheSize() {
    return this._maxCacheSize;
  }
  get position() {
    return this._sampledPosition.getValue(Cesium.JulianDate.now());
  }
  _removePosition() {
    if (this._cache.length > this._maxCacheSize) {
      const start = Cesium.JulianDate.addSeconds(this._cache[0], -0.2, new Cesium.JulianDate());
      const stop = Cesium.JulianDate.addSeconds(this._cache[this._cache.length - this._maxCacheSize], -0.2, new Cesium.JulianDate());
      this._sampledPosition.removeSamples(new Cesium.TimeInterval({
        start,
        stop
      }));
      this._cache.splice(0, this._cache.length - this._maxCacheSize);
    }
  }
  addPosition(position, timeOrInterval) {
    this._removePosition();
    let time;
    if (typeof timeOrInterval === "number") {
      const now = Cesium.JulianDate.now();
      time = Cesium.JulianDate.addSeconds(now, timeOrInterval, new Cesium.JulianDate());
      Cesium.destroyObject(now);
    } else {
      time = cesiumHelpers.makeJulianDate(timeOrInterval);
    }
    this._sampledPosition.addSample(time, cesiumHelpers.makeCartesian3(position));
    this._lastTime = time;
    this._cache.push(this._lastTime);
    return time;
  }
}

exports["default"] = DynamicOverlay;
//# sourceMappingURL=DynamicOverlay.js.map
