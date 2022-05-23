import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcDatasourceCustom: SFCWithInstall<import("vue").DefineComponent<{
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    name: StringConstructor;
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    clusterEvent: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    changedEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    errorEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => boolean;
    loadingEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => boolean;
    refreshEvent: (datasource: Cesium.KmlDataSource, url: string) => boolean;
    unsupportedNodeEvent: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => boolean;
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
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    name: StringConstructor;
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
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
    onClusterEvent?: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onChangedEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onErrorEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => any;
    onLoadingEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => any;
    onRefreshEvent?: (datasource: Cesium.KmlDataSource, url: string) => any;
    onUnsupportedNodeEvent?: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    destroy: boolean;
    entities: import("..").VcEntityProps[];
}>>;
export declare const VcDatasourceCzml: SFCWithInstall<import("vue").DefineComponent<{
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    sourceUri: {
        type: import("vue").PropType<string | Cesium.Resource>;
    };
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    czml: {
        type: import("vue").PropType<string | Cesium.Resource>;
        required: boolean;
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    clusterEvent: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    changedEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    errorEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => boolean;
    loadingEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => boolean;
    refreshEvent: (datasource: Cesium.KmlDataSource, url: string) => boolean;
    unsupportedNodeEvent: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => boolean;
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
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    sourceUri: {
        type: import("vue").PropType<string | Cesium.Resource>;
    };
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    czml: {
        type: import("vue").PropType<string | Cesium.Resource>;
        required: boolean;
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
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
    onClusterEvent?: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onChangedEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onErrorEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => any;
    onLoadingEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => any;
    onRefreshEvent?: (datasource: Cesium.KmlDataSource, url: string) => any;
    onUnsupportedNodeEvent?: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => any;
}, {
    credit: string | Cesium.Credit;
    show: boolean;
    enableMouseEvent: boolean;
    destroy: boolean;
    entities: import("..").VcEntityProps[];
}>>;
export declare const VcDatasourceGeojson: SFCWithInstall<import("vue").DefineComponent<{
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    describe: (ObjectConstructor | FunctionConstructor)[];
    markerSize: {
        type: NumberConstructor;
        default: number;
    };
    markerSymbol: StringConstructor;
    markerColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    stroke: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    fill: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    sourceUri: {
        type: import("vue").PropType<string | Cesium.Resource>;
    };
    data: {
        type: import("vue").PropType<string | Cesium.Resource>;
        required: boolean;
    };
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    clusterEvent: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    changedEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    errorEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => boolean;
    loadingEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => boolean;
    refreshEvent: (datasource: Cesium.KmlDataSource, url: string) => boolean;
    unsupportedNodeEvent: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => boolean;
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
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    describe: (ObjectConstructor | FunctionConstructor)[];
    markerSize: {
        type: NumberConstructor;
        default: number;
    };
    markerSymbol: StringConstructor;
    markerColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    stroke: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    fill: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    sourceUri: {
        type: import("vue").PropType<string | Cesium.Resource>;
    };
    data: {
        type: import("vue").PropType<string | Cesium.Resource>;
        required: boolean;
    };
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
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
    onClusterEvent?: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onChangedEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onErrorEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => any;
    onLoadingEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => any;
    onRefreshEvent?: (datasource: Cesium.KmlDataSource, url: string) => any;
    onUnsupportedNodeEvent?: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => any;
}, {
    fill: import("vue-cesium/es/utils/types").VcColor;
    credit: string | Cesium.Credit;
    show: boolean;
    enableMouseEvent: boolean;
    clampToGround: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    destroy: boolean;
    stroke: import("vue-cesium/es/utils/types").VcColor;
    strokeWidth: number;
    entities: import("..").VcEntityProps[];
    markerSize: number;
    markerColor: import("vue-cesium/es/utils/types").VcColor;
}>>;
export declare const VcDatasourceKml: SFCWithInstall<import("vue").DefineComponent<{
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    screenOverlayContainer: (StringConstructor | {
        new (): Element;
        prototype: Element;
    })[];
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    sourceUri: {
        type: import("vue").PropType<string | Cesium.Resource>;
    };
    camera: import("vue").PropType<Cesium.Camera>;
    canvas: {
        new (): HTMLCanvasElement;
        prototype: HTMLCanvasElement;
    };
    data: {
        type: import("vue").PropType<string | Cesium.Resource>;
        required: boolean;
    };
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    clusterEvent: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    changedEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => boolean;
    errorEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => boolean;
    loadingEvent: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => boolean;
    refreshEvent: (datasource: Cesium.KmlDataSource, url: string) => boolean;
    unsupportedNodeEvent: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => boolean;
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
    destroy: {
        type: BooleanConstructor;
        default: boolean;
    };
    screenOverlayContainer: (StringConstructor | {
        new (): Element;
        prototype: Element;
    })[];
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    sourceUri: {
        type: import("vue").PropType<string | Cesium.Resource>;
    };
    camera: import("vue").PropType<Cesium.Camera>;
    canvas: {
        new (): HTMLCanvasElement;
        prototype: HTMLCanvasElement;
    };
    data: {
        type: import("vue").PropType<string | Cesium.Resource>;
        required: boolean;
    };
    entities: {
        type: import("vue").PropType<import("..").VcEntityProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
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
    onClusterEvent?: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onChangedEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource) => any;
    onErrorEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, error: any) => any;
    onLoadingEvent?: (datasource: import("vue-cesium/es/utils/types").VcDatasource, isLoading: boolean) => any;
    onRefreshEvent?: (datasource: Cesium.KmlDataSource, url: string) => any;
    onUnsupportedNodeEvent?: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => any;
}, {
    credit: string | Cesium.Credit;
    show: boolean;
    enableMouseEvent: boolean;
    clampToGround: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    destroy: boolean;
    entities: import("..").VcEntityProps[];
}>>;
export * from './custom';
export * from './czml';
export * from './geojson';
export * from './kml';
