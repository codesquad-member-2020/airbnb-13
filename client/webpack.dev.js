// webpack.dev.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
    open: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['url-loader']
      },
      {
        test: /\.ts(x)?$/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'], // WDS가 serve하는 파일은 javascript
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Cards': path.resolve(__dirname, 'src/components/Cards/'),
      '@Custom': path.resolve(__dirname, 'src/components/custom/'),
      '@DateFilter': path.resolve(__dirname, 'src/components/DateFilter/'),
      '@GuestFilter': path.resolve(__dirname, 'src/components/GuestFilter/'),
      '@Modal': path.resolve(__dirname, 'src/components/Modal'),
      $Icon: path.resolve(__dirname, 'src/Icon/'),
      $Style: path.resolve(__dirname, 'src/style/'),
      $Util: path.resolve(__dirname, 'src/util/')
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env.development')
    })
  ]
};
