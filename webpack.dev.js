const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        watchFiles: ["./src/index.html", "./src/scripts/*.js", "./src/styles/*.css"],
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        open: {
            app: {
                name: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe'
            }
        },
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
})