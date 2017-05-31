/* eslint-disable no-console */

import compression from 'compression';
import express from 'express';
import path from 'path';

import webpackMiddleware from './middleware/webpack';
import logger from './utils/logger';

import project from '../project.config';

const app = express();
const port = project.port;

app.disable('x-powered-by');

app.use(compression());

app.use(express.static(path.resolve(project.outDir)));

if (project.env === 'develop') {
  webpackMiddleware(app);
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(project.srcDir, 'index.html'));
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
