const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/login': { page: '/login' }
    }
  },
  assetPrefix: !debug ? '/primos/' : '',
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static', // this was server. but was getting addr in use error
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  }
}
