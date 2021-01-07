module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true,
      },
    },
  },
};
