import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import {
  FETCH_ARTICLE_LIST, SET_ARTICLE_LIST, VIEW_ARTICLE_MORE,
  BEGIN_LOAD, LOAD_SUCCES, LOAD_ERROR
} from './constants'

import Api from '../api'

function* articleListFetch(action){
  console.log(action, 'getArticleList')
  yield put({type:BEGIN_LOAD})
  try{
    const list = yield call(Api.getArticleList, 1);
    yield put({ type: SET_ARTICLE_LIST, list });
    yield put({type: LOAD_SUCCES, isOK: list});
  }catch(e){
    yield put({type:LOAD_ERROR, message: e.message})
  }
}

function* watchFetch(){
  yield takeLatest(FETCH_ARTICLE_LIST, articleListFetch)
}


export default function* saga() {
  yield [
    fork(watchFetch)
  ]
}