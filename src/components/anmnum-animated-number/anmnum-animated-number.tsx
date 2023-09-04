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
          <div class="number-container">
            <div class="numbers-column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 20V4L9 7" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M8 8C8 6.97631 8.39052 5.95262 9.17157 5.17157C10.7337 3.60947 13.2663 3.60947 14.8284 5.17157C16.3905 6.73366 16.3905 9.26632 14.8284 10.8284L9.17157 16.4853C8.42143 17.2354 8 18.2528 8 19.3137L8 20L16 20" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10L16 4H8" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M10 4L8.47845 11.6078C8.23093 12.8453 9.17752 14 10.4396 14H16M16 14V8M16 14V20" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10C9.87439 10 8.83566 10.3719 8 10.9996L9 4H16" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M13 4L7.77313 12.3279M17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15Z" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="15" r="5" stroke="#000" stroke-width="2.5" stroke-linejoin="round" />
                <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="7" r="3" stroke="#000" stroke-width="2.5" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M11 20L16.2269 11.6721M7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9Z" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        )}
      </Host>
    );
  }

}
