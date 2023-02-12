const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require('path');
const devConfig = {
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
};

module.exports = merge(commonConfig, devConfig);