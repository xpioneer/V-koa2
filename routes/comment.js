import Router from 'koa-router'
import Comment from '../controllers/CommentController'

const router = new Router({
  prefix: '/api/comment'
});

router
  .post('/add', Comment.create)
  .get('/all', Comment.getList)
  .get('/:id/article', Comment.getCommentByArticleId);

export default router
