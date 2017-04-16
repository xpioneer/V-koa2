export default {
  path: 'vue',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index').default)
    }, 'vue')
  },
}
