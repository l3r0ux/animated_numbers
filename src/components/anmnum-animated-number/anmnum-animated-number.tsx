import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'anmnum-animated-number',
  styleUrl: 'anmnum-animated-number.css',
  shadow: true,
})
export class AnmnumAnimatedNumber {
  @Prop() number: number
  @Prop() width: string
  @Prop() textColor: string
  @Prop() borderColor: string
  @Prop() borderWidth: string
  @Prop() backgroundColor: string

  @State() numArray: string[]

  componentWillLoad() {
    this.numArray = this.number.toString().split('')
  }

  render() {
    return (
      <Host style={{ width: this.width }}>
        {this.numArray.map((num: string) =>
          <number-container num={num} />
        )}
      </Host>
    );
  }

}
