import {PoEditorConstants} from '../constants'
import {CoreService} from '../services'

const getDefaultLanguages = () => {
  return CoreService.loadJsonFromPath(PoEditorConstants.DEFAULT_LANGUAGES_PATH)
}

const getLanguages = async () => {
  const languages = {};
  const defaultLanguages = await getDefaultLanguages();
  for (const language in defaultLanguages) {
    if (Object.prototype.hasOwnProperty.call(defaultLanguages, language)) {
      languages[language] = await CoreService.loadJsonFromPath(defaultLanguages[language])
    }
  }

  return languages;
}

const setResourcesI18next = languages => {
  const resources = {};

  for (const language in languages) {
    if (Object.prototype.hasOwnProperty.call(languages, language)) {
      resources[language] = {translation: languages[language]}
    }
  }
  return resources
}


export default {
  getDefaultLanguages,
  getLanguages,
  setResourcesI18next
}
