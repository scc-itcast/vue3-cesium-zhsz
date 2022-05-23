declare const defaultProps: {
    icon: StringConstructor;
    activeIcon: StringConstructor;
    hideActionOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideIcon: BooleanConstructor;
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    persistent: BooleanConstructor;
    stacked: BooleanConstructor;
    verticalActionsAlign: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: any;
    };
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
    labelClass: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    labelStyle: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
    disable: BooleanConstructor;
    tabindex: (StringConstructor | NumberConstructor)[];
};
export default defaultProps;
