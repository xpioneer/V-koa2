import { combineReducers } from 'redux'

import { FETCH_ARTICLE_LIST, SET_ARTICLE_LIST, VIEW_ARTICLE_MORE } from './constants'

const initState = [];

const articleList = (state = initState, action) => {
  if(action.type === SET_ARTICLE_LIST) {
    return action.list;
  }
  return state;
}

export default combineReducers({
  articleList: articleList
})
