const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const glob = require("glob");

module.exports = {
	mode: process.env.NODE_ENV,
	entry: path.join(__dirname, "/src/main.js"),
	output: {
		filename: process.env.NODE_ENV === "development" ? "main.js" : "main.[contenthash:8].js",
		path: path.join(__dirname, "/dist"),
		publicPath: "/"
	},
	resolve: {
		alias: {
			moon: process.env.NODE_ENV === "development" ? "moon/dist/moon.js" : "moon"
		},
		modules: [
			path.join(__dirname, "/src"),
			path.join(__dirname, "/node_modules")
		]
	},
	module: {
		rules: [
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
			},
			{
				test: /\.css/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === "development"
						}
					},
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: process.env.NODE_ENV === "development" ? "images/[name].[ext]" : "images/[name].[contenthash:8].[ext]"
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/src/main.html"),
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: process.env.NODE_ENV === "development" ? "main.css" : "main.[contenthash:8].css",
		}),
		new PurgeCssPlugin({
			paths: glob.sync(path.join(__dirname, "/src/**/*"), { nodir: true })
		})
	],
	optimization: {
		minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
	},
	devServer: {
		hot: true,
		open: true
	}
};
