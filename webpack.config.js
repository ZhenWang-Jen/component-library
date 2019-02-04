const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },
    entry: path.join(__dirname, "./src/index.js"),
    mode: "production",
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Storybook for React'
        })
    ],
    output: {
        filename: "component-library.js", // filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: "plsrReact",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, ///\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // {
            //   test: /\.(woff|woff2|eot|ttf|otf)$/,
            //   use: [
            //     'file-loader'
            //   ]
            // },
            // {
            //   test: /\.(csv|tsv)$/,
            //   use: [
            //     'csv-loader'
            //   ]
            // },
            // {
            //   test: /\.xml$/,
            //   use: [
            //     'xml-loader'
            //   ]
            // }
        ]
    }
};