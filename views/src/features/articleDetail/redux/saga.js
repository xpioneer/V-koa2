import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import {
  FETCH_ARTICLE,
  SET_ARTICLE
} from './constants'

import Api from '../api'

function* articleFetch(action){
  console.log('获取文章详情')
  try{
    const article = yield call(Api.getArticle, action.id);
    yield put({ type: SET_ARTICLE, article })
  }catch(e){
    console.log({error: e.msg})
  }
}

function* watchFetch(){
  yield takeLatest(FETCH_ARTICLE, articleFetch)
}


export default function* saga() {
  yield [
    call(watchFetch)
  ]
}