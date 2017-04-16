import { applyMiddleware, compose, createStore } from 'redux'
import { createRootReducer } from 'ROOTREDUCER'

import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

// import saga from 'FEATURES/dashbord/redux/saga'


export const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(),
  // window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(
      sagaMiddleware,
      reduxLogger()
    ),
    // applyMiddleware(sagaMiddleware),
    // ...enhancers
  )
)
// sagaMiddleware.run(saga)
export default store

// ======================================================
// 增强版 history
// ======================================================
// export const history = syncHistoryWithStore(store)


// const store = applyMiddleware(
//     reduxLogger
// )(createStore)(createRootReducer())

// export default store