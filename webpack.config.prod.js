var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: debug ? 'source-map':null,
    entry: [
        'webpack-hot-middleware/client',
        './client/App.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress:{
                warnings:false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV':JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'client')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=25000',
                include: path.join(__dirname,'client','images')
            },
            {
                test: /\.svg$/,
                loader:'file',
                include: path.join(__dirname,'client','images')
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
};
