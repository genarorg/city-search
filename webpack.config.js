const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./lib/parts');
const pkg = require('./package.json');

const PATHS = {
  app: path.join(__dirname, 'src'),
  style: path.join(__dirname, 'src', 'style.scss'),
  build: path.join(__dirname, 'build'),
  images: path.join(__dirname, 'images')
};

const common = {
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      title: 'City Search'
    })
  ]
};


var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      parts.setupBabel(),
      {
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.extractBundle({name: 'vendor', entries: Object.keys(pkg.dependencies)}),
      parts.minify(),
      parts.extractCSS(PATHS.style)
    );
    break;
  default:
    config = merge(
      common,
      parts.setupBabel(),
      {devtool: 'eval-source-map'},
      parts.setupCSS(PATHS.style),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);