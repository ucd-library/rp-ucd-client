import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    height:100%;
  }
  .container.error{
    text-align:center;
    background-color:white;
    height:800px;
    background-image: url("/images/watercolorbg.png") ;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    width:100%;
    

  }
  .fw{
    width:100%;
  }
  .topic{
    color: var(--color-blue);
    font-size: 100px;

  }
  .subtext1{
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 20px;

  }
  .subtext2{
    font-size: 16px;
    font-weight:normal;


  }
  .content-space{
    position:absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    font-family: "Proxima Nova","Lucida Grande","Lucida Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight:bolder;
  }

  .horseImg{
    width: 500px;
    /* margin: 40px auto; */
    margin-top:40px;

  }

</style>  
<div class="container error">
  <div class="content-space">
    <div class="topic">404</div>
    <div class="subtext1">Oh no! This page has bolted away!</div>
    <div class="subtext2">Don't worry, we'll get you <a href="#">home</a></div>

    <img class="horseImg" src="/images/gunrock-running.png" alt="Horse Image"> 
  </div>
  <!-- <img class="fw" src="/images/watercolorbg.png" alt="Watercolor background"> -->
</div>

`;}