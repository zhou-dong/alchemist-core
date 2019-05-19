const path = require("path");

module.exports = {
    // mode: "production",
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ }
        ]
    },
    devServer: {
        contentBase: [path.resolve(__dirname, "dist"), path.resolve(__dirname, "examples")],
        port: 8080,
    },
}
