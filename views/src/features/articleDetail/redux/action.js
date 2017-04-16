
import { FETCH_ARTICLE, SET_ARTICLE } from './constants'

const fetchArticle = id =>{
  return {
    type: FETCH_ARTICLE,
    id
  }
}

const setArticle = article =>{
  return {
    type: SET_ARTICLE,
    article
  }
}

export default {
  fetchArticle,
  setArticle
}