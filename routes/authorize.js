import Router from 'koa-router'
import Authorize from '../controllers/AuthController'

const router = new Router({
  prefix: '/api/authorize'
});

router
  .get('/add', Authorize.addToken)
  .get('/all', Authorize.getAll)
  .get('/:id', Authorize.getTokenById);

export default router
