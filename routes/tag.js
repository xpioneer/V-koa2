import Router from 'koa-router'
import Tag from '../controllers/TagController'

const router = new Router({
  prefix: '/api/tag'
});

router
  .get('/all', Tag.getList)
  .get('/detail/:id', Tag.getTagById)
  .get('/tagcharts', Tag.tagCharts)
  .get('/pages', Tag.pages);

export default router
