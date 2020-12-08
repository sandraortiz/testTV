import Vue from 'vue'
import Fragment from 'vue-fragment'
import PluginTextToSpeech from "@/core/plugins/TextToSpeech";
import PluginComet from "@/core/plugins/Comet";
import Logger from "@/core/plugins/Logger";
import {VueTagManager, optionsTagManager} from "@/core/plugins/gtm"
import {APP_DEBUG} from "@/core/environment";

Vue.use(Fragment.Plugin)
Vue.use(PluginTextToSpeech)
Vue.use(PluginComet)
Vue.use(Logger, {debug: APP_DEBUG})
Vue.use(VueTagManager, optionsTagManager)
