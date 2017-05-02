
import {
  FETCH_ARTICLE,
  SET_ARTICLE,
  SET_COMMENT,
  SUBMIT_COMMENT,
  FETCH_SUCCESS,
  FETCH_COMMENT,
  SET_COMMENTLIST,
} from './constants'

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

/*添加评论*/
const setComment = value =>{
  console.log(value)
  return {
    type: SET_COMMENT,
    value
  }
}

const submitComment = (id, value) =>{
  return {
    type: SUBMIT_COMMENT,
    id,
    value
  }
}
const commentDone = msg =>{
  return {
    type: FETCH_SUCCESS,
    msg
  }
}

/*获取文章的评论*/
const fetchComment = id =>{
  return {
    type: FETCH_COMMENT,
    id
  }
}

const setCommentList = list =>{
  return {
    type: SET_COMMENTLIST,
    list
  }
}


export default {
  fetchArticle,
  setArticle,
  submitComment,
  setComment,
  commentDone,
  fetchComment,
  setCommentList
}