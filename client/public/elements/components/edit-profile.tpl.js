import { html } from 'lit-element';

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

    .wrapper {
      display: flex;
      align-items: center;
    }

    .textbox {
      flex: 1;
      padding: 3px;
    }

    .wrapper .textbox input[type="text"] {
      width: 100%;
      box-sizing: border-box;
    }

    .wrapper .textbox.maxwidth {
      flex: initial;
    }

    .wrapper .textbox.maxwidth input[type="text"] {
      width: 350px;
    }

    .reveal-if-active {
      display: none;
    }

    input[type="radio"]:checked ~ .reveal-if-active,
    input[type="checkbox"]:checked ~ .reveal-if-active {
      display: block
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


    #delete {
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
      
    .container{
        width: 100%;
    }
    
    textarea {
      border: 1px solid var(--tcolor-primary20);
      font-family      : proxima-nova,"Lucida Grande","Lucida Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size        : var(--font-size);
      font-weight      : var(--font-weight);
      line-height      : calc(var(--font-size) * 1.625);
      padding: 10px 15px;
      width: 100%;
      min-height: 100px;
      box-sizing: border-box;
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
    /* .flexible-width-radio { 
        border: 5px;
        flex: 1;    
    } */

    input[type=text] {
      border: 1px solid var(--tcolor-primary20);
      font-family      : proxima-nova,"Lucida Grande","Lucida Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size        : var(--font-size);
      font-weight      : var(--font-weight);
      line-height      : calc(var(--font-size) * 1.625);
      padding: 5px;
    }

    input[type=radio] {
      height: 20px;
      width: 20px;
    }

    #submitBtn {
      background-color: #B3C1D1;
      font-size: 18px;
      margin: 1.5% 0 0 43%;
    }

    #submitBtn:hover{
      background-color: #008EAA;
    }

    .dotted-break {
      border-bottom: 1px dashed var(--hr-color-light);
    }

    button {
      cursor: pointer;
      border: none;
      background: transparent;
    }

    .icon-button {
      display: flex;
      align-items: center;
    }

    .icon-button span {
      color: var(--tcolor-primary);
      font-weight: bold;
    }

    .icon-button iron-icon {
      margin-right: 5px;
      color: var(--tcolor-secondary);
    }

  </style>
    <div id="container"></div>
    <div class="dotted-break" ></div>

    <div class="wrapper"><h3>Overview</h3></div>
      <textarea name="overview" .value="${this.overviewText}"></textarea>
    </div>

    <div class="container">
      <div class="wrapper"><h3>Contact</h3></div>
      <div class="wrapper">
        <label for="email" >Email</label>
      </div>
      <div id="contact-field">

      ${this.emailTextField.map((item, index) => 
          html`
        <div class="wrapper">
          <div class="textbox maxwidth">
          <input type=text 
            class="flexible-width-radio" 
            name="email" 
            id="emailTextField-value-${index}" 
            .value="${item.value}" 
            @change="${this._onArrayValueChange}"
            />
          </div>
          <input type="radio" name="primary" id="primary-${index}" ?checked="${item.default}" />
          <div class="reveal-if-active">Primary</div>
          <button type='button' @click=${() => this._delete(this.emailTextField, index)}  class='delete' id='delete'>
            <rp-icon icon="iron-close" circle-bg is-link></rp-icon> 
          </button>
        </div>
      `)}

      </div>
      <button type="button" class="icon-button" @click="${this._addEmail}" style="margin-top: 5px" >
        <iron-icon icon="add-circle" circle-bg ></iron-icon> <span>Add Email</span> 
      </button>  
    </div>

    <div class="container">
      <div class="wrapper"><label for="phone" >Phone</label></div>
      <div id="phone-field">
      <div class="phone-wrapper">
          <div id="radiobox"><input type=text name="phone" class="flexible-width-radio" id="phone" /></div>
      </div>
    </div>

    <div class="container">
      <div class="wrapper">
        <h3>Websites</h3>
      </div>
      <div class="wrapper">
        <div style="flex:1">Site Name</div>
        <div style="flex:1">URL</div>
        <div style="width:42px"></div>
      </div>
      <div id="website-field">
        ${this.webTextField.map((item, index) => 
          html`
        <div class="wrapper">
          <div class="textbox">
            <input type=text 
              class="flexible-width" 
              name=site-name 
              id="webTextField-label-${index}" 
              .value="${item.label}"
              @change="${this._onArrayValueChange}" />
          </div>
          
          <div class="textbox">
            <input type=text 
              class="flexible-width" 
              name="url" 
              id="webTextField-url-${index}" 
              .value="${item.url}"
              @change="${this._onArrayValueChange}" />
          </div>

          <button type='button' class='delete'>
            <rp-icon class="sort" icon="iron-swap-vert" is-link></rp-icon>
          </button>

          <button type='button' @click=${() => this._delete(this.webTextField, index)}  class='delete' >
            <rp-icon icon="iron-close" circle-bg is-link></rp-icon>
          </button>
        </div> 
        `)}
      </div>
      <button type='button' @click=${this._addWebsite} id="website-add" class="icon-container">
        <rp-icon icon="iron-add" circle-bg is-link></rp-icon> &nbsp;Add Website 
      </button>      
    </div>
    
    <hr class='dotted' />

    <button class="icon-container" @click="${this._onSaveClicked}">Save Changes to Profile</button>
  `;
}
 