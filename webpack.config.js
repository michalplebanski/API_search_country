const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: ["./src/index.js", "./src/style/main.scss"],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
           	 	test: /\.scss$/,
            		use: [
                		"style-loader", // creates style nodes from JS strings
                		"css-loader", // translates CSS into CommonJS
                		"sass-loader" // compiles Sass to CSS
            		]}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: "index.html",
			inject: "body"
		}),
	],
};
