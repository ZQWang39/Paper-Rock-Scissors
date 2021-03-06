
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        library: 'Client',
        libraryTarget:'var',
        path: path.resolve(__dirname, "dist")
    },
    devServer:{
        port: 8080
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg)$/i,
                use: [{
                  loader:"file-loader",// "url-loader"
                  options:{
                    //limit:10*1024,
                    name:"[hash:6].[ext]",
                    outputPath:"assets/img",
                    publicPath:"./assets/img"
                  }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        
         new FaviconsWebpackPlugin('./src/img/logo.png'),
         
    ]
}
