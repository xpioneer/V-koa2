import { combineReducers } from 'redux';
import { LIKE, NOTLIKE, BEGIN_LOAD, LOAD_SUCCES, LOAD_ERROR } from './constants'

const likeState = false;

const like = (state = likeState, action) => {
  if(action.type === LIKE) {
    return true;
  } else if(action.type === NOTLIKE) {
    return false;
  }
  return state;
}

const loading = (state = false, action) =>{
  switch(action.type){
    case BEGIN_LOAD:
      return true;
    case LOAD_SUCCES:
    case LOAD_ERROR:
      return false;
  }
  return state;
}


export default combineReducers({
  like: like,
  loading: loading
})
