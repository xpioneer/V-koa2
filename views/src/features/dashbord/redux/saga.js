import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import { LIKE, NOTLIKE, BEGIN_LOAD, LOAD_SUCCES, LOAD_ERROR } from './constants'

import Api from '../api'

function* likeFetch(action){
  console.log(action, 'saga')
  yield put({type:BEGIN_LOAD})
  try{
    const isOK = yield call(Api.test, 1);
    console.log(isOK, 'saga')
    yield put({type: LOAD_SUCCES, isOK: isOK});
  }catch(e){
    yield put({type:LOAD_ERROR, message: e.message})
  }
}

function* watchLike(){
  yield takeLatest(LIKE, likeFetch)
}

function* watchNotLike(){
  yield takeLatest(NOTLIKE, likeFetch)
}


export default function* saga() {
  yield [
    fork(watchLike),
    fork(watchNotLike)
  ]
}