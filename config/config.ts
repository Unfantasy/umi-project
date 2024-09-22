// https://umijs.org/config/
import { defineConfig } from 'umi';
// import WindiCSS from 'windicss-webpack-plugin';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './router';

const { REACT_APP_ENV, NODE_ENV } = process.env;

const isDev = NODE_ENV === 'development';

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // chainWebpack(config, { webpack }) {
  //   config.plugin('windicss').use(WindiCSS);
  // },
  // // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  webpack5: {},
  exportStatic: {},

  // 去除console.log
  extraBabelPlugins: !isDev ? [['transform-remove-console', { exclude: ['error', 'warn'] }]] : [],
});
