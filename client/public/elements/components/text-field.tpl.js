import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    /* :host {
      display: inline-block;
    } */
    /* .container {
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: var(--font-size-small);
    }

    .container iron-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      margin-right: 8px;
    } */
    .wrapper {
        display: grid;
        grid-template-columns: 45% 45% 5% 5%;
        grid-gap: .25%;
        background-color: #fff;
        color: #444;
      }
      
    #rearrange{
        text-align: center;
    }
      
    #delete{
        vertical-align: center
    }
      
    label{
        text-align: left;
        vertical-align: middle;
        margin-left: 5%;
    }
    h2{
        text-align: left;
        vertical-align: middle;
        margin-left: 5%;
    }
      
    #c2{
        width: 100%;
        margin: 3% 0 3%;
    }
      
    #textbox {
        padding: 2% 0 2%;
        display: flex;
        width: 100%;
        box-sizing: border-box;
    }
      
    #radiobox {
        padding: 2% 0 2%;
        box-sizing: border-box;
        display: flex;
    }
      
    #flexible-width {
        flex: 1; /* my goal is that the width always fills up independent of browser width */
        border: 5px;
    }
    #flexible-width-radio { 
        border: 5px;
        flex: 1;    
    }     
    input[type=text]{
        margin: 0 0 0 5%;
        box-shadow: inset 0 0 1.5px black, 0 0 2px grey;
        padding: 1.5%;
    }      
</style>

    <div id= "c2">
    <div class="wrapper"><h3>Websites</h3></div>
    <div class="wrapper"><label>Site Name</label><label>URL</label></div>
    <div class="wrapper">
    <div id="textbox"><input type=text id="flexible-width" /></div>
    <div id="textbox"><input type=text id="flexible-width" /></div>
    <p id="rearrange">&#8593;&#8595;</p>
    </div> 
    <div class="wrapper">
    <div id="textbox"><input type=text id="flexible-width" /></div>
    <div id="textbox"><input type=text id="flexible-width" /></div>
    <p id="rearrange">&#8593;&#8595;</p>
    <p id="delete">&#x2715;</p>
    </div>
    <div class="wrapper">
    <div id="textbox"><input type=text id="flexible-width" /></div>
    <div id="textbox"><input type=text id="flexible-width" /></div>
    <p id="rearrange">&#8593;&#8595;</p>
    <p id="delete">&#x2715;</p>
    </div>
    <br />
    <rp-icon icon="iron-arrow-forward" circle-bg></rp-icon>  Add Website
    </div>

    <div id= "c2">
    <div class="wrapper"><h3>Contact</h3></div>
    <div class="wrapper"><label>Email</label></div>
    <div class="wrapper">
    <div id="radiobox"><input type=text id="flexible-width-radio" /><input type="radio" name="reason" value=""></div>
    </div>
    <div class="wrapper">
      <div id="radiobox"><input type=text id="flexible-width-radio" /><input type="radio" name="reason" value=""> </div>
    </div> 
    <br />
    <rp-icon icon="iron-arrow-forward" circle-bg></rp-icon>  Add Email
    </div>
    <div id= "c2">
    <div class="wrapper"><h3>Phone</h3></div>
    <div class="wrapper"><div id="radiobox"><input type=text id="flexible-width-radio" /></div></div>
    <br />
    <rp-icon icon="iron-arrow-forward" circle-bg></rp-icon>  Add Phone Number
    </div>
  `;
}
 