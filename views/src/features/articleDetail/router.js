import { sagaMiddleware } from 'ROOTSTORE'
import { injectReducer } from 'ROOTREDUCER'
import createContainer from 'UTILS/createContainer'

const ArticleDetail = createContainer(
  ({articleDetail}) => ({articleDetail}),
  require('FEATURES/articleDetail/redux/action').default,
  require('./index').default
)

export default {
  path: 'articledetail/:id',
  getComponent: (nextState, cb) => {
    require.ensure([], require => {
      injectReducer('articleDetail', require('FEATURES/articleDetail/redux/reducer').default)
      sagaMiddleware.run(require("./redux/saga").default)
      cb(null, ArticleDetail)
    }, 'articleDetail')
  }
}

