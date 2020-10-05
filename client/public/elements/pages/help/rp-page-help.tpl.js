import { html } from 'lit-element';
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
  ${styles}
</style> 
<div class="help container top">
  <div class="section">
    <h1>Help</h1>
    <hr class="light">

    <div>
      <h2>About Aggie Experts</h2>
      <rp-accordian title="What is Aggie Experts?">
        <div>
        Aggie Experts is a joint pilot project between the Office of the Provost and the UC Davis Library. 
        Its purpose is to create a central registry of UC Davis faculty, researchers, experts and creators and showcase the scholarship created at the university. 
        Aggie Experts can be used as an expertise discovery platform for finding collaborators, mentors and expert opinions. 
        In the course of two years we will be expanding the registry by adding faculty from the College of Engineering and adjusting its functionality based on user feedback. 
        If you have any recommendations, you can contact us by <a href="mailto:lib-experts@ou.ad3.ucdavis.edu">email</a>.
        </div>
      </rp-accordian>
      <rp-accordian title="I am faculty at UC Davis. Why am I not in the registry?">
        <div>
        The project is currently in its pilot phase. We are doing incremental addition of departments from the College of Engineering. Aggie Experts profiles, data and functionality will be changing rapidly in 2020-21.
        </div>
      </rp-accordian>
      <rp-accordian title="Why are there so few profiles in the registry?">
        <div>
        We are currently piloting Aggie Experts, and incrementally adding departments from the College of Engineering. After each deployment we solicit feedback, conduct a review and improve the system. 
        </div>
      </rp-accordian>
      <rp-accordian title="How often do you update the data in the registry?">
        <div>
        We plan to update the data in the registry from our sources nightly. 
        </div>
      </rp-accordian>

      <h2>Questions About My Profile</h2>
      <rp-accordian title="How do I edit my registry entry?">
        <div>
        What you see as your entry is a collection of several university-vetted data sources. We wanted to make the registry available as soon as possible to enable collaborator discovery, so data editing requires logging into the original data source systems. Check the help items for instructions for editing your name/title/affiliation and publication record on this help page.
        </div>
      </rp-accordian>
      <rp-accordian title="How do I change my name/title/affiliation?">
        <div>
        Your name, title and affiliation appear as they are shown in the UC Davis online directory or in UC Path. To change them, update the <a href="https://org.ucdavis.edu/odr/">campus directory</a> listing, and once the changes are approved by directory administrators, they will be reflected in Aggie Experts at the next update. More information on the UC Davis Directory can be found <a href="https://org.ucdavis.edu/directory/index.html">here</a>. If you are not able to change the information already in the directory, you will need to contact HR directly.
        </div>
      </rp-accordian>
      <rp-accordian title="From where are you getting information about my publications?">
        <div>
        We are using the Publication Management System adopted by the California Digital Library in support of the UC Open Access policy. The sources used are Dimensions, Scopus, Crossref, Web of Science (Lite), Europe PubMed Central, PubMed, eScholarship, arXiv, RePEc, SSRN, DBLP, CiNii EN, CiNii JP, figshare.com (limited) and Google Books.
        </div>
      </rp-accordian>
      <rp-accordian title="Why are there so few / no publications in my registry entry?">
        <div>
        Most likely you have not claimed your publications in the Publication Management System we are using as a data source. Please, refer to “How do I edit my publication record?” to enrich your publication list
        </div>
      </rp-accordian>
      <rp-accordian title="How do I delete my profile?">
        <div>
        Please, <a href="mailto:experts@library.ucdavis.edu">contact us.</a>
        </div>
      </rp-accordian>
    </div>
  </div>
  

</div>

`;}
