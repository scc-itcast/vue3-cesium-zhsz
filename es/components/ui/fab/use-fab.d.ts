export declare const useFabProps: {
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
export default function (props: any, showing: any): {
    formClass: import("vue").ComputedRef<string>;
    stacked: import("vue").ComputedRef<boolean>;
    labelProps: import("vue").ComputedRef<{
        action: string;
        data: {
            class: any[];
            style: any;
        };
    }>;
};
