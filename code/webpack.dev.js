const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        contentBase: './dist',
        hot: false,
        inline: false,
        liveReload: false,
        historyApiFallback: true
    },
});