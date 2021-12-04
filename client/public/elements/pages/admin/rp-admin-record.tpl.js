import { html, css, unsafeCSS } from 'lit';
import jsonStyles from 'json-formatter-js/dist/json-formatter.css';
import siteStyles from "../../styles/site-lit.js";
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";
import base from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
import baseCss from "@ucd-lib/theme-sass/2_base_class/_index.css.js";



export function styles() {
  const elementStyles = css`
    :host {
      display: block;
      background-color: white;
      padding-top: 25px;
    }
    .layout {
      display: flex;
    }
    .layout > div {
      overflow : auto;
      flex: .333;
      padding: 5px;
      background-color: white;
    }
    h1 {
      margin: 0;
    }
    .title-center{
      text-align:center;
    }
    #editor {
      min-height: 500px;
      margin: 0 25px;
    }

    .l-3col > div{
      border-style: inset;
      border-color: #EBF3FA;
    }
    ${unsafeCSS(jsonStyles)}
  `;
  return [elementStyles, siteStyles, layoutCss, base, baseCss];
}

export function render() { 
return html`

<div style="text-align: center">
  <h1>${this.uri}</h1>
  <h2>${this.type}</h2>
  <div>${this.loadingState}</div>
</div>
<div class="l-3col">
  <div class="l-first panel o-box">
    <h4 class="title-center">Fuseki</h4>
    <div id="fuseki"></div>
  </div>
  <div class="l-second panel o-box">
    <h4 class="title-center">Live Model</h4>
    <div id="model"></div>
  </div>
  <div class="l-third panel o-box">
    <h4 class="title-center">Elastic Search Record</h4>
    <div id="elasticsearch"></div>
  </div>
</div>

<div style="background-color:#EBF3FA;">
<h4 style="margin:25px">Model Sparql Query <br /></h4>
<div style="display:flex">
  <div style="flex:.5">
    <div id="editor"></div>
  </div>
  <div style="flex:.5; overflow: auto">
    <div id="editorResponse" ></div>
  </div>
</div>

<button style="margin:25px" @click="${this.editorQuery}" class="btn btn--alt btn--sm">Query</button>

</div>

`;}