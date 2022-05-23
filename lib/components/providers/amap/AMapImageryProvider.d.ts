declare class AMapImageryProvider {
    _url: string;
    _ready: boolean;
    _resource: any;
    _tileDiscardPolicy: any;
    _tileWidth: number;
    _tileHeight: number;
    _minimumLevel: any;
    _maximumLevel: any;
    _tilingScheme: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    _rectangle: any;
    _credit: any;
    enablePickFeatures: any;
    _hasAlphaChannel: any;
    _subdomains: any;
    _errorEvent: any;
    _readyPromise: any;
    _style: string;
    _domain: any;
    _lang: any;
    _scl: any;
    _ltype: any;
    constructor(options: any);
    get url(): any;
    get proxy(): any;
    get tileWidth(): number;
    get tileHeight(): number;
    get maximumLevel(): any;
    get minimumLevel(): any;
    get tilingScheme(): Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    get rectangle(): any;
    get tileDiscardPolicy(): any;
    get errorEvent(): any;
    get ready(): boolean;
    get readyPromise(): any;
    get credit(): any;
    get hasAlphaChannel(): any;
    getTileCredits(x: any, y: any, level: any): any;
    requestImage(x: any, y: any, level: any, request: any): Promise<HTMLImageElement | HTMLCanvasElement>;
    pickFeatures(x: any, y: any, level: any, longitude: any, latitude: any): any;
}
export default AMapImageryProvider;
