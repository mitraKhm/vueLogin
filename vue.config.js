module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {

    proxy: {
      '/api': {
        target: 'https://alaatv.com',
        changeOrigin: true
      }
    }


  },
  lintOnSave: false
}
// '/api': {
//   target: 'https://alaatv.com',
//   changeOrigin: true
// }