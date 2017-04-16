import Http from 'http'

import Koa from 'koa'
import Body from 'koa-better-body'
import Compress from 'koa-compress'
import Serve from 'koa-static'
import Logger from 'koa-logger'
import Views from 'koa-views'
import Cors from 'koa2-cors'
import Qs from 'koa-qs'

import Request from '../middlewares/request'
import Response from '../middlewares/response'

import index from '../routes/index'
import article from '../routes/article'
import moment from 'moment'
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

App.use( Views(process.cwd() + '/views/dist', { map: { html: 'ejs' } }) )
App.use( Serve(process.cwd() + '/views/dist') )
App.use(Body())
App.use(Logger())
App.use(Request)
App.use(Response)
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
  try {
    await next()
    const status = ctx.status || 404
    if (status === 404) {
      ctx.throw(404)
    }else if(status === 402){
      ctx.throw(402)
    }else if(status === 406){
      ctx.throw(406)
    }else if(status === 500){
      ctx.throw(500)
    }
  } catch (err) {
    let status = err.status;
    console.log(err, '-------------------catch')
    ctx.status = status;
    // if(status === 404){
    //   ctx.body = {status: 404, data: null, msg: err.toString()}
    // }
    if(status === 404){
      return ctx.Json({status: 404, data: null, msg: '未找到资源'})
    }
    else if(status === 402){
      return ctx.Json({status: 402, data: null, msg: '测试错误'})
    }
    else if(status === 406){
      return ctx.Json({status: 406, data: err.toString(), msg: '无权限'})
    }
    else if(status === 500){
      return ctx.Json({status: 500, data: err.toString(), msg: '服务器内部错误'})
    }
  }
});

App.use(index.routes())
App.use(article.routes())



App.use(async(ctx, next) => {
  console.log('9999999999999', ctx.url)
  // await next()
  await ctx.render('index', {});
});

App.on('error', (err, ctx) =>
  console.error('server error', err, ctx)
);

Http.createServer(App.callback()).listen(8800);


console.log(`Koa2 server start on 127.:8800`)