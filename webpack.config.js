module.exports = {
  mode: "development",
  rule: [
    {
      test: /\.css$/i,
      use: ["styles-loader", "css-loader"],
    },
    {
      test: /\.(woff|woff2)$/i,
      type: "asset/resource",
    }
  ],
  entry: './code/main.js'
};
