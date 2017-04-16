'use strict'

import { OPEN_SIDERBAR, CLOSE_SIDERBAR } from './constants'

const isOpenAction = () => {
  return {
    type: OPEN_SIDERBAR
  }
}

const isCloseAction = () => {
  return {
    type: CLOSE_SIDERBAR
  }
}

export default {
  isOpenAction,
  isCloseAction
}