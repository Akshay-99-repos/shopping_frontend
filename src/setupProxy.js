const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/app1', {
      target: 'http://shoppingappuserservice-env.eba-x22nuz2r.us-east-2.elasticbeanstalk.com', // API endpoint 1
    //   target: 'http://localhost:8082',
      changeOrigin: true,
      pathRewrite: {
        "^/app1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/app2', {
      target: 'http://shoppingappproductservice-env.eba-2sppmnhk.us-east-2.elasticbeanstalk.com', // API endpoint 2
    //   target: 'http://localhost:8083',
      changeOrigin: true,
      pathRewrite: {
        "^/app2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}