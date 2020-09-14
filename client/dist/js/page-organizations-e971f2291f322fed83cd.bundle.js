(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return o}));var s=e(2),i=e(41),n=e.n(i);function d(){return s.b`

<style>
  :host {
    display: block;
  }
  ${n.a}
</style>
<div class="collections organizations container bg-light top">
  ${this._renderBrowseHeader("Organizations")}
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
        <rp-alert>Error loading organizations.</rp-alert>
      </div>
      <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
        ${this.data.map(t=>s.b`
          ${this._renderAssetPreview(t)}
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`}var r=e(89);e(83),e(84);class o extends r.a{static get properties(){return{}}constructor(){super(),this.render=d.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getFacets(),this._getAzAgg()]))}async _getFacets(){let t=await this.CollectionModel.overview("organizationsAggs");this.subFacetStatus=t.state,"loaded"==t.state&&(this.subFacets=this.CollectionModel._getSubFacets("organizations",t.payload,this.currentQuery))}}customElements.define("rp-page-organizations",o)}}]);