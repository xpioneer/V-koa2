import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import {
  FETCH_ARTICLE_LIST, SET_ARTICLE_LIST, VIEW_ARTICLE_MORE, SET_ARTICLE_PAGER,
  BEGIN_LOAD, LOAD_SUCCES, LOAD_ERROR
} from './constants'

import Api from '../api'

function* articleListFetch(action){
  yield put({type:BEGIN_LOAD})
  try{
    const r = yield call(Api.getAllArticle, action.param);
    yield put({type: SET_ARTICLE_LIST, list: r.data });
    yield put({type: SET_ARTICLE_PAGER, pager: r.meta });
    yield put({type: LOAD_SUCCES, isOK: list});
  }catch(e){
    yield put({type:LOAD_ERROR, msg: 'e.msg'})
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