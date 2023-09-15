import { Component, Host, Prop, State, h, Watch } from '@stencil/core';

@Component({
  tag: 'anmnum-animated-number',
  styleUrl: 'anmnum-animated-number.css',
  shadow: true,
})
export class AnmnumAnimatedNumber {
  // TODO: Make spin animation on boot up
  // TODO: Make new number blocks animate in from below the right most block
  // TODO: Make number of number blocks to show an option, then show 0s everywhere for open spaces? then depending on number of blocks set max number value it can go
  // TODO: Make each consecutive number more skewed on x axis to create 3d effect

  @Prop() number: number
  @Prop() textColor: string
  @Prop() borderColor: string
  @Prop() borderWidth: string
  @Prop() backgroundColor: string
  @Prop() numberXMargin: string

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
          <number-container num={num} numberXMargin={this.numberXMargin} />
        )}
      </Host>
    );
  }

}
