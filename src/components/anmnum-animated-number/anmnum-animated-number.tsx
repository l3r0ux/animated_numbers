import { Component, Host, Prop, State, h, Watch } from '@stencil/core';

@Component({
  tag: 'anmnum-animated-number',
  styleUrl: 'anmnum-animated-number.css',
  shadow: true,
})
export class AnmnumAnimatedNumber {
  // TODO: Make spin animation on boot up
  // TODO: Make number of number blocks to show an option, then show 0s everywhere for open spaces? then depending on number of blocks set max number value it can go
  // TODO: Make each consecutive number more skewed on x axis to create 3d effect
  hostEl: HTMLElement

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

  componentDidLoad() {
    setTimeout(() => {
      this.setWidth()
    }, 50)
  }

  @Watch('number')
  numberWatchHandler(newNum: string, oldNum: string) {
    this.numArray = newNum.toString().split('')

    if (oldNum.toString().split('').length === this.numArray.length) return
    setTimeout(() => {
      this.setWidth()
    }, 50)
  }

  setWidth() {
    let totalWidth = 0
    for (let i = 0; i < this.hostEl.shadowRoot.childElementCount; i++) {
      totalWidth += this.hostEl.shadowRoot.children[i].clientWidth + (Number(this.numberXMargin) * 2)
    }
    this.hostEl.style.width = `${totalWidth}px`
  }

  render() {
    return (
      <Host ref={(el: HTMLElement) => this.hostEl = el}>
        {this.numArray.map((num: string) =>
          <number-container
            num={num}
            numberXMargin={this.numberXMargin}
          />
        )}
      </Host>
    );
  }

}
