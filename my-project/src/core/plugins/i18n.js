import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {PoEditorUtils, CommonUtils} from '../utils'

Vue.use(VueI18Next)

PoEditorUtils.getLanguages().then(languages => {
  let i18nextOptions = {
    fallbackLng: 'en-US',
    resources: PoEditorUtils.setResourcesI18next(languages),
    debug: process.env.NODE_ENV === 'development'
  };

  const urlParameters = CommonUtils.getQuerystring()
  const languageCode = urlParameters['language'];

  if (languageCode && languages[languageCode]) {
    i18nextOptions['lng'] = languageCode;
    i18next.init(i18nextOptions)
  } else {
    i18next.use(LanguageDetector).init(i18nextOptions)
  }
})

export const i18n = new VueI18Next(i18next);

export const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
