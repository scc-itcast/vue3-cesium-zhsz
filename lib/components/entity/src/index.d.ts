import type { PropType, VNode } from 'vue';
import type { AnyObject, EntityEmitType, VcCallbackPropertyFunction, VcComponentInternalInstance, VcComponentPublicInstance, VcGraphics, VcPickEvent, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcGraphicsBillboardProps, VcGraphicsBoxProps, VcGraphicsCorridorProps, VcGraphicsCylinderProps, VcGraphicsEllipseProps, VcGraphicsEllipsoidRef, VcGraphicsLabelProps, VcGraphicsModelProps, VcGraphicsPathProps, VcGraphicsPlaneProps, VcGraphicsPointProps, VcGraphicsPolygonProps, VcGraphicsPolylineProps, VcGraphicsPolylineVolumeProps, VcGraphicsRectangleProps, VcGraphicsTilesetProps, VcGraphicsWallProps } from '../../graphics';
export declare const entityProps: {
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: PropType<Cesium.Entity>;
    billboard: PropType<Cesium.BillboardGraphics | VcGraphicsBillboardProps>;
    box: PropType<Cesium.BoxGraphics | VcGraphicsBoxProps>;
    corridor: PropType<Cesium.CorridorGraphics | VcGraphicsCorridorProps>;
    cylinder: PropType<Cesium.CylinderGraphics | VcGraphicsCylinderProps>;
    ellipse: PropType<Cesium.EllipseGraphics | VcGraphicsEllipseProps>;
    ellipsoid: PropType<Cesium.EllipsoidGraphics | VcGraphicsEllipsoidRef>;
    label: PropType<Cesium.LabelGraphics | VcGraphicsLabelProps>;
    model: PropType<Cesium.ModelGraphics | VcGraphicsModelProps>;
    tileset: PropType<Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps>;
    path: PropType<Cesium.PathGraphics | VcGraphicsPathProps>;
    plane: PropType<Cesium.PlaneGraphics | VcGraphicsPlaneProps>;
    point: PropType<Cesium.PointGraphics | VcGraphicsPointProps>;
    polygon: PropType<Cesium.PolygonGraphics | VcGraphicsPolygonProps>;
    polyline: PropType<Cesium.PolylineGraphics | VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: PropType<Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps>;
    rectangle: PropType<Cesium.RectangleGraphics | VcGraphicsRectangleProps>;
    wall: PropType<Cesium.WallGraphics | VcGraphicsWallProps>;
    viewFrom: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>>;
    show: {
        type: PropType<boolean>; /**
         * A Property specifying the entity orientation.
         */
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: PropType<Cesium.TimeIntervalCollection>;
};
declare const emits: {
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
    mousedown: (evt: VcPickEvent) => boolean;
    mouseup: (evt: VcPickEvent) => boolean;
    click: (evt: VcPickEvent) => boolean;
    clickout: (evt: VcPickEvent) => boolean;
    dblclick: (evt: VcPickEvent) => boolean;
    mousemove: (evt: VcPickEvent) => boolean;
    mouseover: (evt: VcPickEvent) => boolean;
    mouseout: (evt: VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: PropType<Cesium.Entity>;
    billboard: PropType<Cesium.BillboardGraphics | VcGraphicsBillboardProps>;
    box: PropType<Cesium.BoxGraphics | VcGraphicsBoxProps>;
    corridor: PropType<Cesium.CorridorGraphics | VcGraphicsCorridorProps>;
    cylinder: PropType<Cesium.CylinderGraphics | VcGraphicsCylinderProps>;
    ellipse: PropType<Cesium.EllipseGraphics | VcGraphicsEllipseProps>;
    ellipsoid: PropType<Cesium.EllipsoidGraphics | VcGraphicsEllipsoidRef>;
    label: PropType<Cesium.LabelGraphics | VcGraphicsLabelProps>;
    model: PropType<Cesium.ModelGraphics | VcGraphicsModelProps>;
    tileset: PropType<Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps>;
    path: PropType<Cesium.PathGraphics | VcGraphicsPathProps>;
    plane: PropType<Cesium.PlaneGraphics | VcGraphicsPlaneProps>;
    point: PropType<Cesium.PointGraphics | VcGraphicsPointProps>;
    polygon: PropType<Cesium.PolygonGraphics | VcGraphicsPolygonProps>;
    polyline: PropType<Cesium.PolylineGraphics | VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: PropType<Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps>;
    rectangle: PropType<Cesium.RectangleGraphics | VcGraphicsRectangleProps>;
    wall: PropType<Cesium.WallGraphics | VcGraphicsWallProps>;
    viewFrom: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>>;
    show: {
        type: PropType<boolean>; /**
         * A Property specifying the entity orientation.
         */
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: PropType<Cesium.TimeIntervalCollection>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    mousedown: (evt: VcPickEvent) => boolean;
    mouseup: (evt: VcPickEvent) => boolean;
    click: (evt: VcPickEvent) => boolean;
    clickout: (evt: VcPickEvent) => boolean;
    dblclick: (evt: VcPickEvent) => boolean;
    mousemove: (evt: VcPickEvent) => boolean;
    mouseover: (evt: VcPickEvent) => boolean;
    mouseout: (evt: VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: PropType<Cesium.Entity>;
    billboard: PropType<Cesium.BillboardGraphics | VcGraphicsBillboardProps>;
    box: PropType<Cesium.BoxGraphics | VcGraphicsBoxProps>;
    corridor: PropType<Cesium.CorridorGraphics | VcGraphicsCorridorProps>;
    cylinder: PropType<Cesium.CylinderGraphics | VcGraphicsCylinderProps>;
    ellipse: PropType<Cesium.EllipseGraphics | VcGraphicsEllipseProps>;
    ellipsoid: PropType<Cesium.EllipsoidGraphics | VcGraphicsEllipsoidRef>;
    label: PropType<Cesium.LabelGraphics | VcGraphicsLabelProps>;
    model: PropType<Cesium.ModelGraphics | VcGraphicsModelProps>;
    tileset: PropType<Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps>;
    path: PropType<Cesium.PathGraphics | VcGraphicsPathProps>;
    plane: PropType<Cesium.PlaneGraphics | VcGraphicsPlaneProps>;
    point: PropType<Cesium.PointGraphics | VcGraphicsPointProps>;
    polygon: PropType<Cesium.PolygonGraphics | VcGraphicsPolygonProps>;
    polyline: PropType<Cesium.PolylineGraphics | VcGraphicsPolylineProps>;
    properties: ObjectConstructor;
    polylineVolume: PropType<Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps>;
    rectangle: PropType<Cesium.RectangleGraphics | VcGraphicsRectangleProps>;
    wall: PropType<Cesium.WallGraphics | VcGraphicsWallProps>;
    viewFrom: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    orientation: PropType<Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty>;
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    description: PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>>;
    show: {
        type: PropType<boolean>; /**
         * A Property specifying the entity orientation.
         */
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    availability: PropType<Cesium.TimeIntervalCollection>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onMousedown?: (evt: VcPickEvent) => any;
    onMouseup?: (evt: VcPickEvent) => any;
    onClick?: (evt: VcPickEvent) => any;
    onClickout?: (evt: VcPickEvent) => any;
    onDblclick?: (evt: VcPickEvent) => any;
    onMousemove?: (evt: VcPickEvent) => any;
    onMouseover?: (evt: VcPickEvent) => any;
    onMouseout?: (evt: VcPickEvent) => any;
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
}>;
export default _default;
export declare type VcEntityEmits = typeof emits;
export declare type VcEntityProps = {
    /**
     * A unique identifier for this object. If none is provided, a GUID is generated.
     */
    id?: string;
    /**
     * A human readable name to display to users. It does not have to be unique.
     */
    name?: string;
    /**
     * The availability, if any, associated with this object.
     */
    availability?: Cesium.TimeIntervalCollection;
    /**
     * A boolean value indicating if the entity and its children are displayed.
     */
    show?: boolean;
    /**
     * A string Property specifying an HTML description for this entity.
     */
    description?: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>;
    /**
     * A Property specifying the entity position.
     */
    position?: VcPosition;
    /**
     * A Property specifying the entity orientation.
     */
    orientation?: Cesium.Quaternion | Cesium.VelocityOrientationProperty | Cesium.CallbackProperty;
    /**
     * A suggested initial offset for viewing this object.
     */
    viewFrom?: VcPosition | Cesium.CallbackProperty;
    /**
     * A parent entity to associate with this entity.
     */
    parent?: Cesium.Entity;
    /**
     * A billboard to associate with this entity.
     */
    billboard?: Cesium.BillboardGraphics | VcGraphicsBillboardProps;
    /**
     * A box to associate with this entity.
     */
    box?: Cesium.BoxGraphics | VcGraphicsBoxProps;
    /**
     * A corridor to associate with this entity.
     */
    corridor?: Cesium.CorridorGraphics | VcGraphicsCorridorProps;
    /**
     * A cylinder to associate with this entity.
     */
    cylinder?: Cesium.CylinderGraphics | VcGraphicsCylinderProps;
    /**
     * A ellipse to associate with this entity.
     */
    ellipse?: Cesium.BillboardGraphics | VcGraphicsBillboardProps;
    /**
     * A ellipsoid to associate with this entity.
     */
    ellipsoid?: Cesium.EllipseGraphics | VcGraphicsEllipseProps;
    /**
     * A options.label to associate with this entity.
     */
    label?: Cesium.LabelGraphics | VcGraphicsLabelProps;
    /**
     * A model to associate with this entity.
     */
    model?: Cesium.ModelGraphics | VcGraphicsModelProps;
    /**
     * A 3D Tiles tileset to associate with this entity.
     */
    tileset?: Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps;
    /**
     * A path to associate with this entity.
     */
    path?: Cesium.PathGraphics | VcGraphicsPathProps;
    /**
     * A plane to associate with this entity.
     */
    plane?: Cesium.PlaneGraphics | VcGraphicsPlaneProps;
    /**
     * A point to associate with this entity.
     */
    point?: Cesium.PointGraphics | VcGraphicsPointProps;
    /**
     * A polygon to associate with this entity.
     */
    polygon?: Cesium.PolygonGraphics | VcGraphicsPolygonProps;
    /**
     * A polyline to associate with this entity.
     */
    polyline?: Cesium.PolylineGraphics | VcGraphicsPolylineProps;
    /**
     * Arbitrary properties to associate with this entity.
     */
    properties?: AnyObject;
    /**
     * A polylineVolume to associate with this entity.
     */
    polylineVolume?: Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps;
    /**
     * A rectangle to associate with this entity.
     */
    rectangle?: Cesium.RectangleGraphics | VcGraphicsRectangleProps;
    /**
     * A wall to associate with this entity.
     */
    wall?: Cesium.WallGraphics | VcGraphicsWallProps;
    /**
     * Triggers before the VcEntity is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcEntity is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcEntity is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
    /**
     * Triggers when the mouse is pressed on this entity.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this entity.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this entity.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this entity.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this entity.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this entity.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this entity.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this entity.
     */
    onMouseout?: (evt: VcPickEvent) => void;
};
export interface VcEntityRef extends VcComponentPublicInstance<VcEntityProps> {
    /**
     * private method, update graphic.
     * @param graphics
     * @param type
     */
    __updateGraphics: (graphics: VcGraphics | undefined, type: EntityEmitType) => boolean;
}
export interface VcEntitySlots {
    /**
     * Slot for vc-graphics-xxx.
     */
    default: () => VNode[];
}
