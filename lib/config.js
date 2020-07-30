import esmUtils from './esm-utils.js'
import path from 'path'
import config from '@ucd-lib/rp-node-utils';

const {__dirname} = esmUtils.moduleLocation(import.meta);
const clientPackage = esmUtils.importJson(path.join(__dirname, '../client/public/package.json'));
const env = process.env;
const clientEnv = env.CLIENT_ENV || 'dev';

let serverConfig = Object.assign(config, {
  server : {
    port : env.PORT || 3000
  },
  client : {
    env : clientEnv,
    dir : clientEnv === 'prod' ? 'dist' : 'public',
    appRoutes : ['components'],
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    theme : {
      masthead : '/images/rainbow-bar.png',
      universityLogo : '/images/logo-ucd.svg',
      libraryLogo : '/images/logo-lib-white.png',
      universityUrl : 'https://ucdavis.edu',
      siteTitle : "Research Registry",
      siteSubTitle : "Prototype",
      libraryAddress : ['UC Davis Library',
                        "100 NW Quad",
                        "University of California, Davis",
                        'Davis, CA 95616',
                        '(530) 752-8792'],
      libraryEmail : "library@ucdavis.edu",
      footerColumn1 : {'title' : 'Need Help?',
                       'content' : ['<a href="#">Frequently Asked Questions</a>',
                       '<a href="#">Contact Us</a>',
                       '<a href="#">Report Issue</a>']},
      footerColumn2 : {'title': 'Terms of Use',
                       'content': ['&#169;2020 The Regents of the University of California, Davis',
                        '<a href="">Terms of Use</a>', 'Powered by <a href="#">VIVO</a>'],
                      },
      footerColumn3 : {'title': 'Header', 'content': ['Content']},
      footerLines : ['<a href="https://ucdavis.edu">University of California, Davis</a>, One Shields Avenue, Davis, CA 95616<span class="mx-2">|</span>530-752-1011',
                     '<a href="#">Question or Comments?</a> <span class="mx-2">|</span> <a href="#">Privacy & Accessibility</a><span class="mx-2">|</span><a href="#">Principles of Community</a><span class="mx-2">|</span><a href="#">University of California</a>',
                     'Copyright &#169; 2020 The Regents of the University of California, Davis campus. All rights reserved.']
    }
  }
});

export default serverConfig
