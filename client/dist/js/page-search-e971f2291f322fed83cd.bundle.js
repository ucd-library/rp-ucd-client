(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return l}));var s=a(2),i=a(41),n=a.n(i);function d(){return s.b`

<style>
  :host {
    display: block;
  }
  ${n.a}
</style>
<div class="search-header container bg-light top">
  <div class="px-5 py-3 bg-primary text-light"><h1 class="weight-regular">Search results for <span class="text-secondary bold">${this.textQuery}</span></h1></div>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${this.mainFacets}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
    ${this._renderFacets()}
  </div>
  <div class="col-main">
    <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading search results.</rp-alert>
    </div>
    <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
      ${this.data.map(t=>s.b`
        ${this._renderAssetPreview(t)}
        <hr class="dotted">
        `)}
      ${0==this.data.length?s.b`
      <div class="flex align-items-center justify-content-center" style="height:100%;">No search results found!</div>
      `:s.b``}
      ${this._renderPagination(this.dataTotal)}
    </div>

  </div>
</div>
</div>

`}var r=a(89);a(83),a(87),a(90);class l extends r.a{static get properties(){return{}}constructor(){super(),this.render=d.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}updated(t){if(this.doUpdated(t),t.has("mainFacet")&&"none"!=this.mainFacet){let t=!1,e=0;for(let a of this.CollectionModel.mainFacets)if(e++,a.id.toLowerCase()==this.mainFacet.toLowerCase()){t=!0,this.mainFacetIndex=e;break}t||(this.mainFacet="none",this.mainFacetIndex=0)}}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getSearchAggs()]))}}customElements.define("rp-page-search",l)}}]);