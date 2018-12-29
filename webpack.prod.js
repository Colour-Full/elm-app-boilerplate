
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: [path.resolve('./', 'src/main.js')],
    output: {
        filename: 'main.js',
        path: path.resolve('./', 'dist/public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use: [
                    {
                        loader: 'elm-webpack-loader',
                        options: {
                            cwd: __dirname,
                            debug: false,
                            optimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHardDiskPlugin(),
        new CleanWebpackPlugin(path.resolve('./', 'dist/public'))
    ],
};