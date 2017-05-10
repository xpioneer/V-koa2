import { takeEvery, takeLatest } from 'redux-saga'
import { put, fork, take, call } from 'redux-saga/effects'

import {
  FETCH_ARTICLE,
  SET_ARTICLE,
  SUBMIT_COMMENT,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_COMMENT,
  SET_COMMENTLIST,
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


/*添加评论*/
function* submitComment(action){
  try{
    const result = yield call(Api.submitComment, action);
    yield put({ type: FETCH_SUCCESS, msg: result.msg });
  }catch(e){
    yield put({type: FETCH_ERROR, msg:'评论失败' })
  }
}

function* watchComment(){
  yield takeLatest(SUBMIT_COMMENT, submitComment)
}

/*获取文章评论*/
function* commentFetch(action){
  try{
    const list = yield call(Api.getCommentList, action.id);
    yield put({ type: SET_COMMENTLIST, list })
  }catch(e){
    console.log({error: e.msg})
  }
}

function* watchCommentList(){
  yield takeLatest(FETCH_COMMENT, commentFetch)
}


export default function* saga() {
  yield [
    call(watchFetch),
    call(watchComment),
    call(watchCommentList)
  ]
}