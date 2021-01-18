const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } =require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'index.bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({ template: './index.html'}),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [//webpack的各种打包规则
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/react","@babel/env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      }
    ]
  }
}