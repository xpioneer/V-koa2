import Router from 'koa-router'
import Authorize from '../controllers/ArticleController'

const router = new Router({
  prefix: '/api/authorize'
});

router
  .get('/add', Authorize.addToken)
  .get('/:id', Authorize.getToken);

export default router
