import {
  FETCH_ARTICLE_RECENT, SET_ARTICLE_RECENT,
  FETCH_ARTICLE_HOT, SET_ARTICLE_HOT,
  FETCH_TAG_LIST, SET_TAG_LIST } from './constants'

const fetchRecentList = () =>{
  return {
    type: FETCH_ARTICLE_RECENT
  }
}

const setRecentList = list =>{
  return {
    type: SET_ARTICLE_RECENT,
    list
  }
}

const fetchHotList = () =>{
  return {
    type: FETCH_ARTICLE_HOT
  }
}

const setHotList = list =>{
  return {
    type: SET_ARTICLE_HOT,
    list
  }
}

const fetchTagList = () =>{
  return {
    type: FETCH_TAG_LIST
  }
}

const setTagList = list =>{
  return {
    type: SET_TAG_LIST,
    list
  }
}

export default {
  fetchRecentList,
  setRecentList,
  fetchHotList,
  setHotList,
  fetchTagList,
  setTagList
}