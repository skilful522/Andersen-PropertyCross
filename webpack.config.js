const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['whatwg-fetch', '@babel/polyfill', './src/index.tsx'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index-bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: path.join(__dirname, '/dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        },
                    },
                    { loader: 'postcss-loader' },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.gif',
        }),
    ],
};
