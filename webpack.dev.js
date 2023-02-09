const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require('path');
const devConfig = {
    mode: "development",
};

module.exports = merge(commonConfig, devConfig);