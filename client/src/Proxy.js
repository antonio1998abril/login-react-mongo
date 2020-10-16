///esto sirvve para correr react y el archivo server al mismo tiempo
// localhost:3000 y locahost:5000
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/users',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};