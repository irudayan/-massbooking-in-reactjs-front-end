const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/getproducts', {
      target: 'http://localhost/training/payment/Atompay/example.php', // API endpoint 1
      // original api
      http://localhost/training/payment/Atompay/sample.php
      changeOrigin: true,
      pathRewrite: {
        "^/getproducts": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/massbook', {
      target: 'http://127.0.0.1:8000/api', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/massbook": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}