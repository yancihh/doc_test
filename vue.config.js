
module.exports = {
  publicPath: './',
  devServer: {
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      '/api': {
        target: 'http://127.0.0.1:80', //填写请求的目标地址
        changOrigin: true, //允许跨域
      }
    }
  }
}