import Router from 'koa-router'
import Test from '../controllers/TestController'

const router = new Router({
  prefix: '/api/test'
});

router
  .get('/home', Test.index)
  .get('/session', Test.testSession)
  .get('/session1', Test.testSession1)
  .get('/session10', Test.testSession10)
  .get('/session11', Test.testSession11);

export default router
