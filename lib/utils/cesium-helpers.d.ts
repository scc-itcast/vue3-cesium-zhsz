import type { AnyFunction, Cartesian4Option, VcComponentInternalInstance, TranslationRotationScaleOption, VcCamera, HeadingPitchRollOption, CesiumAppearance, VcPosition, CesiumPosition, VcRectangle, CesiumRectangle, VcColor, CesiumColor, VcAppearance, CesiumDistanceDisplayCondition, VcDistanceDisplayCondition, VcCartesian2, CesiumCartesian2, CesiumCartesian3Array, VcCartesian3Array, VcCartesian2Array, CesiumCartesian2Array, CesiumNearFarScalar, VcNearFarScalar, VcPolygonHierarchy, CesiumPolygonHierarchy, VcMaterial, VcMaterialProperty, CesiumMaterialProperty, CesiumMaterial, VcBoundingRectangle, CesiumBoundingRectangle, VcHeadingPitchRoll, VcHeadingPitchRange, VcPlane, CesiumPlane } from './types';
/**
 * 将对象或数组转换为 Cesium.Cartesian2
 * @param {Object} val
 * @returns {Cartesian2 | CallbackProperty} 返回 Cartesian2 或者 CallbackProperty
 * @example
 * const options = [100, 100]
 * // const options = [x: 100, y: 100]
 * const position = makeCartesian2(options)
 */
export declare function makeCartesian2(val: VcCartesian2, isConstant?: boolean): CesiumCartesian2 | undefined;
/**
 * 将对象或者数组转换为 Cesium.Cartesian3
 * @param {Object} val 传入的对象或数组
 * @param {Boolean} isConstant 传入function时生效，true 代表回调 function 每时每刻都返回值， false 代表改变才会返回值。默认false。
 * @returns 返回 Cartesian3 或者 CallbackProperty
 * @example
 * const options = {
 *  lng: 108,
 *  lat: 35,
 *  height: 1000
 * }
 * // const options = [108, 35, 1000]
 * const position = makeCartesian3 (options) // return Cesium.Cartesian3
 */
export declare function makeCartesian3(val: VcPosition, ellipsoid?: Cesium.Ellipsoid, isConstant?: boolean): CesiumPosition | undefined;
/**
 * 将数组 [lng, lat, height, ……，lng, lat, height] 转换为 Cesium.Cartesian3 数组
 * @param {Array} val
 * @returns {Array<Cartesian3>}
 */
export declare function makeCartesian3Array(vals: VcCartesian3Array, ellipsoid?: Cesium.Ellipsoid, isConstant?: boolean): CesiumCartesian3Array | undefined;
/**
 * 将形如 [lng, lat, ……，lng, lat] 数组转换为 Cesium.Cartesian2 数组
 * @param {Array} vals
 * @returns {Array<Cartesian2>}
 */
export declare function makeCartesian2Array(vals: VcCartesian2Array, isConstant: any): CesiumCartesian2Array | undefined;
/**
 * 将对象或数组 转换为 Cesium.Quaternion
 * @param {Object} val
 * @example
 * const options = {x: 0, y: 0, z: 0, w: 0}
 * // const options = [0, 0, 0, 0]
 * const orientation = makeQuaternion(options) // returns Cesium.Quaternion
 */
export declare function makeQuaternion(val: Cesium.CallbackProperty | Cesium.Quaternion | Cartesian4Option | Array<number> | AnyFunction<any>, isConstant?: boolean): Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty | undefined;
/**
 * 普通数组或对象转 Cesium.PolygonHierarchy 对象。
 * @param {Object|Array} val
 */
export declare function makePolygonHierarchy(val: VcPolygonHierarchy, ellipsoid?: Cesium.Ellipsoid, isConstant?: boolean): CesiumPolygonHierarchy | undefined;
/**
 * 对象或数组转 Cesium.NearFarScalar。
 * @param {Object} val
 * @returns {NearFarScalar}
 * @example
 * const options = {near: 1000, nearValue: 1.0, far: 10000, farValue: 0.5}
 * // const options = [1000, 1.0, 10000, 1.5]
 * const nearFarScalar = makeNearFarScalar(options)
 */
export declare function makeNearFarScalar(val: VcNearFarScalar, isConstant?: boolean): CesiumNearFarScalar | undefined;
/**
 * 对象或数组转 Cesium.DistanceDisplayCondition。
 * @param {Object} val
 * @returns {DistanceDisplayCondition}
 * @example
 * const options = [0, 1000]
 * // const options = {near: 0, far: 1000}
 * const distanceDisplayCondition = makeDistanceDisplayCondition(options) // return Cesium.DistanceDisplayCondition
 */
