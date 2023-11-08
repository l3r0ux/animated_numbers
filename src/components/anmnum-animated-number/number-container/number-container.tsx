import { Component, Host, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'number-container',
  styleUrl: 'number-container.css',
  shadow: true,
})
export class NumberContainer {
  numbersColumn: HTMLDivElement

  @Prop() num: string
  @Prop() numberXMargin: string
  @Prop() isInitialRender: boolean
  @Prop() hasBorders: string

  componentDidLoad() {
    if (this.num === '-')
      return this.numbersColumn.style.transform = 'translateY(-1000%)'
    if (this.num === ',' || this.num === '.')
      return this.numbersColumn.style.transform = 'translateY(-1100%)'
    this.numbersColumn.style.transform = `translateY(-${this.num}00%)`
  }

  @Watch('num')
  numWatchHandler(num: string) {
    if (num === '-')
      return this.numbersColumn.style.transform = 'translateY(-1000%)'
    if (this.num === ',' || this.num === '.')
      return this.numbersColumn.style.transform = 'translateY(-1100%)'
    this.numbersColumn.style.transform = `translateY(-${num}00%)`
  }

  render() {
    return (
      <Host style={{
        margin: `0 ${this.numberXMargin}px`,
        backgroundColor: !this.hasBorders ? '#fff' : '',
      }}>
        <div class="numbers-container">
          <div ref={(el: HTMLDivElement) => this.numbersColumn = el} class="numbers-column">
            <div class="number-wrapper" data-value="0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path xmlns="http://www.w3.org/2000/svg" d="M12 20C14.7614 20 17 17.7614 17 15V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V15C7 17.7614 9.23858 20 12 20Z" stroke="#000" stroke-width="2.5" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 20V4L9 7" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M8 8C8 6.97631 8.39052 5.95262 9.17157 5.17157C10.7337 3.60947 13.2663 3.60947 14.8284 5.17157C16.3905 6.73366 16.3905 9.26632 14.8284 10.8284L9.17157 16.4853C8.42143 17.2354 8 18.2528 8 19.3137L8 20L16 20" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10L16 4H8" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M10 4L8.47845 11.6078C8.23093 12.8453 9.17752 14 10.4396 14H16M16 14V8M16 14V20" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10C9.87439 10 8.83566 10.3719 8 10.9996L9 4H16" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M13 4L7.77313 12.3279M17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15Z" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path xmlns="http://www.w3.org/2000/svg" d="M8 4H16L10 20" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="15" r="5" stroke="#000" stroke-width="2.5" stroke-linejoin="round" />
                <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="7" r="3" stroke="#000" stroke-width="2.5" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M11 20L16.2269 11.6721M7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9Z" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value="-">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path xmlns="http://www.w3.org/2000/svg" d="M6 12L18 12" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="number-wrapper" data-value=",">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                {this.hasBorders && this.num === ',' ?
                  <circle stroke="#000" fill="#000" r="2" cx="12" cy="12" />
                  :
                  <path xmlns="http://www.w3.org/2000/svg" d="M9.375 21.969l2.188 1.031-2.938 6.125-1.875-0.906z" stroke="#000" fill="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                }
              </svg>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
