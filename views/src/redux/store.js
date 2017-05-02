import { applyMiddleware, compose, createStore } from 'redux'
import { createRootReducer } from 'ROOTREDUCER'
import reduxLogger from 'redux-logger'

import { sagaMiddleware, runSaga } from 'ROOTSAGA'


const middlewares = [sagaMiddleware];
if(__DEV__){
  middlewares.push(reduxLogger())
}


const store = createStore(
  createRootReducer(),
  // window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middlewares),
    // applyMiddleware(sagaMiddleware),
    // ...enhancers
  )
)

runSaga()

export default store
