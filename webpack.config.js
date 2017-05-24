const path = require('path');
const webpack = require('webpack');

const project = require('./project.config');

const __DEV__ = project.env === 'develop';
const __PROD__ = project.env === 'production';

const config = {
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

/* Webpack HMR */
if (__DEV__) {
  config.entry.main.push('webpack-hot-middleware/client?reload=true');

  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = config;
