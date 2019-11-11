const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './components/index.tsx',
    },
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // for modular scss
            {
                test:/\.(s*)css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {modules: true}},
                    {loader: 'sass-loader'}
                ],
                exclude: /global.scss/
            },
            // for global scss
            {
                test:/\.(s*)css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
                include: /global.scss/
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `index.html`
        }),
    ]
};