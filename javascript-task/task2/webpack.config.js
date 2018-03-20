  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const ExtractTextPlugin = require("extract-text-webpack-plugin");

  module.exports = {
    mode: 'development',
    entry: {
      start: './src/js/start.js',
      home: './src/js/home.js',
      matching: './src/js/matching.js',
      identity: './src/js/identity.js',
      judge_diary: './src/js/diary.js',
      record: './src/js/record.js'
  	},
  	// debug
    // devtool: 'inline-source-map',
    // webpack-dev-server 设置
    // devServer: {
    //   contentBase: './dist'
    // },
  	// 输出index.html文件
  	
    output: {
      filename: 'js/[name].main.js',
      path: path.resolve(__dirname, 'dist'),
      // publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader",
                  options: {
                    minimize: true
                  }
              }]
        },
        {
　　　　　　test: /\.html$/,
　　　　　　loader: 'html-withimg-loader'
　　　　},
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // 在开发环境使用 style-loader
              fallback: "style-loader"
          })
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/'
            }
          }
          ]
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: "index.html",
        filename: 'index.html',
        chunks: ["start"]
      }),
      new HtmlWebpackPlugin({
        template: "home.html",
        filename: 'home.html',
        chunks: ["home"]
      }),
      new HtmlWebpackPlugin({
        template: "matching.html",
        filename: "matching.html",
        chunks: ["matching"]
      }),
      new HtmlWebpackPlugin({
        template: "identity.html",
        filename: "identity.html",
        chunks: ["identity"]
      }),
      new HtmlWebpackPlugin({
        template: "judge-diary.html",
        filename: "judge-diary.html",
        chunks: ["judge_diary"]
      }),
      new HtmlWebpackPlugin({
        template: "record.html",
        filename: "record.html",
        chunks: ["record"]
      }),
      // new ExtractTextPlugin('css/loading.css')
      new ExtractTextPlugin({
       filename: 'css/[name].css'
      })
    ],
  };