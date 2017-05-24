/* eslint-disable no-console */

const compression = require('compression');
const express = require('express');
const path = require('path');

const webpackMiddleware = require('./middleware/webpack');

const project = require('../project.config');

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
