import Admin from 'FEATURES/admin'
import NotFound from 'COMPONENTS/404'

export default {
  path: '/admin',
  component: Admin,
  
  indexRoute: {
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('FEATURES/adminIndex/index').default)
      }, 'admin')
    }
  },
  
  childRoutes: [
    require('FEATURES/adminIndex/router').default,
    require('FEATURES/editArticle/router').default,
    
    // 强制“刷新”页面的 hack
    // { path: 'redirect', component: require('COMPONENTS/Redirect').default },
    
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: NotFound }
  ]
}