/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../../webpack.config';
import logger from '../utils/logger';

const webpackMiddleware = (app) => {
  logger.info('Starting Webpack middleware');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
  }));

  app.use(webpackHotMiddleware(compiler));
};

module.exports = (app) => {
  webpackMiddleware(app);
};
