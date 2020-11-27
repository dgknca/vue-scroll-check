const magicImporter = require('node-sass-magic-importer')

module.exports = {
  banner: true,
  output: {
    extractCSS: false
  },
  plugins: {
    vue: {
      css: true
    },
    style: {
      preprocessOptions: {
        scss: {
          importer: magicImporter()
        }
      }
    }
  }
}
