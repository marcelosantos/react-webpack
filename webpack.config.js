'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    //mapa do código para facilitar debug
    devtool: 'source-map',

    //entrada
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://192.168.40.50:8083/',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index'),        
    ],

    //saída
    output:{ 
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    //plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module:{
        loaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel-loader',            
        }]
    }    
}