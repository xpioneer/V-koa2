import Router from 'koa-router'
import Article from '../controllers/ArticleController'

const router = new Router({
  prefix: '/api/article'
});

router
  .get('/', Article.index)
  .get('/all', Article.getList)
  .get('/:id', Article.getArticleById)
  .get('/page', Article.pages)
  .get('/test', async (ctx, next) => {
    let json = {id:2,name:'123', msg:'HEHEHE'}
    ctx.Json({data: json, msg: '请求成功'})
    // ctx.Json(999)
  });
// console.log(router.methods)
export default router
