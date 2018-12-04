const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const injectManifestPlugin = new InjectManifest({
  swSrc: path.join('src', 'sw.js')
})

const generateSWPlugin = new GenerateSW({
  swDest: 'sw.js',
  clientsClaim: true,
  skipWaiting: true
})

const serviceWorkerPlugin = new ServiceWorkerWebpackPlugin({
  entry: path.join(__dirname, 'src/sw.js'),
})

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new CleanPlugin(['dist']), htmlPlugin, serviceWorkerPlugin]
}
