// import { injectReducer } from 'REDUCER'
// import createContainer from 'UTIL/createContainer'

// export default {
//   path: 'dashbord',

//   /* 布局基页 */
//   getComponent (nextState, cb) {
//     require.ensure([], (require) => { cb(null, require('FEATURES/dashbord').default) }, 'dashbordView')
//   },

//   indexRoute: {
//     getComponent (nextState, cb) {
//       require.ensure([], (require) => {
//         // // 注入 Reducer
//         // injectReducer('todos', require('./redux/reducer').default)

//         // /* 组件连接 state */
//         // const DashBordContainer = createContainer(
//         //   ({ todos }) => ({ todos }),        // mapStateToProps,
//         //   require('./redux/action').default,    // mapActionCreators,
//         //   require('./index').default // 木偶组件
//         // )

//         cb(null, require('FEATURES/dashbord'))
//       }, 'dashbord')
//     }
//   }
// }

/**
 * 【拓展】
 * 在 msg 的路由中，Reducer 是在 布局基页 中注入
 * 而在这里就可以在 indexRoute 中注入
 * 这主要取决于 Reducer 的作用范围
 */



import { injectReducer } from 'ROOTREDUCER'
import createContainer from 'UTILS/createContainer'

const Dashbord = createContainer(
  ({dashbord}) => ({dashbord}), // mapStateToProps
  require('FEATURES/dashbord/redux/action').default, // mapActionCreators
  require('./index').default // 木偶组件
)

export default {
  path: 'dashbord',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      injectReducer('dashbord', require('FEATURES/dashbord/redux/reducer').default)

      cb(null, Dashbord)
    }, 'dashbord')
  }
}

