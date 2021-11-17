import { html, css } from 'lit';
import vmTeaserCss from "@ucd-lib/theme-sass/4_component/_vm-teaser.css.js"
import spaceCss from "@ucd-lib/theme-sass/6_utility/_u-space.css.js"
import iconCss from "@ucd-lib/theme-sass/4_component/_icons.css.js"
import textCss from "@ucd-lib/theme-sass/2_base_class/_text.css.js"
import listCss from "@ucd-lib/theme-sass/2_base_class/_lists.css.js"
import linksCss from "@ucd-lib/theme-sass/1_base_html/_links.css.js"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
  `;

  return [vmTeaserCss, spaceCss, iconCss, textCss, listCss, linksCss, elementStyles];
}

export function render() { 
return html`

${this.results.results.map(person => html`
  <article class="vm-teaser   ">
    <div class="vm-teaser__figure">
      <a href="${person.href}">
        <img 
          ?hidden="${!person.photoUrl}"
          src="${person.photoUrl}" 
          alt="News photo" 
          class="lazyload lazyload--loaded" width="135" height="135" loading="lazy">
        <rp-avatar 
          ?hidden="${person.photoUrl}"
          size="lg">
        </rp-avatar>
      </a>
    </div>
    <div class="vm-teaser__body">
      <h3 class="vm-teaser__title">
        <a href="${person.href}">${person.fullName}</a>
      </h3>
      <ul class="u-space-mb--small list--pipe">
        ${person.titles.map(title => html`<li>${title}</li>`)}
      </ul>
      <ul class="vm-teaser__contact list--pipe text--smaller">
        <!-- <li>
          <a class="icon icon--link icon--phone" href="#">(530) 752-8126</a>
        </li> -->
        <li ?hidden="${!person.email}">
          <a class="icon icon--link icon--envelope" href="mailto:${person.email}">${person.email}</a>
        </li>
        <!-- <li>
          <a class="icon icon--link icon--web" href="#">www.janeka.com</a>
        </li> -->
      </ul>
      <!-- <div class="icon icon--location">Suite 12, Jackson Building</div> -->
      <div><span class="icon icon--map u-space-mb--small">One Shields Ave, Davis, CA 95666</span></div>
      <!-- <div class="text--smaller u-space-mb"><strong>Office Hours</strong> 9AM-5PM</div> -->
    </div>
  </article>
`)}

`;}