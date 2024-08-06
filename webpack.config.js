const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {

    entry: {
        "bundle":"./src/js/index.js",
        "styles":["./src/css/reset.css", "./src/css/index.css"],
    },
    output:{
        filename : "[name].js",
        path: path.resolve(__dirname,"./dist"),
        clean:true,
    },
 
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 3005,
        hot:true,
        liveReload:true
    },
    module:{
            rules:[
                {
                    test:/\.css$/,
                    use: [
                        miniCssExtractPlugin.loader, "css-loader"
                    ]
                },
            ] 
        },
    plugins:[
        new miniCssExtractPlugin({
            filename:"[name].css"
        }),
        new copyPlugin({
            patterns: [
                { from: "./src/index.html", to: "./"},
                { from: "./src/assets", to: "./assets"},
                { from: "./src/css", to:"./"},
            ],
        }),
    ]
}