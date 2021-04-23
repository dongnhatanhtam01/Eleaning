const path = require("path")
// webpack.config.js
const Dotenv = require('dotenv-webpack')

module.exports = {
 plugins: [
  new Dotenv()
],
 node: {
  fs: 'empty'
 },
 entry: "./app/Main.js",
 output: {
  publicPath: "/",
  path: path.resolve(__dirname, "app"),
  filename: "bundled.js"
 },
 mode: "development",
 devtool: "source-map",
 devServer: {
  port: 3900,
  contentBase: path.join(__dirname, "app"),
  hot: true,
  historyApiFallback: { index: "index.html" }
 },
 module: {
  rules: [
   {
    test: /\.css$/,
    use: [
     { loader: "react-web-component-style-loader" },
     { loader: "css-loader" }
    ]

   },
   {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
     loader: "babel-loader",
     options: {
      presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
     }
    }
   }
  ]
 }
}