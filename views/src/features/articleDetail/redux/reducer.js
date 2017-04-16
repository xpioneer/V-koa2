import { combineReducers } from 'redux'

import { FETCH_ARTICLE, SET_ARTICLE } from './constants'

const initArticle = {}

const article = (state = initArticle, action) =>{
  if(action.type === SET_ARTICLE){
    return action.article
  }
  return state
}

export default combineReducers({
  article: article
})