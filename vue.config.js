module.exports = {
    publicPath: './',
    // outputDir: 'dist',
    devServer: {
      // open: true,
      // host: 'localhost',
      // port: '5501',
      proxy: {
        '/test': {
          target: 'https://www.yestae.com', // 要请求的地址
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/test': ''
          }
        }
      }
    }
  };