/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
// const proxyOrgin = 'http://192.168.8.100:8862';
const proxyOrgin = 'https://ts-admin.tianshupay.xyz';
// const proxyOrgin = 'https://ts-admin.tianshupay.xyz ';
// const proxyOrgin = 'https://admin.lexizhifu.xyz/';

export default {
  dev: {
    '/api/': {
      target: proxyOrgin,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: proxyOrgin,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: proxyOrgin,
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
