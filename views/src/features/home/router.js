import { sagaMiddleware } from 'ROOTSTORE'
import { injectReducer } from 'ROOTREDUCER'
import createContainer from 'UTILS/createContainer'

const Home = createContainer(
  ({home}) => ({home}),
  require('FEATURES/home/redux/action').default,
  require('./index').default
)

export default {
  path: 'home',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      injectReducer('home', require('FEATURES/home/redux/reducer').default)
      sagaMiddleware.run(require("./redux/saga").default)
      cb(null, Home)
    }, 'home')
  }
}
