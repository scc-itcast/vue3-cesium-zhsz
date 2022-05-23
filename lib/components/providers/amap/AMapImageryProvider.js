'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defer = require('../../../utils/defer.js');

class AMapImageryProvider {
  constructor(options) {
    const { Resource, defaultValue, Credit, Event } = Cesium;
    this._url = options.url;
    const resource = Resource.createIfNeeded(this._url);
    resource.appendForwardSlash();
    this._ready = false;
    this._resource = resource;
    this._tileDiscardPolicy = options.tileDiscardPolicy;
    this._tileWidth = 256;
    this._tileHeight = 256;
    this._minimumLevel = options.maximumLevel || 0;
    this._maximumLevel = options.maximumLevel || 20;
    this._tilingScheme = options.tilingScheme || new Cesium.WebMercatorTilingScheme();
    this._rectangle = options.rectangle || this._tilingScheme.rectangle;
    let credit = options.credit;
    if (typeof credit === "string") {
      credit = new Credit(credit);
    }
    this._credit = credit;
    this.enablePickFeatures = defaultValue(options.enablePickFeatures, false);
    this._hasAlphaChannel = defaultValue(options.hasAlphaChannel, true);
    this._errorEvent = new Event();
    this._readyPromise = defer["default"]();
    this._ready = true;
    this._readyPromise.resolve(true);
    this._subdomains = options.subdomains || ["01", "02", "03", "04"];
    this._domain = options.domain || "webst";
    this._style = options.mapStyle || "6";
    this._lang = options.lang || "zh_cn";
    this._scl = options.scl || "1";
    this._ltype = options.ltype || "0";
  }
  get url() {
    return this._resource._url;
  }
  get proxy() {
    return this._resource.proxy;
  }
  get tileWidth() {
    if (!this._ready) {
      throw new Cesium.DeveloperError("tileWidth must not be called before the imagery provider is ready.");
    }
    return this._tileWidth;
  }
  get tileHeight() {
    if (!this._ready) {
      throw new Cesium.DeveloperError("tileHeight must not be called before the imagery provider is ready.");
    }
    return this._tileHeight;
  }
  get maximumLevel() {
    if (!this._ready) {
      throw new Cesium.DeveloperError("maximumLevel must not be called before the imagery provider is ready.");
    }
    return this._maximumLevel;
  }
  get minimumLevel() {
    if (!this.ready) {
      throw new Cesium.DeveloperError("minimumLevel must not be called before the imagery provider is ready.");
    }
    return this._minimumLevel;
  }
  get tilingScheme() {
    if (!this._ready) {
      throw new Cesium.DeveloperError("tilingScheme must not be called before the imagery provider is ready.");
    }
    return this._tilingScheme;
  }
  get rectangle() {
    if (!this.ready) {
      throw new Cesium.DeveloperError("rectangle must not be called before the imagery provider is ready.");
    }
    return this._rectangle;
  }
  get tileDiscardPolicy() {
    if (!this.ready) {
      throw new Cesium.DeveloperError("tileDiscardPolicy must not be called before the imagery provider is ready.");
    }
    return this._tileDiscardPolicy;
  }
  get errorEvent() {
    return this._errorEvent;
  }
  get ready() {
    return this._ready;
  }
  get readyPromise() {
    return this._readyPromise.promise;
  }
  get credit() {
    if (!this.ready) {
      throw new Cesium.DeveloperError("credit must not be called before the imagery provider is ready.");
    }
    return this._credit;
  }
  get hasAlphaChannel() {
    if (!this.ready) {
      throw new Cesium.DeveloperError("hasAlphaChannel must not be called before the imagery provider is ready.");
    }
    return this._hasAlphaChannel;
  }
  getTileCredits(x, y, level) {
    if (!this.ready) {
      throw new Cesium.DeveloperError("getTileCredits must not be called before the imagery provider is ready.");
    }
    return void 0;
  }
  requestImage(x, y, level, request) {
    if (!this.ready) {
      throw new Cesium.DeveloperError("requestImage must not be called before the imagery provider is ready.");
    }
    return Cesium.ImageryProvider.loadImage(this, buildImageResource.call(this, x, y, level, request));
  }
  pickFeatures(x, y, level, longitude, latitude) {
    return void 0;
  }
}
function buildImageResource(x, y, level, request) {
  let url = this._url;
  const subdomains = this._subdomains;
  url = url.replace("{domain}", this._domain).replace("{s}", subdomains[(x + y + level) % subdomains.length]).replace("{lang}", this._lang).replace("{style}", this._style).replace("{scl}", this._scl).replace("{ltype}", this._ltype).replace("{x}", x).replace("{y}", y).replace("{z}", level);
  const resource = this._resource.getDerivedResource({
    url,
    request
  });
  return resource;
}

exports["default"] = AMapImageryProvider;
//# sourceMappingURL=AMapImageryProvider.js.map
