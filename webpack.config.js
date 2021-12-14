const path = require('path')
const inputDir = path.resolve(__dirname, 'src/index.tsx');
const outputDir = path.resolve(__dirname, 'public/assets/dist');

module.exports = {
    entry: inputDir,
    output: {
        path: outputDir,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
};