import TOOLS from '../utils/tools'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = TOOLS

const Tag = DB.Tag;


class TagController {
  /*创建标签*/
  static async create(ctx){
    let para = ctx.request.body;
    // console.log(ctx.status, 6688)
    ctx.Json({data: JSON.parse(para)})
  }

  /*根据Id查找标签*/
  static async getTagById(ctx){
    let id = ctx.params.id;
    let tag = await Tag.findById(id)
    ctx.Json({data: tag})
  }

  /*根据Name查找标签*/
  static async getTagByName(ctx){
    let id = ctx.params.id;
    let tag = await Tag.findOne(id)
    ctx.Json({data: tag})
  }

  /*获取所有tag*/
  static async getList(ctx){
    let list = await Tag.findAll({
      // attributes:['id', 'name', 'abstract', 'pics', 'praise', 'contempt', 'view_count', 'is_original', 'created_at'],
      // limit: 5
      order: [['created_at', 'desc']]
    });
    let _list = list.map(m=>{
      return {
        // id: m.id,
        name: m.name,
        // created_at: DateTimeF(m.created_at)
      };
    });
    ctx.Json({data: _list})
  }

  /*分页查询*/
  static async pages(ctx){
    console.log('get ArticlePages', ctx.getParams)
    let page = await Tag.findAndCountAll({
      ...ctx.getParams,
      ...{
        attributes:['id', 'title', 'abstract', 'pics', 'praise', 'contempt', 'view_count', 'is_original', 'created_at'],
        // limit: 5
      }
    });
    let list = page.rows.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    })
    ctx.Pages({page: page})
  }

  /*软删除(更新删除时间)*/
  static async delete(ctx){
    let r = await Tag.destroy({
      where:{
        id: "f1bf65de3065c461d9186ea5d3a1f597"
      }
    });
    console.log(r)
    ctx.body = r;
  }

  /*物理删除(慎用)*/
  static async destroy(ctx){
    let r = await Tag.destroy({
      where:{
        id: "f1bf65de3065c461d9186ea5d3a1f597"
      }
    });
    console.log(r)
    ctx.body = r;
  }
}

export default TagController