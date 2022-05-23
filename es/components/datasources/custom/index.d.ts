import type { PropType, VNode } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcDatasource, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcEntityProps } from '../../entity';
export declare const customDatasourceProps: {
    entities: {
        type: PropType<VcEntityProps[]>;
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
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    entities: {
        type: PropType<VcEntityProps[]>;
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
        type: PropType<boolean>;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    clusterEvent: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => boolean;
    collectionChanged: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => boolean;
    changedEvent: (datasource: VcDatasource) => boolean;
    errorEvent: (datasource: VcDatasource, error: any) => boolean;
    loadingEvent: (datasource: VcDatasource, isLoading: boolean) => boolean;
    refreshEvent: (datasource: Cesium.KmlDataSource, url: string) => boolean;
    unsupportedNodeEvent: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => boolean;
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
    entities: {
        type: PropType<VcEntityProps[]>;
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
        type: PropType<boolean>;
        default: boolean;
    };
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
    onClusterEvent?: (entities: Cesium.Entity[], cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => any;
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Cesium.Entity[], removedArray: Cesium.Entity[], changedArray: Cesium.Entity[]) => any;
    onChangedEvent?: (datasource: VcDatasource) => any;
    onErrorEvent?: (datasource: VcDatasource, error: any) => any;
    onLoadingEvent?: (datasource: VcDatasource, isLoading: boolean) => any;
    onRefreshEvent?: (datasource: Cesium.KmlDataSource, url: string) => any;
    onUnsupportedNodeEvent?: (datasource: Cesium.KmlDataSource, parentEntity: any, node: any, entityCollection: any, styleCollection: any, sourceResource: any, uriResolver: any) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    destroy: boolean;
    entities: VcEntityProps[];
}>;
export default _default;
export declare type VcDatasourceCustomProps = {
    /**
     * Specify whether the data source is displayed.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify whether to respond to mouse pick events.
     * Default value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Specify the collection of entities to be added to this data source.
     */
    entities?: Array<VcEntityProps>;
    /**
     * A human-readable name for this instance.
     */
    name?: string;
    /**
     * Whether to destroy the data source in addition to removing it.
     * Default value: false
     */
    destroy?: boolean;
    /**
     * Triggers before the VcDatasourceCustom is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcDatasourceCustom is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcDatasourceCustom is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the mouse is pressed on this datasource.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this datasource.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this datasource.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this datasource.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this datasource.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this datasource.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this datasource.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this datasource.
     */
    onMouseout?: (evt: VcPickEvent) => void;
    /**
     * Triggers whenever a new property is assigned. datasource.clock.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
    /**
     *  Triggers when a new cluster will be displayed. datasource.clustering.
     */
    onClusterEvent?: (entities: Array<Cesium.Entity>, cluster: {
        billboard: Cesium.Billboard;
        label: Cesium.Label;
        point: Cesium.PointPrimitive;
    }) => void;
    /**
     * Triggers when entities are added or removed from the collection.datasource.entities
     */
    onCollectionChanged?: (collection: Cesium.EntityCollection, addedArray: Array<Cesium.Entity>, removedArray: Array<Cesium.Entity>, changedArray: Array<Cesium.Entity>) => void;
    /**
     * Triggerswhen the underlying data changes.
     */
    onChangedEvent?: (datasource: VcDatasource) => void;
    /**
     * Triggers if an error is encountered during processing.
     */
    onErrorEvent?: (datasource: VcDatasource, error: any) => void;
    /**
     * Triggers when the data source either starts or stops loading.
     */
    onLoadingEvent?: (datasource: VcDatasource, isLoading: boolean) => void;
};
export declare type VcDatasourceCustomRef = VcComponentPublicInstance<VcDatasourceCustomProps>;
export interface VcDatasourceCustomSlots {
    /**
     * Slot for vc-entity.
     */
    default: () => VNode[];
}
