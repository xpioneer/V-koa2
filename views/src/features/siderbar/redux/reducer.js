import { combineReducers } from 'redux'
import { OPEN_SIDERBAR, CLOSE_SIDERBAR } from './constants'

const initState = false;

const isOpen = (state = initState, action) => {
  switch(action.type){
    case OPEN_SIDERBAR:
      return true;
    case CLOSE_SIDERBAR:
      return false;
    default:
      return state;
  }
}

export default combineReducers({isOpen})