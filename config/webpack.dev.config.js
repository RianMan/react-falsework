const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = webpackMerge(baseConfig,{
    mode:'development',
    devServer:{
        contentBase: path.join(__dirname,'build'),
        open: true,
        hot: true,
        port: 9009,
    },
    plugins:[
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development'),
        })
    ]
})