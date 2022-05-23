'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const tiledcacheImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.format,
  ...cesiumProps.credit,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  dir: {
    type: String,
    reqiured: true
  },
  scales: {
    type: Array,
    default: () => {
      return [
        1 / 295829355,
        1 / 147914678,
        1 / 73957339,
        1 / 36978669,
        1 / 18489335,
        1 / 9244667,
        1 / 4622334,
        1 / 2311167,
        1 / 1155583,
        1 / 577792,
        1 / 288896,
        1 / 144448,
        1 / 72224,
        1 / 36112,
        1 / 18056,
        1 / 9026,
        1 / 4514
      ];
    }
  }
};
var ImageryProviderTiledcache = vue.defineComponent({
  name: "VcImageryProviderTiledcache",
  props: tiledcacheImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "UrlTemplateImageryProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      const options = providersState.transformProps(props);
      const { Credit, defined, defaultValue, DeveloperError, Ellipsoid, GeographicTilingScheme, Rectangle, Resource, UrlTemplateImageryProvider } = Cesium;
      const { url: url2, dir, format: format2 } = options;
      if (!defined(url2)) {
        throw new DeveloperError("options.url is required.");
      }
      if (!defined(dir)) {
        throw new DeveloperError("options.dir is required.");
      }
      const resource = Resource.createIfNeeded(url2);
      resource.url += `?dir=${dir}&scale={scale}&col={x}&row={y}&format=${format2}`;
      const tilingScheme2 = defaultValue(options.tilingScheme, new GeographicTilingScheme({
        ellipsoid: defaultValue(options.ellipsoid, Ellipsoid.WGS84),
        numberOfLevelZeroTilesX: 2,
        numberOfLevelZeroTilesY: 1
      }));
      const tileWidth2 = defaultValue(options.tileWidth, 256);
      const tileHeight2 = defaultValue(options.tileHeight, 256);
      const maximumLevel2 = options.maximumLevel;
      const minimumLevel2 = defaultValue(options.minimumLevel, 0);
      const rectangle2 = defaultValue(options.rectangle, tilingScheme2.rectangle);
      const swTile = tilingScheme2.positionToTileXY(Rectangle.southwest(rectangle2), minimumLevel2);
      const neTile = tilingScheme2.positionToTileXY(Rectangle.northeast(rectangle2), minimumLevel2);
      const tileCount = (Math.abs(neTile.x - swTile.x) + 1) * (Math.abs(neTile.y - swTile.y) + 1);
      if (tileCount > 4) {
        throw new DeveloperError("The rectangle and minimumLevel indicate that there are " + tileCount + " tiles at the minimum level. Imagery providers with more than four tiles at the minimum level are not supported.");
      }
      let credit2 = defaultValue(options.credit, "");
      if (typeof credit2 === "string") {
        credit2 = new Credit(credit2);
      }
      return new UrlTemplateImageryProvider({
        url: resource,
        credit: credit2,
        tilingScheme: tilingScheme2,
        tileWidth: tileWidth2,
        tileHeight: tileHeight2,
        minimumLevel: minimumLevel2,
        maximumLevel: maximumLevel2,
        rectangle: rectangle2,
        customTags: {
          scale: (imageryProvider, x, y, level) => {
            const s = 1 / props.scales[level];
            return padWithZerosIfNecessary(imageryProvider, "{scale}", s);
          }
        }
      });
    };
    const padWithZerosIfNecessary = (imageryProvider, key, value) => {
      if (imageryProvider && imageryProvider.urlSchemeZeroPadding && Object.prototype.hasOwnProperty.call(imageryProvider.urlSchemeZeroPadding, key)) {
        const paddingTemplate = imageryProvider.urlSchemeZeroPadding[key];
        if (typeof paddingTemplate === "string") {
          const paddingTemplateWidth = paddingTemplate.length;
          if (paddingTemplateWidth > 1) {
            value = value.length >= paddingTemplateWidth ? value : new Array(paddingTemplateWidth - value.toString().length + 1).join("0") + value;
          }
        }
      }
      return value;
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderTiledcache;
exports.tiledcacheImageryProviderProps = tiledcacheImageryProviderProps;
//# sourceMappingURL=index.js.map
