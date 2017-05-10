import { injectSaga } from 'ROOTSAGA'
import { injectReducer } from 'ROOTREDUCER'
import createContainer from 'UTILS/createContainer'

const Admin = createContainer(
  ({admin}) => ({admin}),
  require('FEATURES/admin/redux/action').default,
  require('./index').default
)

export default {
  path: 'admin',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      injectReducer('admin', require('FEATURES/admin/redux/reducer').default)
      injectSaga('admin', require("./redux/saga").default)
      cb(null, Admin)
    }, 'admin')
  }
}

