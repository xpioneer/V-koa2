import { injectSaga } from 'ROOTSAGA'
import { injectReducer } from 'ROOTREDUCER'
import createContainer from 'UTILS/createContainer'

// const Admin = createContainer(
//   ({adminIndex}) => ({adminIndex}),
//   require('FEATURES/adminIndex/redux/action').default,
//   require('./index').default
// )

export default {
  path: 'adminindex',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      // injectReducer('adminindex', require('FEATURES/admin/redux/reducer').default)
      // injectSaga('adminindex', require("./redux/saga").default)
      cb(null, require('./index').default)
    }, 'adminindex')
  }
}

