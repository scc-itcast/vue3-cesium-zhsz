declare const anchorMap: {
    start: string;
    center: string;
    end: string;
};
declare const defaultProps: {
    icon: {
        type: StringConstructor;
        default: string;
    };
    stacked: BooleanConstructor;
    anchor: {
        type: StringConstructor;
        validator: (v: any) => boolean;
    };
    to: (ObjectConstructor | StringConstructor)[];
    replace: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    outline: BooleanConstructor;
    push: BooleanConstructor;
    flat: BooleanConstructor;
    unelevated: BooleanConstructor;
    color: StringConstructor;
    textColor: StringConstructor;
    glossy: BooleanConstructor;
    square: BooleanConstructor;
    padding: StringConstructor;
    size: StringConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    externalLabel: BooleanConstructor;
    hideLabel: {
        type: BooleanConstructor;
    };
    labelClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    labelStyle: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    disable: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
};
export default defaultProps;
export { anchorMap };
