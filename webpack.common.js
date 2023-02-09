const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
require('dotenv').config()

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        worker: path.resolve(__dirname, 'src/worker.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            excludeChunks: ['webpack']
        })
    ]
};