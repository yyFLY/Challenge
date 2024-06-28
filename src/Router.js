// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Welcome';
import Dash from './Dash';
import Media from './Media';
import Login from './Login';

// 定义路由配置数组
const routes = [
  {
    path: '/',
    component: Dash,
    exact: true, // 精确匹配
  },
  {
    path: '/Welcome',
    component: Welcome,
  },
  {
    path: '/Media',
    component: Media,
  },
  {
    path: '/Login',
    component: Login,
  },
];

// 将路由配置数组转换为Route组件
const renderRoutes = () => routes.map((route, index) => (
  <Route
    key={index}
    path={route.path}
    component={route.component}
    exact={route.exact}
  />
));

export default renderRoutes;
