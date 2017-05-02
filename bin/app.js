//node
import Http from 'http'
//koa
import Koa from 'koa'
import Body from 'koa-better-body'
import Compress from 'koa-compress'
import Serve from 'koa-static'
import Logger from 'koa-logger'
import Views from 'koa-views'
import Qs from 'koa-qs'
import Favicon from 'koa-favicon'
//middlewares
import Request from '../middlewares/request'
import Response from '../middlewares/response'
import Catch from '../middlewares/catch'
import Authorize from '../middlewares/authorize'
import Cors from '../middlewares/cors'
//routes
// import index from '../routes/index'
import article from '../routes/article'
import authorize from '../routes/authorize'
import tag from '../routes/tag'
import comment from '../routes/comment'
import moment from 'moment'


const App = new Koa();
Qs(App, 'extended')
App.use(Compress({
  filter: function (content_type) {
    // console.log(content_type, /text|javascript|image/i.test(content_type))
    return true;
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))
App.use( Favicon(process.cwd() + '/public/favicon.ico') )
App.use( Views(process.cwd() + '/views/dist', { map: { html: 'ejs' } }) )
// App.use( Serve(process.cwd() + '/views/dist') )
App.use(Body())

if(process.env.NODE_ENV == 'development'){
  App.use(Logger())
}

App.use(Cors)
App.use(Request)
App.use(Response)
App.use(Catch)
App.use(Authorize)

// App.use(async(ctx, next) => {
//   await next()
//   ctx.set('X-Powered-By', 'Keefe')
// })

// App.use(index.routes())
App.use(article.routes())
App.use(authorize.routes())
App.use(tag.routes())
App.use(comment.routes())


App.on('error', (err, ctx) =>
  console.error('server error', err, ctx)
);

let port = 8800;
if(process.env.NODE_ENV === "production"){
  port = 990;
}

Http.createServer(App.callback()).listen(port);


console.log(`Koa2 server start on 127.0.0.1:${port}`)