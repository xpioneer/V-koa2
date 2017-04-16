import { LIKE, NOTLIKE } from './constants'

const likeAction = () => {
  console.log('likeAction---------')
  return {
    type: LIKE
  }
}

const notLikeAction = () => {
  return {
    type: NOTLIKE
  }
}

export default {
  likeAction,
  notLikeAction
}