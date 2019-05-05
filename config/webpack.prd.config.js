const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');


module.exports = webpackMerge(baseConfig,{
    mode:"production",
    plugins:[
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production'),
        })
    ]
})