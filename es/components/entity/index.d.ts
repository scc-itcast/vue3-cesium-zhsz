import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _Entity: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: import("vue").PropType<Cesium.Entity>;
    billboard: import("vue").PropType<Cesium.BillboardGraphics | import("..").VcGraphicsBillboardProps>;
    box: import("vue").PropType<Cesium.BoxGraphics | import("..").VcGraphicsBoxProps>;
    corridor: import("vue").PropType<Cesium.CorridorGraphics | import("..").VcGraphicsCorridorProps>;
    cylinder: import("vue").PropType<Cesium.CylinderGraphics | import("..").VcGraphicsCylinderProps>;
    ellipse: import("vue").PropType<Cesium.EllipseGraphics | import("..").VcGraphicsEllipseProps>;
    ellipsoid: import("vue").PropType<Cesium.EllipsoidGraphics | import("..").VcGraphicsEllipsoidRef>;
    label: import("vue").PropType<Cesium.LabelGraphics | import("..").VcGraphicsLabelProps>;
    model: import("vue").PropType<Cesium.ModelGraphics | import("..").VcGraphicsModelProps>;
    tileset: import("vue").PropType<Cesium.Cesium3DTilesetGraphics | import("..").VcGraphicsTilesetProps>;
    path: import("vue").PropType<Cesium.PathGraphics | import("..").VcGraphicsPathProps>;
    plane: import("vue").PropType<Cesium.PlaneGraphics | import("..").VcGraphicsPlaneProps>;
    point: import("vue").PropType<Cesium.PointGraphics | import("..").VcGraphicsPointProps>;
    polygon: import("vue").PropType<Cesium.PolygonGraphics | import("..").VcGraphicsPolygonProps>;
    polyline: import("vue").PropType<Cesium.PolylineGraphics | import("..").VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: import("vue").PropType<Cesium.PolylineVolumeGraphics | import("..").VcGraphicsPolylineVolumeProps>;
    rectangle: import("vue").PropType<Cesium.RectangleGraphics | import("..").VcGraphicsRectangleProps>;
    wall: import("vue").PropType<Cesium.WallGraphics | import("..").VcGraphicsWallProps>;
    viewFrom: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: import("vue").PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: import("vue").PropType<Cesium.TimeIntervalCollection>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    'update:billboard': (payload: Cesium.BillboardGraphics) => boolean;
    'update:box': (payload: Cesium.BoxGraphics) => boolean;
    'update:corridor': (payload: Cesium.CorridorGraphics) => boolean;
    'update:cylinder': (payload: Cesium.CylinderGraphics) => boolean;
    'update:ellipse': (payload: Cesium.EllipseGraphics) => boolean;
    'update:ellipsoid': (payload: Cesium.EllipsoidGraphics) => boolean;
    'update:label': (payload: Cesium.LabelGraphics) => boolean;
    'update:model': (payload: Cesium.ModelGraphics) => boolean;
    'update:path': (payload: Cesium.PathGraphics) => boolean;
    'update:plane': (payload: Cesium.PlaneGraphics) => boolean;
    'update:point': (payload: Cesium.PointGraphics) => boolean;
    'update:polygon': (payload: Cesium.PolygonGraphics) => boolean;
    'update:polyline': (payload: Cesium.PolylineGraphics) => boolean;
    'update:polylineVolume': (payload: Cesium.PolylineVolumeGraphics) => boolean;
    'update:rectangle': (payload: Cesium.RectangleGraphics) => boolean;
    'update:tileset': (payload: any) => boolean;
    'update:wall': (payload: Cesium.WallGraphics) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: import("vue").PropType<Cesium.Entity>;
    billboard: import("vue").PropType<Cesium.BillboardGraphics | import("..").VcGraphicsBillboardProps>;
    box: import("vue").PropType<Cesium.BoxGraphics | import("..").VcGraphicsBoxProps>;
    corridor: import("vue").PropType<Cesium.CorridorGraphics | import("..").VcGraphicsCorridorProps>;
    cylinder: import("vue").PropType<Cesium.CylinderGraphics | import("..").VcGraphicsCylinderProps>;
    ellipse: import("vue").PropType<Cesium.EllipseGraphics | import("..").VcGraphicsEllipseProps>;
    ellipsoid: import("vue").PropType<Cesium.EllipsoidGraphics | import("..").VcGraphicsEllipsoidRef>;
    label: import("vue").PropType<Cesium.LabelGraphics | import("..").VcGraphicsLabelProps>;
    model: import("vue").PropType<Cesium.ModelGraphics | import("..").VcGraphicsModelProps>;
    tileset: import("vue").PropType<Cesium.Cesium3DTilesetGraphics | import("..").VcGraphicsTilesetProps>;
    path: import("vue").PropType<Cesium.PathGraphics | import("..").VcGraphicsPathProps>;
    plane: import("vue").PropType<Cesium.PlaneGraphics | import("..").VcGraphicsPlaneProps>;
    point: import("vue").PropType<Cesium.PointGraphics | import("..").VcGraphicsPointProps>;
    polygon: import("vue").PropType<Cesium.PolygonGraphics | import("..").VcGraphicsPolygonProps>;
    polyline: import("vue").PropType<Cesium.PolylineGraphics | import("..").VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: import("vue").PropType<Cesium.PolylineVolumeGraphics | import("..").VcGraphicsPolylineVolumeProps>;
    rectangle: import("vue").PropType<Cesium.RectangleGraphics | import("..").VcGraphicsRectangleProps>;
    wall: import("vue").PropType<Cesium.WallGraphics | import("..").VcGraphicsWallProps>;
    viewFrom: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: import("vue").PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: import("vue").PropType<Cesium.TimeIntervalCollection>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDefinitionChanged?: (property: Cesium.Property) => any;
    "onUpdate:billboard"?: (payload: Cesium.BillboardGraphics) => any;
    "onUpdate:box"?: (payload: Cesium.BoxGraphics) => any;
    "onUpdate:corridor"?: (payload: Cesium.CorridorGraphics) => any;
    "onUpdate:cylinder"?: (payload: Cesium.CylinderGraphics) => any;
    "onUpdate:ellipse"?: (payload: Cesium.EllipseGraphics) => any;
    "onUpdate:ellipsoid"?: (payload: Cesium.EllipsoidGraphics) => any;
    "onUpdate:label"?: (payload: Cesium.LabelGraphics) => any;
    "onUpdate:model"?: (payload: Cesium.ModelGraphics) => any;
    "onUpdate:path"?: (payload: Cesium.PathGraphics) => any;
    "onUpdate:plane"?: (payload: Cesium.PlaneGraphics) => any;
    "onUpdate:point"?: (payload: Cesium.PointGraphics) => any;
    "onUpdate:polygon"?: (payload: Cesium.PolygonGraphics) => any;
    "onUpdate:polyline"?: (payload: Cesium.PolylineGraphics) => any;
    "onUpdate:polylineVolume"?: (payload: Cesium.PolylineVolumeGraphics) => any;
    "onUpdate:rectangle"?: (payload: Cesium.RectangleGraphics) => any;
    "onUpdate:tileset"?: (payload: any) => any;
    "onUpdate:wall"?: (payload: Cesium.WallGraphics) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
}>>;
export default _Entity;
export declare const VcEntity: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: import("vue").PropType<Cesium.Entity>;
    billboard: import("vue").PropType<Cesium.BillboardGraphics | import("..").VcGraphicsBillboardProps>;
    box: import("vue").PropType<Cesium.BoxGraphics | import("..").VcGraphicsBoxProps>;
    corridor: import("vue").PropType<Cesium.CorridorGraphics | import("..").VcGraphicsCorridorProps>;
    cylinder: import("vue").PropType<Cesium.CylinderGraphics | import("..").VcGraphicsCylinderProps>;
    ellipse: import("vue").PropType<Cesium.EllipseGraphics | import("..").VcGraphicsEllipseProps>;
    ellipsoid: import("vue").PropType<Cesium.EllipsoidGraphics | import("..").VcGraphicsEllipsoidRef>;
    label: import("vue").PropType<Cesium.LabelGraphics | import("..").VcGraphicsLabelProps>;
    model: import("vue").PropType<Cesium.ModelGraphics | import("..").VcGraphicsModelProps>;
    tileset: import("vue").PropType<Cesium.Cesium3DTilesetGraphics | import("..").VcGraphicsTilesetProps>;
    path: import("vue").PropType<Cesium.PathGraphics | import("..").VcGraphicsPathProps>;
    plane: import("vue").PropType<Cesium.PlaneGraphics | import("..").VcGraphicsPlaneProps>;
    point: import("vue").PropType<Cesium.PointGraphics | import("..").VcGraphicsPointProps>;
    polygon: import("vue").PropType<Cesium.PolygonGraphics | import("..").VcGraphicsPolygonProps>;
    polyline: import("vue").PropType<Cesium.PolylineGraphics | import("..").VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: import("vue").PropType<Cesium.PolylineVolumeGraphics | import("..").VcGraphicsPolylineVolumeProps>;
    rectangle: import("vue").PropType<Cesium.RectangleGraphics | import("..").VcGraphicsRectangleProps>;
    wall: import("vue").PropType<Cesium.WallGraphics | import("..").VcGraphicsWallProps>;
    viewFrom: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: import("vue").PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: import("vue").PropType<Cesium.TimeIntervalCollection>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    'update:billboard': (payload: Cesium.BillboardGraphics) => boolean;
    'update:box': (payload: Cesium.BoxGraphics) => boolean;
    'update:corridor': (payload: Cesium.CorridorGraphics) => boolean;
    'update:cylinder': (payload: Cesium.CylinderGraphics) => boolean;
    'update:ellipse': (payload: Cesium.EllipseGraphics) => boolean;
    'update:ellipsoid': (payload: Cesium.EllipsoidGraphics) => boolean;
    'update:label': (payload: Cesium.LabelGraphics) => boolean;
    'update:model': (payload: Cesium.ModelGraphics) => boolean;
    'update:path': (payload: Cesium.PathGraphics) => boolean;
    'update:plane': (payload: Cesium.PlaneGraphics) => boolean;
    'update:point': (payload: Cesium.PointGraphics) => boolean;
    'update:polygon': (payload: Cesium.PolygonGraphics) => boolean;
    'update:polyline': (payload: Cesium.PolylineGraphics) => boolean;
    'update:polylineVolume': (payload: Cesium.PolylineVolumeGraphics) => boolean;
    'update:rectangle': (payload: Cesium.RectangleGraphics) => boolean;
    'update:tileset': (payload: any) => boolean;
    'update:wall': (payload: Cesium.WallGraphics) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: import("vue").PropType<Cesium.Entity>;
    billboard: import("vue").PropType<Cesium.BillboardGraphics | import("..").VcGraphicsBillboardProps>;
    box: import("vue").PropType<Cesium.BoxGraphics | import("..").VcGraphicsBoxProps>;
    corridor: import("vue").PropType<Cesium.CorridorGraphics | import("..").VcGraphicsCorridorProps>;
    cylinder: import("vue").PropType<Cesium.CylinderGraphics | import("..").VcGraphicsCylinderProps>;
    ellipse: import("vue").PropType<Cesium.EllipseGraphics | import("..").VcGraphicsEllipseProps>;
    ellipsoid: import("vue").PropType<Cesium.EllipsoidGraphics | import("..").VcGraphicsEllipsoidRef>;
    label: import("vue").PropType<Cesium.LabelGraphics | import("..").VcGraphicsLabelProps>;
    model: import("vue").PropType<Cesium.ModelGraphics | import("..").VcGraphicsModelProps>;
    tileset: import("vue").PropType<Cesium.Cesium3DTilesetGraphics | import("..").VcGraphicsTilesetProps>;
    path: import("vue").PropType<Cesium.PathGraphics | import("..").VcGraphicsPathProps>;
    plane: import("vue").PropType<Cesium.PlaneGraphics | import("..").VcGraphicsPlaneProps>;
    point: import("vue").PropType<Cesium.PointGraphics | import("..").VcGraphicsPointProps>;
    polygon: import("vue").PropType<Cesium.PolygonGraphics | import("..").VcGraphicsPolygonProps>;
    polyline: import("vue").PropType<Cesium.PolylineGraphics | import("..").VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: import("vue").PropType<Cesium.PolylineVolumeGraphics | import("..").VcGraphicsPolylineVolumeProps>;
    rectangle: import("vue").PropType<Cesium.RectangleGraphics | import("..").VcGraphicsRectangleProps>;
    wall: import("vue").PropType<Cesium.WallGraphics | import("..").VcGraphicsWallProps>;
    viewFrom: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: import("vue").PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: import("vue").PropType<Cesium.TimeIntervalCollection>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDefinitionChanged?: (property: Cesium.Property) => any;
    "onUpdate:billboard"?: (payload: Cesium.BillboardGraphics) => any;
    "onUpdate:box"?: (payload: Cesium.BoxGraphics) => any;
    "onUpdate:corridor"?: (payload: Cesium.CorridorGraphics) => any;
    "onUpdate:cylinder"?: (payload: Cesium.CylinderGraphics) => any;
    "onUpdate:ellipse"?: (payload: Cesium.EllipseGraphics) => any;
    "onUpdate:ellipsoid"?: (payload: Cesium.EllipsoidGraphics) => any;
    "onUpdate:label"?: (payload: Cesium.LabelGraphics) => any;
    "onUpdate:model"?: (payload: Cesium.ModelGraphics) => any;
    "onUpdate:path"?: (payload: Cesium.PathGraphics) => any;
    "onUpdate:plane"?: (payload: Cesium.PlaneGraphics) => any;
    "onUpdate:point"?: (payload: Cesium.PointGraphics) => any;
    "onUpdate:polygon"?: (payload: Cesium.PolygonGraphics) => any;
    "onUpdate:polyline"?: (payload: Cesium.PolylineGraphics) => any;
    "onUpdate:polylineVolume"?: (payload: Cesium.PolylineVolumeGraphics) => any;
    "onUpdate:rectangle"?: (payload: Cesium.RectangleGraphics) => any;
    "onUpdate:tileset"?: (payload: any) => any;
    "onUpdate:wall"?: (payload: Cesium.WallGraphics) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
}>>;
export * from './src';
