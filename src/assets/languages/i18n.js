import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

// Load all languages
import lang_en from './en.json';
import lang_cn from './cn.json';
/*
* How to change language in app:
* i18n.changeLanguage('en')
*
*/
i18n
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',

        resources: {
            en:lang_en,
            cn: lang_cn
        },
        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        // use debug = true in i18next init call and watch your console for the missing key output
        debug: false,

        // cache: {
        //   enabled: true
        // },

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        }
    });

export default i18n;