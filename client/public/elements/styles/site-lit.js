import { css } from 'lit';

export default css`

/* Default element styles */
a {
  color: var(--tcolor-link-text);
}
a:link {
  color: var(--tcolor-link-text);
}
a:visited {
  color: var(--tcolor-link-text);
}
a:active {
  color: var(--tcolor-link-text);
}
a:hover {
    color:  var(--tcolor-link-hover-text);
}
hr {
  border-color: var(--hr-color);
  border-style: solid;
  border-width: var(--hr-weight);
  border-bottom-width: 0;
}
hr.dotted {
  border-style: dotted;
}
hr.dashed {
  border-style: dashed;
}
hr.light {
  border-color: var(--hr-color-light);
}
code {
  color: var(--tcolor-code-text);
  background-color: var(--tcolor-code-bg);
}
section, .section {
  background-color: var( --tcolor-block-bg );
  padding: 30px 20px;
  margin-bottom: 10px;
}
section.top {
  margin-top: 2px;
}

[hidden] {
  display: none !important;
}
.flex[hidden] {
  display: none !important;
}

/* color classes*/
.text-primary {
  color: var(--tcolor-primary) !important;
}
.bg-primary {
  background-color: var(--tcolor-primary) !important;
}
.text-primary50 {
  color: var(--tcolor-primary50) !important;
}
.text-secondary {
  color: var(--tcolor-secondary) !important;
}
.bg-secondary {
  background-color: var(--tcolor-secondary) !important;
}
.text-light {
  color: var(--tcolor-light) !important;
}
.bg-light {
  background-color: var(--tcolor-light) !important;
}
.text-default {
  color: var(--tcolor-text) !important;
}


/* Font size classes */
h1, .h1 {
  font-size: var(--font-size-h1);
  line-height: 1.4;
}
h2, .h2 {
  font-size: var(--font-size-h2);
}
h3, .h3 {
  font-size: var(--font-size-h3);
}
p, .p {
  font-size: var(--font-size);
}
small, .small {
  font-size: var(--font-size-small);
}
.bold {
  font-weight: var(--font-weight-bold)
}
.weight-regular {
  font-weight: var(--font-weight)
}
.italic {
  font-style: italic;
}
.border-color-primary70 {
  border-color: var(--tcolor-primary70);
}

/* Borders */
.border-top {
  border-top: 1px solid var(--tcolor-primary20);
}
.border-left {
  border-left: 1px solid var(--tcolor-primary20);
}
.border-right {
  border-right: 1px solid var(--tcolor-primary20);
}
.border-bottom {
  border-bottom: 1px solid var(--tcolor-primary20);
}
.border-white {
  border-color: #fff;
}

/* Animations */
.loading1 {
  animation: pulseColorPrimary 2s ease-in-out infinite;
  color: var(--tcolor-primary70);
}

@keyframes pulseColorPrimary {
  0% { color: var(--tcolor-primary10); }
  50% { color: var(--tcolor-primary); }
  60% { color: var(--tcolor-primary); }
  100% { color: var(--tcolor-primary10); }
}

/* chevrons, list markers and icons */
.list-dot {
  border-radius: 50%;
  background-color: var(--tcolor-secondary);
  width: 5px;
  height: 5px;
  min-width: 5px;
  min-height: 5px;
  display: inline-block;
}

iron-icon.filled-arrow {
  color: var(--tcolor-secondary);
  width: 28px;
  min-width: 28px;
  height: 28px;
  transition: .3s;
}

.list-count {
  display: table;
}

.list-count .row {
  display: table-row;
  align-items: center;
}
.list-count .count {
  display: table-cell;
  color: var(--tcolor-text);
  font-weight: var(--font-weight-bold);
  text-align: right;
  width: calc(30% - 10px);
  padding-right: 10px;
}
.list-count .text {
  display: table-cell;
  text-align: left;
}

/* Stylelized Links */
a.view-all {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  color: var(--tcolor-text);
  transition: .3s;
}
a.view-all:hover, a.view-all:hover iron-icon {
  color: var(--tcolor-link-hover-text) !important
}


/* Layout classes */
.container {
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.container.top {
  margin-top: 2px;
}
.container.collections {
  padding: 20px 0 20px 0;
}
.hlist {
  display: flex;
  align-items: center;
  border-color: var(--tcolor-border);
}
.hlist>* {
  border-right-width: 1px;
  border-color: inherit;
  border-right-style: solid;
  padding-left: 8px;
  padding-right: 8px;
}
.hlist>*:last-child {
  border-right-width: 0;
}
.col-facets {
  display: none;
}
.col-main {
  flex-grow: 1;
  margin: 0 20px
}
.mobile-browse-title {
  margin: 0 20px 20px 20px;
}
#mobile-subfacets {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#mobile-subfacets rp-dropdown {
  width: 100%;
  max-width: 350px;
}
#mobile-subfacets.is-browse-page {
  padding-left: 0;
  padding-right: 0;
}
.hidden-mobile {
  display: none;
}
.collections.loading .body .col-main {
  height: 960px;
}

/* Tablet Styles */
@media (min-width: 600px) {
  .hidden-tablet-up {
    display: none !important;
  }
  .hidden-mobile {
    display: inherit;
  }
  .col-facets {
    display: block;
    margin-left: 20px;
  }
  .col-facets > rp-link-list {
    text-align: right;
    width: 140px;
  }
  .col-facets > h1 {
    width: 140px;
  }
}


/* Desktop Styles */
@media (min-width: 800px) {
  .hidden-tablet-up {
    display: none !important;
  }
  .hidden-desktop {
    display: none !important;
  }
  .hidden-mobile {
    display: inherit;
  }
  .container {
    margin-right: 30px;
    margin-left: 30px;
    max-width: 970px;
    width: calc(100% - 60px);
  }
  .container-wide {
    max-width: 970px;
    margin-right: auto;
    margin-left: auto;
  }
  .col-main {
    margin: 0 60px;
  }
  .col-facets {
    margin-left: 60px;
  }
  .container.collections {
    padding: 40px 0 20px 0;
  }
  section, .section {
    padding: 50px 60px;
  }
    
}

@media (min-width: 1030px) {
  .container {
    margin-right: auto;
    margin-left: auto;
  }

}

/* Flex Utility Classess */
.flex {
  display: flex !important; }
.flex-row {
  flex-direction: row !important; }

.flex-column {
  flex-direction: column !important; }

.flex-row-reverse {
  flex-direction: row-reverse !important; }

.flex-column-reverse {
  flex-direction: column-reverse !important; }

.flex-wrap {
  flex-wrap: wrap !important; }

.flex-nowrap {
  flex-wrap: nowrap !important; }

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important; }

.flex-fill {
  flex: 1 1 auto !important; }

.flex-grow-0 {
  flex-grow: 0 !important; }

.flex-grow-1 {
  flex-grow: 1 !important; }

.flex-shrink-0 {
  flex-shrink: 0 !important; }

.flex-shrink-1 {
  flex-shrink: 1 !important; }

.justify-content-start {
  justify-content: flex-start !important; }

.justify-content-end {
  justify-content: flex-end !important; }

.justify-content-center {
  justify-content: center !important; }

.justify-content-between {
  justify-content: space-between !important; }

.justify-content-around {
  justify-content: space-around !important; }

.align-items-start {
  align-items: flex-start !important; }

.align-items-end {
  align-items: flex-end !important; }

.align-items-center {
  align-items: center !important; }

.align-items-baseline {
  align-items: baseline !important; }

.align-items-stretch {
  align-items: stretch !important; }

.align-content-start {
  align-content: flex-start !important; }

.align-content-end {
  align-content: flex-end !important; }

.align-content-center {
  align-content: center !important; }

.align-content-between {
  align-content: space-between !important; }

.align-content-around {
  align-content: space-around !important; }

.align-content-stretch {
  align-content: stretch !important; }

.align-self-auto {
  align-self: auto !important; }

.align-self-start {
  align-self: flex-start !important; }

.align-self-end {
  align-self: flex-end !important; }

.align-self-center {
  align-self: center !important; }

.align-self-baseline {
  align-self: baseline !important; }

.align-self-stretch {
  align-self: stretch !important; }


/* Margin and padding utility classess */
.m-0 {
  margin: 0 !important; }

.mt-0,
.my-0 {
  margin-top: 0 !important; }

.mr-0,
.mx-0 {
  margin-right: 0 !important; }

.mb-0,
.my-0 {
  margin-bottom: 0 !important; }

.ml-0,
.mx-0 {
  margin-left: 0 !important; }

.m-1 {
  margin: 0.25rem !important; }

.mt-1,
.my-1 {
  margin-top: 0.25rem !important; }

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important; }

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important; }

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important; }

.m-2 {
  margin: 0.5rem !important; }

.mt-2,
.my-2 {
  margin-top: 0.5rem !important; }

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important; }

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important; }

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important; }

.m-3 {
  margin: 1rem !important; }

.mt-3,
.my-3 {
  margin-top: 1rem !important; }

.mr-3,
.mx-3 {
  margin-right: 1rem !important; }

.mb-3,
.my-3 {
  margin-bottom: 1rem !important; }

.ml-3,
.mx-3 {
  margin-left: 1rem !important; }

.m-4 {
  margin: 1.5rem !important; }

.mt-4,
.my-4 {
  margin-top: 1.5rem !important; }

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important; }

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important; }

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important; }

.m-5 {
  margin: 3rem !important; }

.mt-5,
.my-5 {
  margin-top: 3rem !important; }

.mr-5,
.mx-5 {
  margin-right: 3rem !important; }

.mb-5,
.my-5 {
  margin-bottom: 3rem !important; }

.ml-5,
.mx-5 {
  margin-left: 3rem !important; }

.p-0 {
  padding: 0 !important; }

.pt-0,
.py-0 {
  padding-top: 0 !important; }

.pr-0,
.px-0 {
  padding-right: 0 !important; }

.pb-0,
.py-0 {
  padding-bottom: 0 !important; }

.pl-0,
.px-0 {
  padding-left: 0 !important; }

.p-1 {
  padding: 0.25rem !important; }

.pt-1,
.py-1 {
  padding-top: 0.25rem !important; }

.pr-1,
.px-1 {
  padding-right: 0.25rem !important; }

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important; }

.pl-1,
.px-1 {
  padding-left: 0.25rem !important; }

.p-2 {
  padding: 0.5rem !important; }

.pt-2,
.py-2 {
  padding-top: 0.5rem !important; }

.pr-2,
.px-2 {
  padding-right: 0.5rem !important; }

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important; }

.pl-2,
.px-2 {
  padding-left: 0.5rem !important; }

.p-3 {
  padding: 1rem !important; }

.pt-3,
.py-3 {
  padding-top: 1rem !important; }

.pr-3,
.px-3 {
  padding-right: 1rem !important; }

.pb-3,
.py-3 {
  padding-bottom: 1rem !important; }

.pl-3,
.px-3 {
  padding-left: 1rem !important; }

.p-4 {
  padding: 1.5rem !important; }

.pt-4,
.py-4 {
  padding-top: 1.5rem !important; }

.pr-4,
.px-4 {
  padding-right: 1.5rem !important; }

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important; }

.pl-4,
.px-4 {
  padding-left: 1.5rem !important; }

.p-5 {
  padding: 3rem !important; }

.pt-5,
.py-5 {
  padding-top: 3rem !important; }

.pr-5,
.px-5 {
  padding-right: 3rem !important; }

.pb-5,
.py-5 {
  padding-bottom: 3rem !important; }

.pl-5,
.px-5 {
  padding-left: 3rem !important; }


/* Other text utlity classess */
.text-center {
  text-align: center !important;
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.no-decoration {
  text-decoration: none;
}
.upper-case {
  text-transform: uppercase !important;
}`;