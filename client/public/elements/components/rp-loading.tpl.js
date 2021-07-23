import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    --rp-loading-color: var(--tcolor-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--rp-loading-color);
  }
  .loading-dots {
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    width: 75px;
    margin-bottom: 10px;
  }

  .dot {
    background-color: var(--rp-loading-color);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0;
    animation: showHideDot 2.5s ease-in-out infinite;
  }

  .dot.one { animation-delay: 0.2s; }
  .dot.two { animation-delay: 0.4s; }
  .dot.three { animation-delay: 0.6s; }

  @keyframes showHideDot {
    0% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
${this.graphic === 'dots' ? html`
  <div class="loading-dots">
    <span class="dot one"></span><span class="dot two"></span><span class="dot three"></span>
  </div>
` : html``}
<slot></slot>
`;}