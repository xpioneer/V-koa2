//node
import Http from 'http'
//koa
import Koa from 'koa'
import Qs from 'koa-qs'
import Favicon from 'koa-favicon'
import Body from 'koa-better-body'
import Logger from 'koa-logger'
import Views from 'koa-views'
import Session from "koa-session2"

//customer
import Store from "../utils/store"
// import Session from '../utils/session'
import Middlewares from '../middlewares'

const App = new Koa();
Qs(App, 'extended')

App.use( Favicon(process.cwd() + '/public/favicon.ico') )
App.use( Views(process.cwd() + '/public/views', { map: { html: 'ejs' } }) )//测试页面

App.use(Body())

if(process.env.NODE_ENV == 'development'){
  App.use(Logger())
}

App.use(Session({
  key: 'SESSION_ID',
  // store: new Store(),
  maxAge: 1000 * 60,
}));

// App.use(Session({
//   key: 'SESSION_ID',
//   maxAge: 1000*60,
//   secure: false
// }))

Middlewares(App)//注入自定义中间件

App.use(async(ctx, next) => {
  await next()
  ctx.set('X-Powered-By', 'Keefe')
})


App.on('error', (err, ctx) =>
  console.error('server error', err, ctx)
);

let port = 8800;
if(process.env.NODE_ENV === "production"){
  port = 990;
}

Http.createServer(App.callback()).listen(port);


console.log(`Koa2 server start on 127.0.0.1:${port}`)

// module.exports = App.listen(3030)