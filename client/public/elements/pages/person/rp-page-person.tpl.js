import { html } from 'lit-element';
import styles from "../../styles/site.html";
import "../../components/rp-toast-message"


export default function render() {
return html`

<style>
  ${styles}
  :host {
    display: block;
  }
  .data.loading #hero {
    min-height: 450px;
  }
  .data #hero rp-loading {
    height: 100%;
  }
  .data section rp-loading {
    height: 150px;
    --rp-loading-color: var(--tcolor-primary);
  }
  .herotop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .heromain {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  #researchLabelChild {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }
  #about .cols {
    display: flex;
    flex-wrap: wrap;
  }
  #about .cols > div {
    width: 100%;
  }
  .pub-count {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button {
    color: var(--tcolor-primary);
    padding: 10px;
    background-color: var(--tcolor-bg-primary);
    cursor: pointer;
    transition: .3s;
    margin: 5px;
    }
  .button:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-hover-text);
  }
  rp-badge {
    margin-left: 8px;
  }
  rp-badge:first-child {
    margin-left: 0;
  }
  .hidden {
    display:none;
  }
  .load-pubs {
    height: 42px;
    font-size: var(--font-size);
    color: var(--tcolor-text);
    font-weight: var(--font-weight);
    border: 2px solid var(--tcolor-primary10);
    padding: 0 15px;
    cursor: pointer;
    transition: .3s;
    color: var(--tcolor-primary);
  }
  .load-pubs.more {
    background-color: var(--tcolor-primary10);
  }
  .load-pubs.less {
    background-color: var(--tcolor-light);
    margin-right: 8px;
  }
  .load-pubs:hover {
    background-color: var(--tcolor-hover-bg);
    border: 2px solid var(--tcolor-hover-bg);
    color: var(--tcolor-light);
  }
  .site .logo {
    vertical-align: middle;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
  .pub-icons {
    display: flex;
    align-items: center;
  }
  .pub-icons > * {
    margin-right: 10px;
  }
  .box-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .own-profile .box-title {
    flex-flow: column nowrap;
  }
  .box-title-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .own-profile .box-title-icons {
    order: -1;
  }
  #publications h3 {
    font-weight: var(--font-weight);
    font-style: italic;

  }
  .box-pubsyear {
    display: flex;
  }
  .box-pubsyear .year {
    font-weight: var(--font-weight-bold);
    width: 60px;
    min-width: 60px;
  }
  .box-pubsyear .pubs {
    flex-grow: 1;
  }
  .box-pubsyear .pubs rp-citation {
    margin-bottom: 8px;
  }
  .box-pub-buttons {
    display: flex;
  }
  .box-pub-buttons .padding {
    width: 60px;
    min-width: 60px;
  }
  .box-pub-buttons .buttons {
    display: flex;
    flex-grow: 1;
  }
  section .load-error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
  }
  /* #showMore{
    display:block;
    margin:0 auto; 
    padding:10px; 
    border-radius: 20px;
    color:white;
    background-color: transparent;
    border-color:white;
  }

  #showMore:hover{
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-hover-text);
    border-color: var(--tcolor-hover-bg);
  } */

  rp-modal ol li:before, rp-modal ol li::marker {
    text-align: left !important;
    width: 15px !important;
  }
  rp-modal ol li {
    padding-left: 5px;
  }

  @media (min-width: 800px){
    .own-profile .box-title {
      flex-flow: row nowrap;
      justify-content: space-between;
    }
    .own-profile .box-title-icons {
      justify-content: unset;
    }
    .own-profile .box-title-icons {
      order: 2;
    }
    #about .cols > div {
      width: 50%;
    }
  }
</style>


<rp-modal content-title='Edit Keywords' id="modal-keyword-edit">
  Keywords are managed via the "Fields of Research" section of your <b>UC Publication Management System</b> profile. 
  Clicking the "Edit Keywords" button below will redirect you to the UC Publication Management System. Any changes 
  made there will be reflected on your Aggie Experts profile. 

  <div style="margin-top: 15px"><b>Steps to Add/Delete Keywords:</b></div>
  <ol style="margin-top: 5px; padding-left: 20px;">
    <li>In the "About" block, select the "Edit" button located just to the right of the "Fields of Research" label.</li>
    <li>To add keywords, search for and select a subject from "Available values." To remove keywords, select an item 
      from the "Your Selection" list.</li>
    <li>Select "Save" to confirm your changes.</li>
  </ol>

  <div slot="confirmButton">
    <a style = "text-decoration:none;" target="_blank" rel="noopener" href='https://oapolicy.universityofcalifornia.edu/userprofile.html?uid=${this._getOAId()}&em=true'>
    <div class="button">Edit Keywords</div>
    </a>
  </div> 
</rp-modal>

<div class="individual top ${this.isOwnProfile ? "own-profile" : ""}">
  <div class="data ${this.individualStatus}" ?hidden="${!this.showPage() }">
    <div class="page-header container-wide">
      <rp-hero-image id="hero">

        ${this.individualStatus === 'loaded' ? html`
          <div class="hidden" slot="top" class="herotop">
            <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
            <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
          </div>
          <div slot="main" class="heromain">
            <rp-avatar size="lg"></rp-avatar>
            <h2 class="name text-secondary h1 bold mb-0 text-center">${this.getFullName()}</h2>

            <div class="text-light h3 mb-2 mt-1 text-center">
              ${this.title.title}, ${this.title.org} 
              <a href="https://org.ucdavis.edu/odr/" ?hidden="${!this.isOwnProfile}" target="_blank" rel="noopener">
                <rp-icon style="vertical-align:middle;" 
                  icon="iron-editor:mode-edit" 
                  has-text 
                  circle-bg 
                  is-link size="lg">
                  <div slot="tooltip">Edit Positions</div>
                </rp-icon> 
              </a>
            </div>

            <rp-toast-message ?hidden="${!this.isOwnProfile}"><rp-toast-message>


            ${this.getPronouns() ? html `
              <p class="text-light h3 text-center" style="margin:0">(${this.getPronouns()})</p>   
            `: html ``}
                     

            ${this.getResearchSubjects(1).length > 0 ? html`
              <div>
                <p class="text-light h3 text-center bold">
                    My research areas include:
                </p>
                  <div id="researchLabel" class="flex flex-wrap justify-content-center align-items-center">
                    <div id="researchLabelChild">
                    ${this.getResearchSubjects(this.showResearchSubjectCount).map(subject => html`
                      <rp-badge size="lg" class="text-light my-1" href="${subject.href}">
                        ${subject.bestLabel}
                      </rp-badge>
                    `)} 
                    <rp-badge size="lg" 
                      ellipsis
                      ?hidden="${(this.showResearchSubjectCount >= this.getResearchSubjects().length)}" 
                      @click="${this._showAllResearchSubjects}">
                    </rp-badge>
                    ${this.isOwnProfile ? html`
                      &nbsp;&nbsp;
                      <rp-icon style="vertical-align:middle;"
                        @click="${e => this.shadowRoot.getElementById('modal-keyword-edit').toggle()}"
                        icon="iron-editor:mode-edit" 
                        role="button"
                        circle-bg 
                        is-link has-text
                        size="lg">
                        <div slot="tooltip">Edit Keywords</div>
                      </rp-icon>
                      ` : html``
                    }
                    <br />
                    </div>
                  </div>
                  
              </div>
            ` : html``}
            <div ?hidden="${!this.isAdmin}" style="margin-top: 20px">
              <button @click="${this._onImpersonateClick}" class="load-pubs more">Impersonate</button>
            </div>
          </div>
        ` : html`
          <rp-loading slot="main">Loading Aggie Expert</rp-loading>
        `}

      </rp-hero-image>
      <rp-link-list class="bg-light p-3" 
        direction="horizontal"
        .links="${this.getPageSections()}"
        use-hash
        current-link="${this.activeSection.index}">
      </rp-link-list>
    </div>

    <div class="sections container">
      <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection('about')}">
        <h1 class="weight-regular mt-0">About</h1>
        ${this.individualStatus === 'loaded' ? html`
          <h2 hidden>Overview</h2>
            <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. </p>
          <div class="cols">
            <div>
              <div ?hidden="${this.additionalTitles.length === 0}">
                <div>
                  <h2 class="h3 mb-2">Additional Roles&nbsp;&nbsp;
                    ${this.isOwnProfile ? html`
                      <a href="https://org.ucdavis.edu/odr/" target="_blank" rel="noopener">
                        <rp-icon style="vertical-align:middle;" icon="iron-editor:mode-edit" has-text circle-bg is-link size="lg">
                          <div slot="tooltip">Edit Positions</div>
                        </rp-icon>
                      </a>
                      ` : html``
                    }
                  </h2>
                </div> 


                ${this.additionalTitles.map(t => html`<div>${t.title}, ${t.org}</div>`)}

                
              </div> 
              ${this._showSubSection('contact') ? html`
                <div>
                  <h2 class="h3 mb-2">Contact</h2>${this.getEmailAddresses().map(addr => html`<div><a href="${'mailto:' + addr}">${addr}</a></div>`)}
                </div>
              ` : html``}
              
            </div>
            <div>
              ${this._showSubSection('websites') ? html`
                <div>
                  <h2 class="h3 mb-2">Websites</h2>
                  ${this.getWebsites().map(site => html`
                    <div class="site">
                      <a href="${site.href}" target="_blank" rel="noopener">${site.icon ? html`<img class="logo" alt="site logo" src="${site.icon}">` : html``}${site.text}</a>
                    </div>`)}
                </div>
              ` : html``}
            </div>
          </div>
        ` : html`
          <rp-loading></rp-loading>
        `}

      </section>

      <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection('publications')}">
        <div class="box-title">
          <h1 class="weight-regular mt-0">Publications</h1>
          <div class="box-title-icons">
            <div class="pub-icons">
              ${this.isOwnProfile ? html`
                  <rp-icon icon="iron-editor:mode-edit" circle-bg is-link has-text size="lg" @click="${e => this.shadowRoot.getElementById('modal-pub-edit').toggle()}">
                    <div slot="tooltip">Edit Publications</div>
                  </rp-icon>
                  <rp-download-list title="Download Publications List" .choices="${this.getPubExports()}"></rp-download-list>

                ` : html``
              }
            </div>

            <div class="pub-count">${this.totalPublications}</div>
          
            <rp-modal content-title='Edit Publications' id="modal-pub-edit">
              Publication information is managed via the <b>UC Publication Management System</b>. Clicking the "Edit Publications" button below will 
              redirect you to the UC Publication Management System. Any changes made there will be reflected on your Aggie Experts profile.
              <div slot="confirmButton">
                <a style = "text-decoration:none;" target="_blank" rel="noopener" href='https://oapolicy.universityofcalifornia.edu/objects.html?as=3&am=false&cid=1&ipr=false&iqf=true'>
                <div class="button">Edit Publications</div>
                </a>
              </div> 
            </rp-modal>
          </div>
        </div>
        ${this.publicationOverviewStatus === 'loaded' ? html`
          <h2 class="mb-0">Selected Publications</h2>
          <div class="data">
            ${ Object.values(this.publicationOverview).map(pubType => html`
              <h3>${pubType.text} (${pubType.ct})</h3>
              ${this.getPubsByYear(pubType.id).map(yr => html`
                <div class="box-pubsyear">
                  <div class="year">${yr.year}</div>
                  <div class="pubs">${yr.pubs.map(pub => html`
                    <rp-citation .data="${pub}"></rp-citation>
                  `)}</div>
                </div>
              `)}

              <div class="box-pub-buttons" ?hidden="${!this.showMoreButton(pubType)}">
                <div class="padding"></div>
                <div class="buttons">
                  <button type="button" 
                    ?hidden="${!this.showLessButton(pubType)}"
                    @click="${e => this._loadPubs(pubType.id, false)}" 
                    class="load-pubs less">Show ${this.showLessCount(pubType)} less</button>

                  <button type="button" 
                    ?hidden="${!this.showMoreButton(pubType)}"
                    @click="${e => this._loadPubs(pubType.id, true)}" 
                    class="load-pubs more">Show ${this.showMoreCount(pubType)} more</button>
                </div>
              </div>
            `)}
          </div>
        ` : html``}
        ${this.publicationOverviewStatus === 'loading' ? html`
          <rp-loading>Loading publications</rp-loading>
        ` : html``}
        ${this.publicationOverviewStatus === 'error' ? html`
          <div class="load-error">
            <rp-alert>Error loading publications. Try again later.</rp-alert>
          </div>
        ` : html``}
        

      </section>

      <div ?hidden="${!APP_CONFIG.includeGrants}">

      <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection('grants')}">
        <div class="box-title">
          <h1 class="weight-regular mt-0">Grants</h1>
          <div class="box-title-icons">
            <div class="pub-icons">
              ${this.isOwnProfile ? html`
                  <rp-icon icon="iron-editor:mode-edit" circle-bg is-link has-text size="lg" @click="${e => this.shadowRoot.getElementById('modal-pub-edit').toggle()}">
                    <div slot="tooltip">Edit Publications</div>
                  </rp-icon>
                  <rp-download-list title="Download Publications List" .choices="${this.getPubExports()}"></rp-download-list>

                ` : html``
              }
            </div>

            <div class="pub-count">${this.totalGrants}</div>
        
          </div>
        </div>
        ${this.totalGrants != 0 ? html `
        <h2 class="mb-0">Selected Grants</h2>       
          <div>
            <h3 class="weight-regular mt-0">
              ${this.activeGrant.length != 0 ? html `
                <i>Active (${this.activeGrant.length})</i>
                ${this.activeGrant.map(grant => 
                    html`<h3 class="weight-regular mt-0"><a href="${grant.grant_url}">${grant.title}</a><br />
                    ${grant.yearStart} - ${grant.yearEnd} | ${grant.grant_type} | ${grant.indivRole} | ${grant.funding_agency} </h3>
                    `
                )}
              `
              :html``}
            </h3>
          </div>
          <div>
            <h3 class="weight-regular mt-0">
            ${this.inactiveGrant.length != 0  ? html `
                <i>Completed (${this.inactiveGrant.length})</i>
                ${this.inactiveGrant.map(grant => 
                    html`<h3 class="weight-regular mt-0"><a href=${grant.grant_url}>${grant.title}</a><br />
                    ${grant.yearStart} - ${grant.yearEnd} | ${grant.grant_type} | ${grant.indivRole} | ${grant.funding_agency} </h3>
                    `
                )}
            `
            :html``}
            </h3>
          </div>
        `
        :html``}
      </section>

      </div>

    </div>
  </div>
</div>

`;}
