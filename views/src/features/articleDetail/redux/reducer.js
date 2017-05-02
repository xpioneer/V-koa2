import { combineReducers } from 'redux'

import {
  FETCH_ARTICLE,
  SET_ARTICLE,
  SET_COMMENT,
  SUBMIT_COMMENT,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_COMMENT,
  SET_COMMENTLIST,
} from './constants'

const initArticle = {}

const article = (state = initArticle, action) =>{
  if(action.type === SET_ARTICLE){
    return action.article
  }
  return state
}

const comment = (state = '', action) =>{
  if(action.type === SET_COMMENT){
    return action.value;
  }
  if(action.type === FETCH_SUCCESS){
    return ''
  }
  return state
}

const commentSuccess = (state = {done:false, msg: ''}, action)=>{
  if(action.type === FETCH_SUCCESS || action.type === FETCH_ERROR){
    return {done:true, msg: action.msg}
  }
  return {done:false, msg: ''};
}

const commentList = (state = [], action) =>{
  if(action.type === SET_COMMENTLIST){
    return action.list;
  }
  return state
}

export default combineReducers({
  article: article,
  comment: comment,
  commentSuccess: commentSuccess,
  commentList: commentList
})