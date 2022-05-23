/**
 * A tiling scheme for geometry referenced to a BaiduMapMercatorProjection {@link https://cesium.com/docs/cesiumjs-ref-doc/WebMercatorTilingScheme.html}
 * {@link https://github.com/openlayers/openlayers/issues/3522#issuecomment-570493906}
 */
declare class BaiduMapMercatorTilingScheme {
    _ellipsoid: any;
    _projection: any;
    _rectangleSouthwestInMeters: any;
    _rectangleNortheastInMeters: any;
    _rectangle: any;
    resolutions: any[];
    constructor(options: any);
    getNumberOfXTilesAtLevel(level: any): number;
    getNumberOfYTilesAtLevel(level: any): number;
    rectangleToNativeRectangle(rectangle: any, result: any): any;
    tileXYToNativeRectangle(x: any, y: any, level: any, result: any): any;
    tileXYToRectangle(x: any, y: any, level: any, result: any): any;
    positionToTileXY(position: any, level: any, result: any): any;
    get ellipsoid(): any;
    get rectangle(): any;
    get projection(): any;
}
export default BaiduMapMercatorTilingScheme;
