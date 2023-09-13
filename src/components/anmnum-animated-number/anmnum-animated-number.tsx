import { Component, Host, Prop, State, h, Watch } from '@stencil/core';

@Component({
  tag: 'anmnum-animated-number',
  styleUrl: 'anmnum-animated-number.css',
  shadow: true,
})
export class AnmnumAnimatedNumber {
  @Prop() number: number
  @Prop() textColor: string
  @Prop() borderColor: string
  @Prop() borderWidth: string
  @Prop() backgroundColor: string

  @State() numArray: string[]

  componentWillLoad() {
    this.numArray = this.number.toString().split('')
  }

  @Watch('number')
  numberWatchHandler(number: string) {
    this.numArray = number.toString().split('')
  }

  render() {
    return (
      <Host>
        {this.numArray.map((num: string) =>
          <number-container num={num} />
        )}
      </Host>
    );
  }

}
