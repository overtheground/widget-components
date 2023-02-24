import {MutableRef} from "preact/hooks";

export function refStyle(ref: MutableRef<any>): CSSStyleDeclaration {
    return ref.current.style
}