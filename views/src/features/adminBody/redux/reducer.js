import { combineReducers } from 'redux'

import {
  FETCH_USER_ARTICLE,
  SET_USER_ARTICLE,
} from './constants'


const userArticle = (state = [], action) =>{
  if(action.type === SET_USER_ARTICLE){
    return action.list
  }
  return state
}

export default combineReducers({
  userArticle: userArticle,
})