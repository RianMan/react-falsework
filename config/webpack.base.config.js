const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname,'../','build'),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    },'less-loader'
                ]
            },
            {
                test:/\.js$/,
                use:['babel-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebapckPlugin({
           template: path.join(__dirname,'../','template.html'),
           filename:'index.html'
        }),
    ]
}