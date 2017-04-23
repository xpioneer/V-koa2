import { combineReducers } from 'redux'

import { FETCH_ARTICLE_LIST, SET_ARTICLE_LIST, VIEW_ARTICLE_MORE, SET_ARTICLE_PAGER } from './constants'

const initState = [];
const initPager = {
  count: 0,
  current_page: 1,
  per_page: 1,
  total: 0,
  total_page: 0,
}

const articleList = (state = initState, action) => {
  if(action.type === SET_ARTICLE_LIST) {
    return action.list;
  }
  return state;
}

const articlePager = (state = initPager, action) => {
  if(action.type === SET_ARTICLE_PAGER) {
    return action.pager;
  }
  return state;
}

export default combineReducers({
  articleList: articleList,
  articlePager: articlePager
})
