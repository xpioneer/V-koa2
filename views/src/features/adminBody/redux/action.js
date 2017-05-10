
import {
  FETCH_USER_ARTICLE,
  SET_USER_ARTICLE,
  FETCH_SUCCESS,
} from './constants'

const fetchUserArticle = uid =>{
  return {
    type: FETCH_USER_ARTICLE,
    uid
  }
}

const setUserArticle = list =>{
  return {
    type: SET_USER_ARTICLE,
    list
  }
}



export default {
  fetchUserArticle,
  setUserArticle
}