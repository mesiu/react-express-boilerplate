const NODE_ENV = process.env.NODE_ENV || 'develop';
const PORT = process.env.PORT || 3000;

module.exports = {
  env: NODE_ENV,
  srcDir: 'src',
  outDir: 'dist',
  main: 'client',
  port: PORT,
  publicPath: '/',
};
