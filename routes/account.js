import Router from 'koa-router'
import Account from '../controllers/AccountController'

const router = new Router({
  prefix: '/api/account'
});

router
  .post('/login', Account.login);

export default router
