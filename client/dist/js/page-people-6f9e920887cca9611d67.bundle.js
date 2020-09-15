(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return l}));var a=s(2),i=s(41),d=s.n(i);function o(){return a.b`

<style>
  :host {
    display: block;
  }
  ${d.a}
</style>
<div class="collections container bg-light top">
  ${this._renderBrowseHeader("People")}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading people.</rp-alert>
      </div>
      <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
        ${this.data.map(t=>a.b`
          ${this._renderAssetPreview(t)}
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`}var n=s(96);s(89),s(90);class l extends n.a{static get properties(){return{}}constructor(){super(),this.render=o.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getFacets(),this._getAzAgg()]))}async _getFacets(){let t=await this.CollectionModel.overview("peopleAggs");this.subFacetStatus=t.state,"loaded"==t.state&&(console.log("peopleaggs",t),this.subFacets=this.CollectionModel._getSubFacets("people",t.payload,this.currentQuery))}}customElements.define("rp-page-people",l)}}]);