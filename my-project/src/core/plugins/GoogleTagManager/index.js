import TagManager from "./TagManager";
import pluginConfig from "./config"
import {loadScript} from "./utils";


let installed = false;

const install = function (Vue, options) {
  if (installed) return;

  try {
    Vue.prototype.$gtm = new TagManager();

    options = {...pluginConfig, ...options}

    pluginConfig.debug = options.debug;
    pluginConfig.enabled = options.enabled;
    pluginConfig.defer = options.defer;
    pluginConfig.queryParams = options.queryParams;
    pluginConfig.id = options.id;

    if (options.enabled) {
      loadScript(options.id, options);
    }

    installed = true;
  } catch (e) {
    console.warn(e)
  }
};

export default {
  install
};
