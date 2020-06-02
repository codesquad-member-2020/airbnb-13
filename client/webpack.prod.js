const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js',
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, './dist'),
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
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
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Action': path.resolve(__dirname, 'src/action/'),
      '@Reducer': path.resolve(__dirname, 'src/reducer/'),
      '@Saga': path.resolve(__dirname, 'src/saga/'),
      '@Cards': path.resolve(__dirname, 'src/components/Cards/'),
      '@Custom': path.resolve(__dirname, 'src/components/custom/'),
      '@Filters': path.resolve(__dirname, 'src/components/Filters/'),
      '@Modal': path.resolve(__dirname, 'src/components/Modal'),
      $Icon: path.resolve(__dirname, 'src/Icon/'),
      $Style: path.resolve(__dirname, 'src/style/'),
      $Util: path.resolve(__dirname, 'src/util/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env.production')
    })
  ]
};
