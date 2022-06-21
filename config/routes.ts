export default [
  {
    name: '账户管理',
    path: '/account',
    icon: 'smile',
    component: '../layouts/BasicLayout', // 用此组件包裹，第一为了统一布局，第二，可统一捕获错误
    routes: [
      {
        name: '列表',
        path: '/account/list',
        component: './account',
        hideInMenu: true,
      },
      {
        path: '/account',
        redirect: '/account/list',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/account/list',
  },
  {
    component: './404',
  },
];
