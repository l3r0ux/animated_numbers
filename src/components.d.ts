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
    interface NumberContainer {
        "num": string;
    }
}
declare global {
    interface HTMLAnmnumAnimatedNumberElement extends Components.AnmnumAnimatedNumber, HTMLStencilElement {
    }
    var HTMLAnmnumAnimatedNumberElement: {
        prototype: HTMLAnmnumAnimatedNumberElement;
        new (): HTMLAnmnumAnimatedNumberElement;
    };
    interface HTMLNumberContainerElement extends Components.NumberContainer, HTMLStencilElement {
    }
    var HTMLNumberContainerElement: {
        prototype: HTMLNumberContainerElement;
        new (): HTMLNumberContainerElement;
    };
    interface HTMLElementTagNameMap {
        "anmnum-animated-number": HTMLAnmnumAnimatedNumberElement;
        "number-container": HTMLNumberContainerElement;
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
    interface NumberContainer {
        "num"?: string;
    }
    interface IntrinsicElements {
        "anmnum-animated-number": AnmnumAnimatedNumber;
        "number-container": NumberContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anmnum-animated-number": LocalJSX.AnmnumAnimatedNumber & JSXBase.HTMLAttributes<HTMLAnmnumAnimatedNumberElement>;
            "number-container": LocalJSX.NumberContainer & JSXBase.HTMLAttributes<HTMLNumberContainerElement>;
        }
    }
}
