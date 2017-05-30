const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const project = require('./project.config');

const __DEV__ = project.env === 'develop';
const __PROD__ = project.env === 'production';

const config = {
  devtool: __DEV__ ? 'eval-source-map' : 'cheap-module-source-map',
  entry: {
    main: [
      path.resolve(project.srcDir, project.main),
    ],
  },
  output: {
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname, project.outDir),
    publicPath: project.publicPath,
  },
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(project.env),
      __DEV__,
      __PROD__,
    }),
  ],
};

/* Javascript */
config.module.rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
});

/* CSS */
const extractTextPlugin = new ExtractTextPlugin({
  disable: __DEV__,
  filename: 'styles.[contenthash].css',
  allChunks: true,
});

config.module.rules.push({
  test: /\.css$/,
  use: extractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          localIdentName: '[name]__[local]--[hash:base64:5]',
          modules: true,
          minimize: __PROD__,
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  }),
});

config.plugins.push(extractTextPlugin);

/* Webpack HMR */
if (__DEV__) {
  const hmr = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
  ];

  config.entry.main = hmr.concat(config.entry.main);

  const hotMiddlewarePlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ];

  config.plugins = config.plugins.concat(hotMiddlewarePlugins);
}

module.exports = config;
