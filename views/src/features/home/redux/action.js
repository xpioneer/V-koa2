import { FETCH_ARTICLE_LIST, SET_ARTICLE_LIST, VIEW_ARTICLE_MORE } from './constants'

const fetchList = param =>{
  return {
    type: FETCH_ARTICLE_LIST,
    param
  }
}

const setList = list =>{
  return {
    type: SET_ARTICLE_LIST,
    list
  }
}

const setPager = pager =>{
  return {
    type: SET_ARTICLE_PAGER,
    pager
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