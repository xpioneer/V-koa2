import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import {
  FETCH_USER_ARTICLE,
  SET_USER_ARTICLE,
} from './constants'

import Api from '../api'

function* userArticleFetch(action){
  try{
    const article = yield call(Api.getRecentList, action.id);
    yield put({ type: SET_USER_ARTICLE, article })
  }catch(e){
    console.log({error: e.msg})
  }
}

function* watchFetch(){
  yield takeLatest(FETCH_USER_ARTICLE, userArticleFetch)
}



export default function* saga() {
  yield [
    call(watchFetch)
  ]
}