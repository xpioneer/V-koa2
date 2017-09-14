import Router from 'koa-router'
import Home from '../controllers/HomeController'
import OutNotice from '../controllers/OutNoticeController'

const router = new Router();

router
  .get('/', Home.index)
  .get('/page', Home.pages)
  //test接口
  .get('/outnotice/:id', OutNotice.getById)
  .get('/test', async (ctx, next) => {
    let json = {id:2,name:'123', msg:'HEHEHE'}
    ctx.Json({data: json, msg: '请求成功'})
  });

export default router
