const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wearo.online/api',
      secure: false,
      changeOrigin: true,
      cookieDomainRewrite: 'https://wearo.online',
    })
  );
};