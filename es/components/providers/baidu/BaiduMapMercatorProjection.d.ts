import Point from './Point';
import Pixel from './Pixel';
/**
 * Projection used by [Baidu Map]{@link https://github.com/openlayers/openlayers/issues/3522}
 */
declare class BaiduMapMercatorProjection {
    static EARTHRADIUS: number;
    static MCBAND: number[];
    static LLBAND: number[];
    static MC2LL: number[][];
    static LL2MC: number[][];
    /**
     * 根据平面直角坐标计算两点间距离;
     * @param {Point} point1 平面直角点坐标1
     * @param {Point} point2 平面直角点坐标2;
     * @return {Number} 返回两点间的距离
     */
    static getDistanceByMC: (point1: any, point2: any) => number;
    /**
     * 根据经纬度坐标计算两点间距离;
     * @param {Point} point1 经纬度点坐标1
     * @param {Point} point2 经纬度点坐标2;
     * @return {Number} 返回两点间的距离
     */
    static getDistanceByLL: (point1: any, point2: any) => number;
    /**
     * 平面直角坐标转换成经纬度坐标;
     * @param {Point} point 平面直角坐标
     * @return {Point} 返回经纬度坐标
     */
    static convertMC2LL: (point: any) => Point;
    /**
     * 经纬度坐标转换成平面直角坐标;
     * @param {Point} point 经纬度坐标
     * @return {Point} 返回平面直角坐标
     */
    static convertLL2MC: (point: any) => Point;
    static convertor: (fromPoint: any, factor: any) => Point;
    static getDistance: (x1: any, x2: any, y1: any, y2: any) => number;
    static toRadians: (angdeg: any) => number;
    static toDegrees: (angrad: any) => number;
    static getRange: (v: any, a: any, b: any) => any;
    static getLoop: (v: any, a: any, b: any) => any;
    /**
     * 经纬度变换至墨卡托坐标
     * @param Point 经纬度
     * @return Point 墨卡托
     */
    lngLatToMercator(point: any, curCity?: any): Point;
    /**
     * 球面到平面坐标
     * @param Point 球面坐标
     * @return Pixel 平面坐标
     */
    lngLatToPoint(point: Point): Pixel;
    /**
     * 墨卡托变换至经纬度
     * @param Point 墨卡托
     * @returns Point 经纬度
     */
    mercatorToLngLat(point: any, curCity?: any): Point;
    /**
     * 平面到球面坐标
     * @param Pixel 平面坐标
     * @returns Point 球面坐标
     */
    pointToLngLat(point: any): Point;
    /**
     * 地理坐标转换至像素坐标
     * @param Point 地理坐标
     * @param Number 级别
     * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
     * @param Size 地图容器大小
     * @return Pixel 像素坐标
     */
    pointToPixel(point: any, zoom: any, mapCenter: any, mapSize: any, curCity: any): Pixel;
    /**
     * 像素坐标转换至地理坐标
     * @param Pixel 像素坐标
     * @param Number 级别
     * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
     * @param Size 地图容器大小
     * @return Point 地理坐标
     */
    pixelToPoint(pixel: any, zoom: any, mapCenter: any, mapSize: any, curCity: any): Point;
    getZoomUnits(zoom: any): number;
}
export default BaiduMapMercatorProjection;
