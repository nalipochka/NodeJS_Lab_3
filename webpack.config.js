const webpack  = require("webpack");

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./app.js",
    output:{
        path: __dirname+"/dist",
        filename:"bundle.js"
    }
}