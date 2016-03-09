var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        library: "draw"
    },
    watch: true,
    devtool: "cheap-inline-module-source-map",
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, /bower_components/],
            loader: "babel"
        }]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ]
};