const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
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
