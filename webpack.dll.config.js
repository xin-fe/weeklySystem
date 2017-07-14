

const webpack = require('webpack');
const path = require('path');


const vendors = [
    'react',
    'react-dom',
    'react-router',
    'antd'
]

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "Dll.js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "manifest.json"),
            name: "[name]_[hash]",
            context: __dirname
        })
    ]
};