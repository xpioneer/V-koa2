import { combineReducers } from 'redux'

import {
  FETCH_ARTICLE_RECENT, SET_ARTICLE_RECENT,
  FETCH_ARTICLE_HOT, SET_ARTICLE_HOT,
  FETCH_TAG_LIST, SET_TAG_LIST } from './constants'

const initState = {
  recent: [],
  hot: [],
  tag: []
};


const articleRecent = (state = initState.recent, action) => {
  if(action.type === SET_ARTICLE_RECENT) {
    return action.list;
  }
  return state;
}

const articleHot = (state = initState.hot, action) => {
  if(action.type === SET_ARTICLE_HOT) {
    return action.list;
  }
  return state;
}

const tagList = (state = initState.tag, action) => {
  if(action.type === SET_TAG_LIST) {
    return action.list;
  }
  return state;
}

export default combineReducers({
  articleRecent: articleRecent,
  articleHot: articleHot,
  tagList: tagList
})
