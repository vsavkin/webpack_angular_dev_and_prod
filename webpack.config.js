const path = require('path');
const ngtools = require('@ngtools/webpack');
const webpack = require("webpack");

module.exports = function (env) {
  const prod = env && env.prod === 'true';
  return {
    devtool: 'sourcemap',
    resolve: {
      extensions: ['.ts', '.js']
    },
    entry: {
      main: './src/main.ts'
    },
    output: {
      path: path.join(process.cwd(), 'dist'),
      publicPath: 'dist/',
      filename: "[name].js"
    },
    plugins: [
      new ngtools.AotPlugin({
        tsConfigPath: './tsconfig.json',
        mainPath: "./src/main.ts",
        hostReplacementPaths: {
          'src/environments/environment.ts': prod ? 'src/environments/environment.prod.ts' : 'src/environments/environment.ts'
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loader: '@ngtools/webpack'
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        }
      ]
    },

    devServer: {
      historyApiFallback: true
    }
  }
};