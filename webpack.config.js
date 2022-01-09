const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    // 添加 `.ts` 和 `.tsx` 作為可解析的擴展名。
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // 所有帶有 `.ts` 或 `.tsx` 擴展名的文件都將由 `ts-loader` 處理
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 從 JS 字符串創建 `style` 節點
          "style-loader",
          // 將 CSS 翻譯成 CommonJS
          "css-loader",
          // 將 Sass 編譯為 CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
