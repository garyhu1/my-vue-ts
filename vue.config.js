module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  assetsDir: "./",
  indexPath: "index.html",
  devServer: {
    port: 8639, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   "/foo": {
    //     target: "<other_url>"
    //   }
    // }
    // 配置多个代理
    proxy: {
      '/proxyApi': {
        target: 'https://www.easy-mock.com/mock/5cf62d26d415ad690a53734a',
        changeOrigin: true,
        pathRewrite: {
          '/proxyApi': ''
        }
      }
    }
  }
};
