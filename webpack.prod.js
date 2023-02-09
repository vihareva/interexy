const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const path = require('path');
const prodConfig = {

    mode: "production",
};

module.exports = merge(commonConfig, prodConfig);