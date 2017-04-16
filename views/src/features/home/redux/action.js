import { FETCH_ARTICLE_LIST, SET_ARTICLE_LIST, VIEW_ARTICLE_MORE } from './constants'

const fetchList = () =>{
  return {
    type: FETCH_ARTICLE_LIST
  }
}

const setList = list =>{
  return {
    type: SET_ARTICLE_LIST,
    list
  }
}

const viewMore = id =>{
  return {
    type: VIEW_ARTICLE_MORE,
    id
  }
}


export default {
  fetchList,
  setList,
  viewMore
}