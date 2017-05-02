import createSagaMiddleware from 'redux-saga'
//默认需要加载的
import home from 'FEATURES/home/redux/saga'
import body from 'FEATURES/body/redux/saga'

//用于检测
const sagaHash = {
  home: 1,
  body: 1
}

export const sagaMiddleware = createSagaMiddleware()

/**
 * 按需加载时，立即注入对应的 Saga
 * @param  {String}   key
 * @param  {Function} saga
 */
export function injectSaga(key, saga) {
  if(!sagaHash[key]){
    sagaHash[key] = 1;
    sagaMiddleware.run(saga)//执行saga
  }else{
    // console.log('已经存在，无需注入Saga')
  }
}

//执行saga(执行一次)
export function runSaga(){
  sagaMiddleware.run(home);
  sagaMiddleware.run(body);
}

