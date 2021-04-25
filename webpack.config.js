const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, //find files that end in .tsx
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    watch: true, // keep watching for changes
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}