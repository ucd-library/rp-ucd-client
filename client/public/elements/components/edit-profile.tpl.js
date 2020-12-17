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
      background-color: Transparent;
      border: none;
      font-family: "Proxima Nova";
      font-size: 16px;
    }

    .icon-container:hover {
      cursor:default;
      background-color: var(--tcolor-hover-bg);
      color: white;
    }

    .wrapper, .websites-wrapper {
        display:-ms-grid;
        display: grid;
        -ms-grid-columns:3fr .15fr  3fr .15fr .15fr;
        grid-template-columns: 3fr .15fr  3fr .15fr .15fr;
        background-color: #fff;
        color: #444;
      }

    .contact-wrapper{
        display:-ms-grid;
        display: grid;
        -ms-grid-columns: 2fr .15fr .3fr .15fr .15fr 3fr .15fr;
        grid-template-columns: 2fr .15fr .3fr .15fr .15fr 3fr .15fr;
        background-color: #fff;
        color: #444;
        margin-bottom: 1.75%;

      }
    .phone-wrapper {
        display:-ms-grid;
        display: grid;
        -ms-grid-columns: 2fr .15fr .3fr .15fr .15fr 3fr .15fr;
        grid-template-columns: 2fr .15fr .3fr .15fr .15fr 3fr .15fr;
        background-color: #fff;
        color: #444;
        margin-bottom: 1.75%;

      }
    .reveal-if-active {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }

    input[type="radio"]:checked ~ .reveal-if-active,
    input[type="checkbox"]:checked ~ .reveal-if-active {
      opacity: 1;
      overflow: visible;
      font-size: 16px;
    }

    #rearrange{
        text-align: center;
        vertical-align: center;
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
        display: grid;
        grid-template-columns: 3fr 3fr .15fr .15fr;
    }
      
    #container{
        width: 100%;
    }
      
    #textbox {
        padding: 2% 0 2%;
        display: flex;
        width: 100%;
    }
    
    textarea{
      border: none;
      box-shadow: inset 0 0 1.5px black, 0 0 2px grey;
      font-family: "Proxima Nova";
      font-size: var(--font-size);
      width: 97%;
      height: 10%;
      padding: 10px 15px;

    }

    #radiobox {
        padding: 2% 0 2%;
        box-sizing: border-box;
        display: flex;
    }
      
    .flexible-width {
        flex: 1;
        border: 5px;
    }
    .flexible-width-radio { 
        border: 5px;
        flex: 1;    
    }     
    input[type=text]{
        box-shadow: inset 0 0 1.5px black, 0 0 2px grey;
        padding: 2%;
        background-color: var(--tcolor-light);
        font-size: var(--font-size);
        font-family: "Proxima Nova";
    }      
    #submitBtn{
      background-color: #B3C1D1;
      font-size: 18px;
      margin: 1.5% 0 0 43%;
    }

    #submitBtn:hover{
      background-color: #008EAA;
    }

    .dotted {border: 3px dashed #B3C1D1; border-style: none none dashed; width:98%;}

  </style>
  <form method="post" name="profile_edit" id="ProfileEditForm" onsubmit="return false;">
    <div id="container"></div>
    <hr class='dotted' />

    <div class="wrapper"><h3>Overview</h3></div>
      <textarea name="overview"></textarea>
    </div>
    <div id= "container">
      <div class="wrapper"><h3>Websites</h3></div>
      <div class="wrapper"><p>Site Name</p><div></div><p>URL</p></div>
      <div id="website-field">
        ${this.webTextField.map(item => 
          html`
        <div class="websites-wrapper">
          <div id="textbox"><input type=text class="flexible-width" name=site-name id="site-name" + item/></div>
          <div></div>
          <div id="textbox"><input type=text class="flexible-width" name=url id="url" + item /></div>
          <button type='button' class='delete'><rp-icon class="sort" icon="iron-sort" circle-bg is-link></rp-icon></button>
          <button type='button' @click=${() => this._delete(this.webTextField, item)}  class='delete' ><rp-icon icon="iron-close" circle-bg is-link></rp-icon> </button>
        </div> 
        `)}
      </div>
      <button type='button' @click=${() => this._add(this.webTextField)} id="website-add" class="icon-container">
        <rp-icon icon="iron-add" circle-bg is-link></rp-icon> &nbsp;Add Website 
      </button>      
    </div>

    <div id= "container">
      <div class="wrapper"><h3>Contact</h3></div>
      <div class="wrapper"><label for="email" >Email</label></div>
      <div id="contact-field">

      ${this.emailTextField.map(item => 
          html`
        <div class="contact-wrapper">
        <input type=text for="email" class="flexible-width-radio" name="email" id="email" + item/><input for="email" type="radio" name="primary" id="primary" + item>
          <div class="reveal-if-active">Primary</div>
          <button type='button' @click=${() => this._delete(this.emailTextField, item)}  class='delete' id='delete'><rp-icon icon="iron-close" circle-bg is-link></rp-icon> </button>
        </div>
      `)}

      </div>
      <button type='button' @click=${() => this._add(this.emailTextField)} class="icon-container">
        <rp-icon icon="iron-add" circle-bg is-link></rp-icon> &nbsp;Add Email Address 
      </button>  
  
    </div>
    <br />
    <div id= "container">
      <div class="wrapper"><label for="phone" >Phone</label></div>
      <div id="phone-field">
      <div class="phone-wrapper">
          <div id="radiobox"><input type=text name="phone" class="flexible-width-radio" id="phone" /></div>
      </div>
    </div>
    
    <hr class='dotted' />

    <input id="submitBtn" class="icon-container" type="submit" value="Save Changes to Profile" @click="${() => this._submitted()}">
  </form>
  `;
}
 