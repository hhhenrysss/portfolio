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
        extensions: [".ts", ".tsx"]
    },
    rules: [
        {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: `dist/index.html`,
            template: `index.html`
        }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};