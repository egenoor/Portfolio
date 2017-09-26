var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve("/var/www/html"),
        filename:  './app.bundle.js',
        publicPath: "/"
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "/node_modules/"),
                use: 'babel-loader'
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        host: '0.0.0.0',
        publicPath: "/",
        historyApiFallback: true,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Portfolio",
            minify:{
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/views/index.html"
            }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};