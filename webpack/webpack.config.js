const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.handlebars/,
				use: 'handlebars-loader'
			},
			{
				test: /\.(jpg|png|gif|jpeg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'static/img',
							useRelativePath: true
						}
					}
				]
			},
			{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.handlebars',
			minify: {
			  collapseWhitespace: true,
			  removeComments: true,
			  removeRedundantAttributes: true,
			  removeScriptTypeAttributes: true,
			  removeStyleLinkTypeAttributes: true,
			  useShortDoctype: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
}