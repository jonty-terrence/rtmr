const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: '0.bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
      {
        test: /\.css$/i,
        use: [
          'handlebars-loader', // handlebars loader expects raw resource string
          'extract-loader',
          'css-loader',
        ]  
      },
  ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}
