const { merge } = require('webpack-merge')
const base = require('./webpack.base')

const path = require('path')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { // 设置热加载的相关参数
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9002
  }
})
