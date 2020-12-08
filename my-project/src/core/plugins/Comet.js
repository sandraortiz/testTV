const setComet = (Vue) => {
  Vue.prototype.$comet = new Promise(function (resolve, reject) {
    $(function () {
      if(window.Comet){
        resolve(window.Comet)
      }

      reject(null)
    })
  })
}

const PluginComet = {
  install (Vue) {
    setComet(Vue)
  }
}

import '@/core/libs/Comet/fonts/proxima_nova.css'
import '@/core/libs/Comet/comet.css'

export default PluginComet
