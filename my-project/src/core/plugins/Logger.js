const consoleLogger = {
  output: function output(type, ...args) {
    if (console && console[type]) console[type](args);
  },
  log: function log() {
    this.output('log', ...arguments);
  },
  warn: function warn() {
    this.output('warn', ...arguments);
  },
  error: function error() {
    this.output('error', ...arguments);
  },
}

const Logger = {
  install(Vue, options) {
    if (options.debug) {
      Vue.prototype.$logger = {...consoleLogger}
    }
  }
}

export default Logger
