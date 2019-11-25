const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const path = require("path");
//全局文件路径
const glob = require("glob-all");
const env = process.env.NODE_ENV;
function resolve(dir) {
  return path.join(__dirname, dir)
}
//用于生产环境去除多余的css
const PurgecssPlugin = require("purgecss-webpack-plugin");
module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                cube: {
                  name: 'chunk-cube', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?cube(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  },

  configureWebpack: (config) => {
    console.log(env)
    if (env !== 'development' || env !== 'test') {
      console.log(111)
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8,
      }));
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          },
        })
      );
      config.plugins.push(new PurgecssPlugin({
        paths: glob.sync([path.join(__dirname, "./**/*.vue")]),
        extractors: [
          {extractor: class Extractor {
              static extract(content) {
                const validSection = content.replace(
                  /<style([\s\S]*?)<\/style>+/gim,
                  ""
                );
                return validSection.match(/[A-Za-z0-9-_:/]+/g) || [];
              }
            },
            extensions: ["html", "vue"]
          }
        ],
        whitelist: ["html", "body"],
        whitelistPatterns: [/el-.*/],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
      }))
    }
  },
}
