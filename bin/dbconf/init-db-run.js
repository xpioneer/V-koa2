require('babel-register')({
  "presets": ["es2017", "stage-0"],
  "plugins": ["transform-es2015-modules-commonjs"]
})
require('./init-db.js')