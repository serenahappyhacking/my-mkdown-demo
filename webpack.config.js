const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                [
                                    '@babel/plugin-proposal-decorators',
                                    { legacy: true },
                                ],
                            ],
                        },
                    },
                ],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()], //根据项目提供HTML模板，生成新页面，并将对应的输出打包压缩输出的js，链接到页面中,This will generate a file dist/index.html
};
// 装一个css loader, style-component loader
