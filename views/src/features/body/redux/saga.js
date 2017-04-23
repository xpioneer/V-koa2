import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import {
  FETCH_ARTICLE_RECENT, SET_ARTICLE_RECENT,
  FETCH_ARTICLE_HOT, SET_ARTICLE_HOT,
  FETCH_TAG_LIST, SET_TAG_LIST,
  BEGIN_LOAD, LOAD_SUCCES, LOAD_ERROR
} from './constants'

import Api from '../api'

function* articleHotFetch(action){
  // yield put({type:BEGIN_LOAD})
  let api = action.type === FETCH_ARTICLE_RECENT ? Api.getRecentList : Api.getHotList;
  let type = action.type === FETCH_ARTICLE_RECENT ? SET_ARTICLE_RECENT : SET_ARTICLE_HOT;
  try{
    const list = yield call(api);
    yield put({type: type, list});
  }catch(e){
    yield put({type:LOAD_ERROR, msg: e.msg})
  }
}

//get tagList
function* tagListFetch(action){
  // yield put({type:BEGIN_LOAD})
  try{
    const list = yield call(Api.getTagList);
    yield put({type: SET_TAG_LIST, list});
  }catch(e){
    yield put({type:LOAD_ERROR, msg: e.msg})
  }
}

function* watchFetchRecent(){
  yield takeLatest(FETCH_ARTICLE_RECENT, articleHotFetch)
}

function* watchFetchHot(){
  yield takeLatest(FETCH_ARTICLE_HOT, articleHotFetch)
}

function* watchFetchTag(){
  yield takeLatest(FETCH_TAG_LIST, tagListFetch)
}

export default function* saga() {
  yield [
    fork(watchFetchRecent),
    fork(watchFetchHot),
    fork(watchFetchTag)
  ]
}