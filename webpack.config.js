const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: "ulir-ds-raw"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['babel-plugin-styled-components'],
                    },
                },
            },
        ],
    },
    externals: {
        react: 'react',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    }
};