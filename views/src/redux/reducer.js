import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import store from 'ROOTSTORE'

//默认需要加载的
import dashbord from 'FEATURES/dashbord/redux/reducer'
import home from 'FEATURES/home/redux/reducer'
import siderbar from 'FEATURES/siderbar/redux/reducer'
import body from 'FEATURES/body/redux/reducer'
// console.log(siderbar)
// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
const syncReducers = {
  routerReducer,
  // dashbord,
  home,
  siderbar,
  body
}

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {}

/**
 * @return {Function} rootReducer
 */
export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  })
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
export function injectReducer(key, reducer) {
  if(!asyncReducers[key]){
    asyncReducers[key] = reducer
  }
  store.replaceReducer(createRootReducer())
}
