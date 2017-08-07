// require('babel-register')
// require('./app.js')

require('babel-core/register')({
  presets:['stage-0'],
  plugins: ['transform-es2015-modules-commonjs']
})
require('./app.js')