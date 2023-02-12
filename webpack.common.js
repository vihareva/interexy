const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
require('dotenv').config()

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.ts'),
        worker: path.resolve(__dirname, './src/worker.ts')
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
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                // exclude: /node_modules/,
                // parser: {
                //     amd: false
                // },
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            inject: 'body',
            excludeChunks: ['src/worker.ts'],
        })
    ]
};