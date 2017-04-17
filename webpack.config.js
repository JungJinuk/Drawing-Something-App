var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.jsx',
        './src/style.css'
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.resolve('./src')
    },

    plugins:[
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress:{
            warnings: true
          }
        })
    ]

};
