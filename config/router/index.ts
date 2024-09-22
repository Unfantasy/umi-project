import { ROUTER_MAP } from '../../src/constants/router';
import { IRoute } from 'umi';

/**
 *
 *   umi routes: https://umijs.org/docs/routing
 *   高级路由：https://pro.ant.design/zh-CN/docs/advanced-menu
 *   layout 参数：https://procomponents.ant.design/components/layout/#faq
 */
const routes: IRoute[] = [
  // {
  //   path: '/test/test',
  //   title: '测试',
  //   routes: [
  //     {
  //       path: '/test/test',
  //       component: './test/test',
  //       title: '测试',
  //     },
  //   ],
  // },
  {
    path: '/admin',
    layout: false,
    routes: [
      {
        name: '谷歌验证',
        path: '/admin/verify',
        component: './admin/verify',
        menu: false,
      },
      {
        path: '/admin/login',
        layout: false,
        name: '登录',
        component: './admin/Login',
      },
      {
        path: '/admin',
        redirect: '/admin/login',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/admin',
    routes: [
      {
        name: '谷歌验证',
        path: '/admin/verify',
        component: './admin/verify',
        menu: false,
      },
    ],
  },
  ROUTER_MAP.home,
  ROUTER_MAP.dashboard,
  ROUTER_MAP.finance,
  ROUTER_MAP.merchant,
  ROUTER_MAP.proxy,
  ROUTER_MAP.supplier,
  ROUTER_MAP.payment,
  ROUTER_MAP.transfer,
  ROUTER_MAP.orderPayment,
  ROUTER_MAP.orderTransfer,
  ROUTER_MAP.audit,
  ROUTER_MAP.document,
  ROUTER_MAP.log,
  ROUTER_MAP.system,
  ROUTER_MAP.tools,
  // ROUTER_MAP.tenant,
  {
    path: '/mock',
    name: '模拟下单',
    icon: 'payCircle',
    layout: false,
    hideInMenu: true,
    target: '_blank',
    routes: [
      {
        path: '/mock/payment',
        name: '支付测试',
        target: '_blank',
        component: './mock/payment',
      },
      {
        path: '/mock/transfer',
        name: '代付测试',
        target: '_blank',
        component: './mock/transfer',
      },
      {
        path: 'test',
        name: '测试页面',
        component: './test/test',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/notepad',
    layout: false,
    component: './notepad',
  },
  {
    path: '/502',
    component: '502',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: '404',
  },
];
export default routes;
