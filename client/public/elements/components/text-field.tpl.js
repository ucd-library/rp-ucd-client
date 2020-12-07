import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    .delete {
      background-color: Transparent;
      background-repeat:no-repeat;
      border: none;
    }
    .icon-container {
      align-items: center;
      display: inline-flex;
      padding: 1%;
    }

    .icon-container:hover {
      cursor:default;
      background-color: var(--tcolor-hover-bg);
      color: white;
    }

    .wrapper, .websites-wrapper, .contact-wrapper, .phone-wrapper {
        display: grid;
        grid-template-columns: 45% 45% 5% 5%;
        grid-gap: .25%;
        background-color: #fff;
        color: #444;
      }
      
    #rearrange{
        text-align: center;
    }
    #rearrange:hover{
        text-align: center;
        color: var(--tcolor-hover-bg);
        cursor:default;
    }

    #delete{
        vertical-align: center
    }
    #delete:hover{
        vertical-align: center;
        color: var(--tcolor-hover-bg);
        cursor:default;

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
      
    #container{
        width: 70%;
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
        flex: 1;
        border: 5px;
    }
    #flexible-width-radio { 
        border: 5px;
        flex: 1;    
    }     
    input[type=text]{
        margin: 0 0 0 5%;
        box-shadow: inset 0 0 1.5px black, 0 0 2px grey;
        padding: 2.5%;
    }      
  </style>

  <div id= "container">
    <div class="wrapper"><h3>&nbsp;&nbsp;Websites</h3></div>
    <div class="wrapper"><label>Site Name</label><label>URL</label></div>

    <div id="website-field">
      <div class="websites-wrapper">
        <div id="textbox"><input type=text id="flexible-width" /></div>
        <div id="textbox"><input type=text id="flexible-width" /></div>
        <p id="rearrange">&#8593;&#8595;</p>
      </div> 
    </div>

    <br />
    <div @click=${this._handleWebsiteField} id="website-add" class="icon-container">
      <rp-icon icon="iron-arrow-forward" circle-bg is-link></rp-icon> &nbsp;Add Website 
    </div>     
  </div>

  <div id= "container">
    <div class="wrapper"><h3>&nbsp;&nbsp;Contact</h3></div>
    <div class="wrapper"><label>Email</label></div>
    <div id="contact-field">
      <div class="contact-wrapper">
        <div id="radiobox"><input type=text id="flexible-width-radio" /><input type="radio" name="reason" value=""></div>
      </div>
    </div>
    <br />
    <div @click=${this._handleEmailField} class="icon-container">
      <rp-icon icon="iron-arrow-forward" circle-bg is-link></rp-icon> &nbsp;Add Email Address 
    </div>    
  </div>

  <div id= "container">
    <div class="wrapper"><h3>&nbsp;&nbsp;Phone</h3></div>
    <div id="phone-field">
      <div class="phone-wrapper"><div id="radiobox"><input type=text id="flexible-width-radio" /></div></div>
    </div>
    <br />
    <div @click=${this._handlePhoneField} class="icon-container">
      <rp-icon icon="iron-arrow-forward" circle-bg is-link></rp-icon> &nbsp;Add Phone Number 
    </div>
  </div>

  `;
}
 