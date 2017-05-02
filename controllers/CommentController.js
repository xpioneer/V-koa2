import UTILS from '../utils'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF, TodayRange } = UTILS

const Comment = DB.Comment;

class CommentController {

  /*创建评论*/
  static async create(ctx){
    const ip = ctx.ip;//获取客户端ip
    const todayRange = TodayRange();
    const count = await Comment.count({
      where: {
        ip: {$eq: ip},
        created_at: {
          $gte: todayRange[0],
          $lt: todayRange[1]
        }
      }
    });
    if(count >= 10){
      ctx.Json({status: 403, data: '', msg: '评论数量已达上限！'})
    }else{
      let para = ctx.request.fields;
      const comment = await Comment.create({
        id: Guid(),
        article_id: para.article_id,
        content: para.content,
        ip: ip,
        client: ctx.request.headers["user-agent"],
        parent_id: 0,
        created_by: ''
      });
      ctx.Json({data: '', msg: '评论成功'})
    }
  }

  /*获取文章的评论*/
  static async getCommentByArticleId(ctx){
    let id = ctx.params.id;
    let list = await Comment.findAll({
      attributes: ['id', 'article_id', 'content', 'created_at'],
      where: {article_id: id},
      order: [['created_at', 'desc']]
    });
    let _list = list.map(m=>({
      id: m.id,
      content: m.content,
      created_at: DateTimeF(m.created_at)
    }))
    ctx.Json({data: _list})
  }

  /*获取所有*/
  static async getList(ctx){
    // console.log(ctx.query)
    let list = await Comment.findAll({
      attributes:['id', 'article_id', 'content', 'ip', 'client', 'parent_id', 'is_author'],
      // limit: 5
    });
    let _list = list.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    });
    ctx.Json({data: _list})
  }

  static async pages(ctx){
    let page = await Comment.findAndCountAll({
      ...ctx.getParams,
      ...{
        attributes:['id', 'title', 'abstract', 'pics', 'praise', 'contempt', 'view_count', 'is_original', 'created_at'],
        order: [['created_at', 'desc']]
      }
    });
    let list = page.rows.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    })
    ctx.Pages({page: page})
  }


}

export default CommentController