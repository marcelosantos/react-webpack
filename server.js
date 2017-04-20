'use strict'

const webpack = require('webpack')
const WebPackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebPackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(8083, (erro) => {
    if(erro){
        return console.log(erro)
    }

    console.log('Listening on :8083')
})