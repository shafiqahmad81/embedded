const path = require("path");

export default {
  root: path.resolve(__dirname, "./"),
  resolve: {
    alias: {},
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
};
