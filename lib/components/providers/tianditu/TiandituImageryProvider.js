'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TiandituMapsStyle = require('./TiandituMapsStyle.js');

const TiandituMapsStyleUrl = {};
const TiandituMapsStyleLayer = {};
const TiandituMapsStyleID = {};
const TiandituMapsStyleFormat = {};
const TiandituMapsStyleEPSG = {};
const TiandituMapsStyleLabels = {};
class TiandituImageryProvider {
  constructor(options) {
    Object.keys(TiandituMapsStyle["default"]).forEach((key) => {
      TiandituMapsStyleUrl[TiandituMapsStyle["default"][key]] = options.protocol + "://{s}.tianditu.gov.cn/" + TiandituMapsStyle["default"][key] + "/wmts";
      TiandituMapsStyleLayer[TiandituMapsStyle["default"][key]] = TiandituMapsStyle["default"][key].slice(0, 3);
      TiandituMapsStyleID[TiandituMapsStyle["default"][key]] = TiandituMapsStyle["default"][key].slice(4);
      TiandituMapsStyleFormat[TiandituMapsStyle["default"][key]] = "tiles";
      if (TiandituMapsStyleID[TiandituMapsStyle["default"][key]] === "w") {
        TiandituMapsStyleEPSG[TiandituMapsStyle["default"][key]] = "900913";
      } else {
        TiandituMapsStyleEPSG[TiandituMapsStyle["default"][key]] = "4490";
      }
      switch (TiandituMapsStyle["default"][key]) {
        case "img_w":
        case "img_c":
        case "cia_w":
        case "cia_c":
        case "cta_w":
        case "cta_c":
          TiandituMapsStyleLabels[TiandituMapsStyle["default"][key]] = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18"
          ];
          break;
        case "vec_w":
        case "vec_c":
        case "cva_w":
        case "cva_c":
          TiandituMapsStyleLabels[TiandituMapsStyle["default"][key]] = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19"
          ];
          break;
        case "ter_w":
        case "ter_c":
          TiandituMapsStyleLabels[TiandituMapsStyle["default"][key]] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
          break;
        case "eia_w":
        case "eia_c":
        case "eva_w":
        case "eva_c":
        case "ibo_c":
        case "ibo_w":
          TiandituMapsStyleLabels[TiandituMapsStyle["default"][key]] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
          break;
      }
    });
    const { Credit, defaultValue, Event, GeographicTilingScheme, WebMercatorTilingScheme, when } = Cesium;
    options = defaultValue(options, {});
    this._mapStyle = defaultValue(options.mapStyle, TiandituMapsStyle["default"].IMG_W);
    this._url = options.url || defaultValue(options.url, TiandituMapsStyleUrl[this._mapStyle]);
    this._token = options.token;
    this._layer = defaultValue(options.layer, TiandituMapsStyleLayer[this._mapStyle]);
    this._style = defaultValue(options.style, "default");
    this._tileMatrixSetID = defaultValue(options.tileMatrixSetID, TiandituMapsStyleID[this._mapStyle]);
    this._tileMatrixLabels = defaultValue(options.tileMatrixLabels, TiandituMapsStyleLabels[this._mapStyle]);
    this._format = defaultValue(options.format, TiandituMapsStyleFormat[this._mapStyle]);
    this._epsgCode = TiandituMapsStyleEPSG[this._mapStyle];
    this._tilingScheme = this._epsgCode === "900913" ? new WebMercatorTilingScheme() : new GeographicTilingScheme();
    this._tileWidth = defaultValue(options.tileWidth, 256);
    this._tileHeight = defaultValue(options.tileHeight, 256);
    this._minimumLevel = defaultValue(options.minimumLevel, 0);
    this._maximumLevel = defaultValue(options.maximumLevel, TiandituMapsStyleLabels[this._mapStyle].length);
    this._rectangle = defaultValue(options.rectangle, this.tilingScheme.rectangle);
    this._readyPromise = Promise.resolve(true);
    this._errorEvent = new Event();
    const credit = defaultValue(options.credit, "\u5929\u5730\u56FE\u5168\u7403\u5F71\u50CF\u670D\u52A1");
    this._credit = typeof credit === "string" ? new Credit(credit) : credit;
    this._subdomains = defaultValue(options.subdomains, ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]);
    this._tileDiscardPolicy = options.tileDiscardPolicy;
  }
  requestImage(x, y, level) {
    const url = buildImageResource.call(this, x, y, level);
    return Cesium.ImageryProvider.loadImage(this, url);
  }
  pickFeatures(x, y, level, longitude, latitude) {
    return void 0;
  }
  get url() {
    return this._url;
  }
  get mapStyle() {
    return this._mapStyle;
  }
  get tileWidth() {
    return this._tileWidth;
  }
  get tileHeight() {
    return this._tileHeight;
  }
  get maximumLevel() {
    return this._maximumLevel;
  }
  get minimumLevel() {
    return this._minimumLevel;
  }
  get tilingScheme() {
    return this._tilingScheme;
  }
  get rectangle() {
    return this._rectangle;
  }
  get errorEvent() {
    return this._errorEvent;
  }
  get ready() {
    return true;
  }
  get readyPromise() {
    return this._readyPromise;
  }
  get credit() {
    return this._credit;
  }
  get hasAlphaChannel() {
    return true;
  }
  get tileDiscardPolicy() {
    return this._tileDiscardPolicy;
  }
}
function buildImageResource(x, y, level) {
  var _a;
  const { combine, defined, defaultValue, queryToObject, objectToQuery, Uri } = Cesium;
  const freezeObject = Object.freeze;
  const options = freezeObject({
    service: "WMTS",
    version: "1.0.0",
    request: "GetTile"
  });
  this._epsgCode === "900913" && (level -= 1);
  const tileMatrixLabels = this._tileMatrixLabels;
  const tileMatrixLabel = defined(tileMatrixLabels) ? tileMatrixLabels[level] : level.toString();
  const subdomains = this._subdomains;
  let url = this._url.replace("{s}", subdomains[(x + y + level) % subdomains.length]);
  const uri = new Uri(url);
  let obj = queryToObject(defaultValue((_a = uri.query) == null ? void 0 : _a.call(uri), ""));
  obj = combine(options, obj);
  obj.tilematrix = tileMatrixLabel;
  obj.layer = this._layer;
  obj.style = this._style;
  obj.tilerow = y;
  obj.tilecol = x;
  obj.tilematrixset = this._tileMatrixSetID;
  obj.format = this._format;
  const query = objectToQuery(obj);
  url = uri.toString() + "?" + query;
  defined(this._proxy) && (url = this._proxy.getURL(url));
  defined(this._token) && (url += "&tk=" + this._token);
  return url;
}

exports["default"] = TiandituImageryProvider;
//# sourceMappingURL=TiandituImageryProvider.js.map
