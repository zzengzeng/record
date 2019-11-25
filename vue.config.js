const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  //配置全局引入less文件
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [
  //       path.resolve(__dirname, 'src/assets/less/reset.less'),
  //     ]
  //   }
  // },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xhgj.ydx006.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}