export declare function makeDistanceDisplayCondition(val: VcDistanceDisplayCondition, isConstant?: boolean): CesiumDistanceDisplayCondition | undefined;
/**
 * 普通对象、数组或字符串转 Cesium.Color。
 * @param {String|Array|Object|Function} val
 * @returns {Color}
 * @example
 * const options = 'red'
 * // const options = [1, 0, 0, 1.0] // r g b a
 * // const options = {red: 255, green: 0, bule: 0, alpha: 255}
 * const color = makeColor(options) // return Cesium.Color
 */
export declare function makeColor(val: VcColor, isConstant?: boolean): CesiumColor | undefined;
export declare function makeColors(vals: VcColor[]): Cesium.Color[];
/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 MaterialProperty
 * @param {String|Array|Object} val
 */
export declare function makeMaterialProperty(val: VcMaterialProperty, isConstant?: boolean): CesiumMaterialProperty;
/**
 * 转 Material
 * @param {String|Array|Object} val
 */
export declare function makeMaterial(this: any, val: VcMaterial): CesiumMaterial;
export declare function makeAppearance(this: VcComponentInternalInstance, val: VcAppearance): CesiumAppearance | undefined;
/**
 * 将对象 {west: number, south: number, east: number, north: number} 或者[west, south, east, north]数组 转 Cesium.Rectangle 对象。
 * @param {Object} val
 * @returns {Rectangle}
 */
export declare function makeRectangle(val: VcRectangle, isConstant?: boolean): CesiumRectangle | Cesium.RectangleGraphics | undefined;
/**
 * 对象或数组转 Cesium.BoundingRectangle。
 * @param {Object} val
 * @returns {Cesium.BoundingRectangle}
 * @example
 * const options = [0, 0, 100, 100]
 * // const options = {x: 0, y: 0, width: 100, height: 100}
 * const boundingRectangle = makeBoundingRectangle(options)
 */
export declare function makeBoundingRectangle(val: VcBoundingRectangle, isConstant?: boolean): CesiumBoundingRectangle | undefined;
/**
 * 普通对象 {normal: number, distance: number} 转 Cesium.Plane 对象。
 * @param {Object} val
 * @returns {Plane}
 */
export declare function makePlane(val: VcPlane, isConstant?: boolean): CesiumPlane;
/**
 * 普通对象转平移、旋转、缩放变换对象。
 * @param {*} val
 */
export declare function makeTranslationRotationScale(val: Cesium.TranslationRotationScale | Cesium.CallbackProperty | TranslationRotationScaleOption | AnyFunction<any> | Array<any>, isConstant?: boolean): Cesium.CallbackProperty | TranslationRotationScaleOption;
export declare function makeOptions(this: any, val: any): any;
export declare function captureScreenshot(viewer: Cesium.Viewer): Promise<string>;
export declare function makeCameraOptions(camera: VcCamera, ellipsoid?: Cesium.Ellipsoid): {
    destination: Cesium.Cartesian3 | Cesium.Rectangle;
    orientation: HeadingPitchRollOption;
};
export declare function setViewerCamera(viewer: Cesium.Viewer, camera: VcCamera): void;
export declare function flyToCamera(viewer: Cesium.Viewer, camera: VcCamera, options?: any): void;
export declare function getGeodesicDistance(start: Cesium.Cartesian3, end: Cesium.Cartesian3, ellipsoid: Cesium.Ellipsoid): number;
export declare function getHeadingPitchRoll(start: Cesium.Cartesian3, end: Cesium.Cartesian3, scene: Cesium.Scene, result?: Array<number>): number[];
export declare function getPolylineSegmentEndpoint(start: Cesium.Cartesian3, heading: number, distance: number, ellipsoid: Cesium.Ellipsoid): Cesium.Cartesian3;
export declare function calculateAreaByPostions(positions: Array<Cesium.Cartesian3>): number;
export declare function setViewerCursor(viewer: Cesium.Viewer, cursor: string): void;
export declare function restoreViewerCursor(viewer: Cesium.Viewer, count?: number): void;
export declare function makeJulianDate(val: string | Date | Cesium.JulianDate): Cesium.JulianDate;
export declare function makeHeadingPitchRoll(val: VcHeadingPitchRoll): Cesium.HeadingPitchRoll;
export declare function makeHeadingPitchRang(val: VcHeadingPitchRange): Cesium.HeadingPitchRange;
export declare function getPolylineSegmentHeading(start: Cesium.Cartesian3, end: Cesium.Cartesian3): number;
export declare function getPolylineSegmentPitch(start: Cesium.Cartesian3, end: Cesium.Cartesian3): number;
export declare function getFirstIntersection(start: Cesium.Cartesian3, end: Cesium.Cartesian3, viewer: Cesium.Viewer, objectsToExclude?: any[]): Cesium.Cartesian3;
export declare function heightToLevel(altitude: number): number;
