import pluginConfig from "./config"

const inBrowser = typeof window !== "undefined";

class TagManager {
  trackView(screenName, path) {
    if (inBrowser && pluginConfig.enabled) {

      let dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'content-view',
        'content-name': path,
        'title': screenName
      });
    }
  }
  trackEvent({event = null, category = null, action = null, label = null, value = null, nonInteraction = false, ...rest} = {}) {
    if (inBrowser && pluginConfig.enabled) {

      let dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': event || 'interaction',
        'target': category,
        'action': action,
        'target-properties': label,
        'value': value,
        'interaction-type': nonInteraction,
        ...rest
      });
    }
  }
}


export default TagManager;
