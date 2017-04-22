//node
import Http from 'http'
//koa
import Koa from 'koa'
import Body from 'koa-better-body'
import Compress from 'koa-compress'
import Serve from 'koa-static'
import Logger from 'koa-logger'
import Views from 'koa-views'
import Cors from 'koa2-cors'
import Qs from 'koa-qs'
import Favicon from 'koa-favicon'
//middlewares
import Request from '../middlewares/request'
import Response from '../middlewares/response'
import Catch from '../middlewares/catch'
//routes
import index from '../routes/index'
import article from '../routes/article'
import moment from 'moment'

import AuthController from '../controllers/AuthController'


console.log(moment(undefined).isValid())
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
App.use(Favicon(process.cwd() + '/public/favicon.ico'));
App.use( Views(process.cwd() + '/views/dist', { map: { html: 'ejs' } }) )
App.use( Serve(process.cwd() + '/views/dist') )
App.use(Body())
App.use(Logger())
App.use(Request)
App.use(Response)
App.use(Catch)
App.use(Cors({
  origin: function(ctx) {
    if (ctx.url === '/add') {
      return false;
    }
    return 'http://localhost:6001';
  },
  allowHeaders: ['Content-Type', 'Authorization-User', 'X-Requested-With', 'Accept']
}))

App.use(async(ctx, next) => {
  await next()
  ctx.set('X-Powered-By', 'Keefe')
})
App.use(async(ctx, next) => {
  // console.log('9999999999999', ctx.url)
  if(ctx.url.indexOf('/api/') == 0){
    let key = ctx.header['Authorization-User'] || ctx.query['Authorization-User'];
    let isAuthorized = await AuthController.getToken(key);
    isAuthorized ? await next() : ctx.throw(406)
  }else{
    await ctx.render('index', {});
  }
});

// App.use(index.routes())
App.use(article.routes())
// console.log(article.stack)



App.on('error', (err, ctx) =>
  console.error('server error', err, ctx)
);

let port = 8800;
if(process.env.NODE_ENV === "production"){
  port = 990;
}


Http.createServer(App.callback()).listen(port);


console.log(`Koa2 server start on 127.:${port}`)