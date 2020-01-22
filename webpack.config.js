const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const path = require('path')

module.exports = {
  entry: {
    'basis-aggrid-components': './src/index.js',
    'basis-aggrid-components.min': './src/index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: ['Basis', 'AgGridComponents'],
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js|$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env' ],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            '@babel/plugin-proposal-object-rest-spread',
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: function() {
                return window.parent.document.head
              },
            },
          },
          'css-loader',
          'sass-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     parser: 'postcss-scss',
          //   },
          // },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: function() {
                return window.parent.document.head
              },
            },
          },
          { loader: 'css-loader', options: { minimize: true } },
        ],
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      exclude: /node_modules/,
      parallel: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
}
