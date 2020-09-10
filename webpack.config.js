const path = require('path');

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
    }
};
// 装一个css loader, style-component loader
