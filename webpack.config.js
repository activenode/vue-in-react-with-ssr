const path = require("path");

const VueLoaderPlugin = require('vue-loader/lib/plugin') //new!


module.exports = [
    {
        mode: 'development',
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "build.js"
        },
        plugins: [new VueLoaderPlugin()], //new!
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.vue$/, //new!
                    loader: "vue-loader"  //new!
                }
            ]
        },
        stats: {
            colors: true
        },
    },
];