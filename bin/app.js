//node
import Http from 'http'
//koa
import Koa from 'koa'
import Qs from 'koa-qs'
import Favicon from 'koa-favicon'
import Body from 'koa-better-body'
// import Compress from 'koa-compress'
// import Serve from 'koa-static'
import Logger from 'koa-logger'
import Views from 'koa-views'
// import Session from "koa-session2"

//customer
// import Store from "../utils/store"
import Session from '../utils/session'
import Middlewares from '../middlewares'

const App = new Koa();
Qs(App, 'extended')
// App.use(Compress({
//   filter: function (content_type) {
//     // console.log(content_type, /text|javascript|image/i.test(content_type))
//     return true;
//   },
//   threshold: 2048,
//   flush: require('zlib').Z_SYNC_FLUSH
// }))//改成Nginx服务
App.use( Favicon(process.cwd() + '/public/favicon.ico') )
App.use( Views(process.cwd() + '/public/views', { map: { html: 'ejs' } }) )//测试页面
// App.use( Views(process.cwd() + '/views/dist', { map: { html: 'ejs' } }) )
// App.use( Serve(process.cwd() + '/views/dist') )//改成Nginx服务
App.use(Body())

if(process.env.NODE_ENV == 'development'){
  App.use(Logger())
}

// App.use(Session({
//   key: 'SESSION_ID',
//   // store: new Store(),
//   maxAge: 1000 * 6,
// }));

App.use(Session({
  key: 'SESSION_ID',
  maxAge: 1000*60,
  secure: false
}))

Middlewares(App)//注入自定义中间件

// App.use(async(ctx, next) => {
//   await next()
//   ctx.set('X-Powered-By', 'Keefe')
// })



App.on('error', (err, ctx) =>
  console.error('server error', err, ctx)
);

let port = 8800;
if(process.env.NODE_ENV === "production"){
  port = 990;
}

Http.createServer(App.callback()).listen(port);


console.log(`Koa2 server start on 127.0.0.1:${port}`)