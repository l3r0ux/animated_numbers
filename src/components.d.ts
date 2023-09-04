/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnmnumAnimatedNumber {
        "backgroundColor": string;
        "borderColor": string;
        "borderWidth": string;
        "number": number;
        "textColor": string;
        "width": string;
    }
}
declare global {
    interface HTMLAnmnumAnimatedNumberElement extends Components.AnmnumAnimatedNumber, HTMLStencilElement {
    }
    var HTMLAnmnumAnimatedNumberElement: {
        prototype: HTMLAnmnumAnimatedNumberElement;
        new (): HTMLAnmnumAnimatedNumberElement;
    };
    interface HTMLElementTagNameMap {
        "anmnum-animated-number": HTMLAnmnumAnimatedNumberElement;
    }
}
declare namespace LocalJSX {
    interface AnmnumAnimatedNumber {
        "backgroundColor"?: string;
        "borderColor"?: string;
        "borderWidth"?: string;
        "number"?: number;
        "textColor"?: string;
        "width"?: string;
    }
    interface IntrinsicElements {
        "anmnum-animated-number": AnmnumAnimatedNumber;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anmnum-animated-number": LocalJSX.AnmnumAnimatedNumber & JSXBase.HTMLAttributes<HTMLAnmnumAnimatedNumberElement>;
        }
    }
}
