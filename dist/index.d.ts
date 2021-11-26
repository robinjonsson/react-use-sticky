/// <reference types="react" />
/**
 * Returns a ref, and a stateful value bound to the ref
 */
export declare function useSticky<T extends HTMLElement>(): readonly [import("react").RefObject<T>, boolean];
