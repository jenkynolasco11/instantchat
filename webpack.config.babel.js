// es6
import webpack from 'webpack'
import { join } from 'path'
import nodeExternals from 'webpack-node-externals'

// var webpack = require('webpack');
// var path = require('path');

// es6
export default {

// es5
// module.exports = {
  // devtool : 'inline-source-map',
  entry : [
    // './products/MainComponent.jsx'
    './chat/index.jsx'
  ],
  output : {
    path : join(__dirname,'public/js'),
    filename : 'bundle.js',
    // libraryTarget : 'commonjs2'
  },
  // debug : true,
  // target : 'node',
  // externals : [nodeExternals()],
  // resolve : {
  //   modulesDirectories : ['node_modules','.','chat'],
  //   extensions : ['','*.jsx']
  // },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /nodule_modules/,
        // include : [
        //   path.join(__dirname,'chat')
        // ],
        loader : 'babel',
        query : {
          presets : ['es2015','react']
        }
      }
    ]
  },
  plugins : [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress : { warnings : false }
    // })
  ]
}
