import TOOLS from '../utils/tools'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = TOOLS

const Tag = DB.Tag;
const Article = DB.Article;

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
    console.log('get TagPages', ctx.getParams)
    if(!ctx.getParams.order || ctx.getParams.order.length == 0){
      ctx.getParams.order = [['created_at', 'desc']];
    }
    let page = await Tag.findAndCountAll({
      ...ctx.getParams,
      ...{
        attributes:['id', 'name', 'remark', 'created_by', 'created_at'],
        // limit: 5
      }
    });
    page.rows.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    })
    ctx.Pages({page: page})
  }

  /*软删除(更新删除时间)*/
  static async delete(ctx){
    let r = await Tag.update({
      delete_at: Date.now(),
      delete_by: '111'
    },{
      where:{
        id: "f1bf65de3065c461d9186ea5d3a1f597"
      }
    });
    ctx.Json({data:'', msg:'删除成功'});
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

  static async tagCharts(ctx){
    let tags = await Tag.findAll({
      attributes:['name'],
      order: [['created_at', 'desc']]
    });
    let list = [];
    for(let item of tags){
      let count = await Article.count({
        where: {
          tag:{ $like: `%${item.name}%` }
        }
      });
      list.push({name:item.name, value:count})
    }
    ctx.Json({data:list});
  }
}

export default TagController