module.exports = {
  devtool: 'source-map',
    entry: "./entry.jsx",
    output: {
        path: __dirname,
        filename: "./app/js/bundle.js"
    },   module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    }
};
