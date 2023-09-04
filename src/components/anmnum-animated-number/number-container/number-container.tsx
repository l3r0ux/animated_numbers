import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'number-container',
  styleUrl: 'number-container.css',
  shadow: true,
})
export class NumberContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
