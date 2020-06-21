const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry:'./src/index.js',
  output:{
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
  },
  resolve: {
    extensions: ['.js','.css'],
  },
  module: {
    rules:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filemane: './index.html'
      }
    ),
    new MiniCSSExtractPlugin({
      filename:'index.css'
    })
    ,
  ],
  devServer:{
    hot: true,
    open: true,
  },
}