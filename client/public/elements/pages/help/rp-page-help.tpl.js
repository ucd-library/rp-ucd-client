import { html } from 'lit';
import styles from "../../styles/site.html";

export default function render() {
return html`

<style>
  :host {
    display: block;
  }
  rp-accordian {
    margin-bottom: 22px;
  }
  img.fw {
    width: 100%;
    height: 100%;
    margin: 15px 0;
  }
  ${styles}
</style>
<div class="help container top">
  <div class="section">
    <h1>Help</h1>
    <hr class="light">

    <div>
      <rp-accordian title-text="What is Aggie Experts?">
        <div>
        Aggie Experts is a joint pilot project between the Office of the Provost and the UC Davis Library.
        Its purpose is to create a central registry of UC Davis faculty, researchers, experts and creators and showcase the scholarship created at the university.
        Aggie Experts can be used as an expertise discovery platform for finding collaborators, mentors and expert opinions.
        In the course of two years we will be expanding the registry by adding faculty from the College of Engineering and adjusting its functionality based on user feedback.
        If you have any recommendations, you can contact us by <a href="mailto:lib-experts@ou.ad3.ucdavis.edu">email</a> or submit a request <a href="https://github.com/ucd-library/aggie-experts-public-issues/issues/new/choose">here</a>.
        </div>
      </rp-accordian>
      <rp-accordian title-text="I am faculty at UC Davis. Why am I not in the registry?">
        <div>
        The project is currently in its pilot phase. We are doing incremental addition of departments from the College of Engineering. Aggie Experts profiles, data and functionality will be changing rapidly in 2020-21.
        </div>
      </rp-accordian>
      <rp-accordian title-text="Why are there so few profiles in the registry?">
        <div>
        We are currently piloting Aggie Experts, and incrementally adding departments from the College of Engineering. After each deployment we solicit feedback, conduct a review and improve the system.
        </div>
      </rp-accordian>
      <rp-accordian title-text="How often do you update the data in the registry?">
        <div>
        At this stage we will update the data in the registry weekly. As the project progresses, we will implement nightly updates. Grants data are updated quarterly.
        </div>
      </rp-accordian>

      <rp-accordian title-text="How do I export data?">
        ${this.isLoggedIn  ? html`
          <div>
            Currently only publications can be exported for MyInfoVault, but we are planning to expand the 
            options to include other data, such as grants. You must be logged into your profile to access 
            the download functionality. In the Publications section of your profile, you will find a 
            download button located to the left of your publication count in the upper right-hand corner. 
            One of the available format options is RIS. This file can be imported into MIV.
          </div>
          `: html`
            <div>
              You must be logged in to view this information.
            </div>
          `}
      </rp-accordian>


      <rp-accordian title-text="How do I edit my registry entry?">
        <div>
        What you see as your entry is a merging of several university-vetted data sources, so data editing requires logging into the original data source systems. Check the help items for instructions for editing your <a href="#change-bio">name/title/affiliation</a> and <a href="#change-pub">publication record</a> on this help page.
        </div>
      </rp-accordian>
      <rp-accordian title-text="How do I change my name/title/affiliation?" jump-to="change-bio">
        <div>
        Your name, title and affiliation appear as they are shown in the UC Davis online directory or in UC Path. To change them, update the <a href="https://org.ucdavis.edu/odr/">campus directory</a> listing, and once the changes are approved by directory administrators, they will be reflected in Aggie Experts at the next update. More information on the UC Davis Directory can be found <a href="https://org.ucdavis.edu/directory/index.html">here</a>. If you are not able to change the information already in the directory, you will need to contact HR directly.
        </div>
      </rp-accordian>
      <rp-accordian title-text="How do I edit my research areas?" jump-to="edit-area">
        <div>
          <div>You can select Fields of Research in your Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a>. Log in into the system and click on “Edit my profile” button.</div>
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords-and-privacy.jpg" alt="Go to profile screenshot">
          Scroll down to the FAST and Fields of Research (2008) headings and click on the pencil icon.
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords1.jpg" alt="Go to edit profile screenshot">
          You will see a search and select interface for the available research subjects options.
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords2.jpg" alt="Go to research field edit screenshot">

          Click the “Add” button for your selections.
          <img style="margin-left: auto; margin-right: auto; display: block;" src="${this.imgPath}ae-profile-edit-keywords3.jpg" alt="Add your written selections">

          After selecting all the research areas you would like to add to your profile, remember to click “Save changes” at the bottom of the box.
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords4.jpg" alt="Go to research field selection screenshot">
          Note that at the present time once you make your selections in the Publication Management System, your Aggie Experts research areas will 
          be updated after the next data reload, which happens weekly. Also, once the research fields selections coming from the System are detected, 
          they will replace the automatically-generated Aggie Experts research areas with your selections.
        </div>
      </rp-accordian>
      <rp-accordian title-text="How do I add more information to what you already have in the registry?">
        <div>
          <div>Most of the data we add to Aggie Experts come from authoritative sources, and changing and updating the data in them is addressed in separate questions, eg. “<a href="#change-bio">How do I change my name/title/affiliation</a>” and “<a href="#change-pub">How do I edit my publication record</a>”. An exception is the “About” section in your profile. Currently, you can add more websites by logging into UC Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a> and clicking on the “Edit my profile” button.</div>
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords-and-privacy.jpg" alt="Go to profile screenshot">
          <div>You will be able to edit the “About” section there, which includes websites you would like to link to from Aggie Experts. In one of the future iterations of Aggie Experts we plan to bring in research overviews, if you have provided such to the university for public view. If you choose to populate them directly in the Publication Management System, it will make the overview upload easier.</div>
        </div>
      </rp-accordian>
      <rp-accordian title-text="What sources do you use for my publications?">
        <div>
          <div> We are using the Publication Management System adopted by the California Digital Library in support of the UC Open Access policy. The sources used are Dimensions, Scopus, Crossref, Web of Science (Lite), Europe PubMed Central, PubMed, eScholarship, arXiv, RePEc, SSRN, DBLP, CiNii EN, CiNii JP, figshare.com (limited) and Google Books.</div>
        </div>
      </rp-accordian>
      <rp-accordian title-text="Why are there so few / no publications in my registry entry?">
        <div>
        Most likely you have not claimed your publications in the Publication Management System we are using as a data source. Please, refer to “<a href="#change-pub">How do I edit my publication record?</a>” to enrich your publication list.
        </div>
      </rp-accordian>
      <rp-accordian title-text="How do I edit my publication record?" jump-to="change-pub">
        <div>
          <div>It is very likely that you have additional publications in your Publication Management System pending queue. To review your queue, log into your UC Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a> and go to your profile.</div>
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords-and-privacy.jpg" alt="Go to profile screenshot">
          <div>Click on either the “Claim now” or “View all” button.</div>
          <img class="fw" src="${this.imgPath}ae-publications-claim-1.jpg" alt="Go to publications tab screenshot">
          <div>Click on “Pending”</div>
          <img class="fw" src="${this.imgPath}ae-publications-claim-2.jpg" alt="Select pending screenshot">
          <div>There are several elements in the pending queue that can improve your publication list. First, you can inspect each listed publication and claim the correct ones one by one.</div>
          <img class="fw" src="${this.imgPath}ae-publications-claim-3.jpg" alt="Claim publication screenshot">
          <div>Second, you can improve <a href="#search-pub">the search for your publications.</a></div>
        </div>
      </rp-accordian>
      <rp-accordian id="search-pub" title-text="How do I improve the search results for my publications?">
        <div>
          <div>To improve the search criteria for your publications, log into your UC Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a> and go to your profile. If you are already looking at your pending publication list, jump <a href="#pending-pub">here</a>. Otherwise, follow the instructions directly below.</div>
          <div>To review your queue, log into your UC Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a> and go to your profile.</div>
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords-and-privacy.jpg" alt="Go to profile screenshot">
          <div>Click on either the “Claim now” or “View all” button.</div>
          <img class="fw" src="${this.imgPath}ae-publications-claim-1.jpg" alt="Go to publications tab screenshot">
          <div>Click on “Pending”</div>
          <img class="fw" src="${this.imgPath}ae-publications-claim-2.jpg" alt="Select pending screenshot">
          <div jump-to="pending-pub">The quickest way to refine your search criteria is to inspect proposed external id’s such as Scopus, Researcher ID from Web of Science, Dimensions, ORCID id and others. If you claim your id's, you can set the system to automatically claim publications associated with those id's.</div><br/>
          <div>Please, note that your registry entry will reflect changes to your publication list only after the next update.</div>
          <img class="fw" src="${this.imgPath}ae-publications-claim-identifiers.jpg" alt="Find Identifiers screenshot">
          <div>You can also contact us for assistance with further refining the search parameters for your publications if you are missing a significant number or if you have a lot of publications that are not yours in your pending queue.</div>
        </div>
      </rp-accordian>

      <rp-accordian title-text="What sources do you use for my grants? Why can’t I edit the grant records?">    
        <div>
          We receive the data from the university’s financial warehouse. They have been reconciled with UCOP records 
          of awards to UC Davis and are considered the official university record. As such they cannot be edited. 
          We are considering adding fields for user-generated data in the future, to clarify items such as the 
          original source of a subaward.
        </div>
      </rp-accordian>

      <rp-accordian title-text="How do I change the visibility of the fields in my profile?">
        <div>
          <div>You have granular control over the visibility of the fields in your profile. 
          To do so, log into the UC Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a> 
          and go to your account (for step-by-step instructions, see <a href="#change-pub">here</a>). 
          Next to every information segment that you have filled out, you will see an icon with an option to make a public segment internal.
          </div>
          <img class="fw" src="${this.imgPath}ae-profile-edit-privacy.jpg" alt="Go to edit mode screenshot">
          <div>
          You can also control the visibility of each publication displayed in Aggie Experts, as explained <a href="#visible-publication">here</a>.<br /><br />
          If you change the visibility of the entire profile, Aggie Experts not display any information about you, including your name.        
          </div>
        </div>
      </rp-accordian>

      <rp-accordian title-text="How do I change the visibility of a publication?" jump-to="visible-publication">
        <div>
          <div>Log into your UC Publication Management System <a href="https://oapolicy.universityofcalifornia.edu/">account</a> and go to “Edit my profile” </div>
          <img class="fw" src="${this.imgPath}ae-profile-edit-keywords-and-privacy.jpg" alt="Go to profile screenshot">
          <div>Click on the View all” button.</div>
          <img class="fw" src="${this.imgPath}ae-publications-privacy-1.jpg" alt="Go to publications tab screenshot">
          <div>Click on the Globe icon.</div>
          <img class="fw" src="${this.imgPath}ae-publications-privacy-2.jpg" alt="Hide publication screenshot">
          <div>Click on the “Private” icon.</div>
          <img class="fw" src="${this.imgPath}ae-publications-privacy-3.jpg" alt="Private publication screenshot">
        </div>
      </rp-accordian>
      <!-- 
      <rp-accordian title-text="Can I export data ${this.isLoggedIn && false ? "for import into MIV": ""}?">
        ${this.isLoggedIn && false ? "Currently only publications can be exported for MyInfoVault, but we are planning to expand the options to include other data, such as grants. You must be logged into your profile to access the download functionality. In the Publications section of your profile, you will find a download button located to the left of your publication count in the upper right-hand corner. One of the available format options is RIS. This file can be imported into MIV." : "We only allow downloads for each user's own publications.  Once logged into the system, the Publications section of your profile includes a download button located to the left of your publication count in the upper right-hand corner." }
      </rp-accordian> -->

    </div>
  </div>


</div>

`;}
