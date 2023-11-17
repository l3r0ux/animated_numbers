import { Component, Host, Prop, State, h, Watch } from '@stencil/core';

@Component({
  tag: 'anmnum-animated-number',
  styleUrl: 'anmnum-animated-number.css',
  shadow: true,
})
export class AnmnumAnimatedNumber {
  hostEl: HTMLElement

  @Prop() number: string
  @Prop() fontColor: string
  @Prop() borderColor: string
  @Prop() borderWidth: string
  @Prop() backgroundColor: string
  @Prop() numberXMargin: string
  @Prop() hasBorders: string

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
            fontColor={this.fontColor}
            borderColor={this.borderColor}
            borderWidth={this.borderWidth}
            backgroundColor={this.backgroundColor}
            hasBorders={this.hasBorders}
            num={num}
            numberXMargin={this.numberXMargin}
          />
        )}
      </Host>
    );
  }

}
