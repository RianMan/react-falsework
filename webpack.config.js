var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: '9908'
    },
    module: {
        rules:[{
            test: /\.vue$/,
            use: ['vue-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader','css-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'src/index.tpl.html',
            title:'my demo'
        })
    ]
}