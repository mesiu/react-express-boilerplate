/* eslint-disable no-console */

import compression from 'compression';
import express from 'express';
import path from 'path';

import webpackMiddleware from './middleware/webpack';

import project from '../project.config';

const app = express();
const port = project.port;

app.use(compression());

app.use(express.static(path.resolve(project.outDir)));

if (project.env === 'develop') {
  webpackMiddleware(app);
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(project.srcDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
