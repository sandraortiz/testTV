const setTextToSpeech = (Vue) => {
  Vue.prototype.$textToSpeech = new Promise(function (resolve, reject) {
    $(function () {
      if (window.DE_TTS) {
        resolve(window.DE_TTS)
      }

      reject(null)
    })
  })
}

const PluginTextToSpeech = {
  install(Vue) {
    setTextToSpeech(Vue)
  }
}

export default PluginTextToSpeech
