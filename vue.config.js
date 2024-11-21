const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
  },

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
})