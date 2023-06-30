const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, ''),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        'Vue': 'Vue',
      }),
    ],
  },
});
