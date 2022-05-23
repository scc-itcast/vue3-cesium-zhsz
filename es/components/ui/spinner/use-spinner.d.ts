export declare const useSpinnerProps: {
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
};
export default function useSpinner(props: any): {
    cSize: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<string>;
};
