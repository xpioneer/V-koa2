import Router from 'koa-router'
import Article from '../controllers/ArticleController'

const router = new Router({
  prefix: '/api/article'
});

router
  .get('/', Article.index)
  .get('/recent', Article.recent)
  .get('/hot', Article.hot)
  .get('/all', Article.getList)
  .get('/:id/detail', Article.getArticleById)
  .get('/pages', Article.pages)
  .get('/test', async (ctx, next) => {
    let json = {id:2,name:'123', msg:'HEHEHE'}
    ctx.Json({data: json, msg: '请求成功'})
    // ctx.Json(999)
  });
// console.log(router.methods)
export default router
