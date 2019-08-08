const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: process.env.NODE_ENV,
	entry: "./src/index.js",
	output: {
		filename: "index.[chunkhash:8].js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [ { loader: "html-loader" } ]
			},
			{
				test: /\.css/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"]
						}
					},
					{ loader: "moon-loader" }
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "index.html",
			filename: "dist/index.html"
		})
	]
};
