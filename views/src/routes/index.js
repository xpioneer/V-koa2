

import App from 'FEATURES'
import NotFound from 'COMPONENTS/404'

export default {
  path: '/',
  component: App,
  
  indexRoute: {
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('FEATURES/home/index').default)
      }, 'home')
    }
  },
  
  childRoutes: [

    // require('FEATURES/dashbord/router').default,
    ...require('FEATURES/home/router').default,
    require('FEATURES/vue/router').default,
    require('FEATURES/articleDetail/router').default,
    
    // 强制“刷新”页面的 hack
    // { path: 'redirect', component: require('COMPONENTS/Redirect').default },
    
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: NotFound }
  ]
}

// /*
//   当前路由树如下
//   ├ /
//   |
//   ├ /msg
//   ├ /msg/add
//   ├ /msg/detail/:msgId
//   ├ /msg/modify/:msgId
//   |
//   ├ /todo
//   |
//   ├ /redirect
// */

