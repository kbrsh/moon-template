const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	mode: process.env.NODE_ENV,
	entry: "./src/index.js",
	output: {
		filename: process.env.NODE_ENV === "development" ? "index.js" : "index.[chunkhash:8].js",
		chunkFilename: process.env.NODE_ENV === "development" ? "[name].js" : "[name].[chunkhash:8].js",
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
					{ loader: MiniCssExtractPlugin.loader },
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
		new HtmlWebpackPlugin({
			template: "index.html",
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: "styles",
					test: /\.css$/,
					chunks: "all",
					enforce: true
				}
			}
		}
	},
	devServer: {
		contentBase: "/dist/",
		hot: true,
		open: true
	}
};
