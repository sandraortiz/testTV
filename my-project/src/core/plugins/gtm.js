import VueTagManager from  '@/core/plugins/GoogleTagManager'
import {APP_GTM_ENABLED, APP_GTM_ID} from "@/core/environment";

const optionsTagManager = {
  id: APP_GTM_ID,
  enabled: APP_GTM_ENABLED
}

export {
  VueTagManager,
  optionsTagManager
}
