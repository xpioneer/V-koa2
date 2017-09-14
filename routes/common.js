import Router from 'koa-router'
import Common from '../controllers/CommonController'

const router = new Router({
    prefix: '/api'
});

router
    .get('/upload-file', Common.upload);

export default router
