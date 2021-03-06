export declare function getScrollTarget(el: any, targetEl: any): any;
export declare function getScrollHeight(el: any): any;
export declare function getScrollWidth(el: any): any;
export declare function getVerticalScrollPosition(scrollTarget: any): any;
export declare function getHorizontalScrollPosition(scrollTarget: any): any;
export declare function animVerticalScrollTo(el: any, to: any, duration?: number, prevTime?: any): void;
export declare function animHorizontalScrollTo(el: any, to: any, duration?: number, prevTime?: any): void;
export declare function setVerticalScrollPosition(scrollTarget: any, offset: any, duration: any): void;
export declare function setHorizontalScrollPosition(scrollTarget: any, offset: any, duration: any): void;
export declare function getScrollbarWidth(): any;
export declare function hasScrollbar(el: any, onY?: boolean): any;
declare const _default: {
    getScrollTarget: typeof getScrollTarget;
    getScrollHeight: typeof getScrollHeight;
    getScrollWidth: typeof getScrollWidth;
    getVerticalScrollPosition: typeof getVerticalScrollPosition;
    getHorizontalScrollPosition: typeof getHorizontalScrollPosition;
    animVerticalScrollTo: typeof animVerticalScrollTo;
    animHorizontalScrollTo: typeof animHorizontalScrollTo;
    setVerticalScrollPosition: typeof setVerticalScrollPosition;
    setHorizontalScrollPosition: typeof setHorizontalScrollPosition;
    getScrollbarWidth: typeof getScrollbarWidth;
    hasScrollbar: typeof hasScrollbar;
};
export default _default;
