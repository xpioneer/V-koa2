import TOOLS from '../utils/tools'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = TOOLS

const Article = DB.Article;

//serialize condition
let getPagePara = (query) => {
  console.log(query, typeof query.orderBy, 666999)
  let data = {};
  if(query){
    //
  }
  return data;
}

class ArticleController {
  static async index(ctx){
    await ctx.render('index', {
      title: '首页',
      orderList: [{id:1, name:'hehe1'},{id:2, name:'hehe2'},{id:3, name:'hehe3'}],
      copyright: 'Keefe'
    });
  };

  static async create(ctx){
    let para = ctx.request.body;
    // console.log(ctx.status, 6688)
    ctx.Json({data: JSON.parse(para)})
  }

  static async getArticleById(ctx){
    let id = ctx.params.id;
    let article = await Article.findById(id);
    Article.update({
      view_count: article.view_count+1
    },{
      where:{
        id:{
          $eq: id
        }
      }
    });//更新浏览数
    ctx.Json({data: article})
  }

  /*获取所有*/
  static async getList(ctx){
    // console.log(ctx.query)
    let list = await Article.findAll({
      attributes:['id', 'title', 'abstract', 'pics', 'praise', 'contempt', 'view_count', 'is_original', 'created_at'],
      limit: 5
    });
    let _list = list.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      // m.updated_at = DateTimeF(m.updated_at);
      return m;
      // return {
      //   id: m.id,
      //   title: m.title,
      //   abstract: m.abstract,
      //   pics: m.pics,
      //   praise: m.praise,
      //   contempt: m.contempt,
      //   view_count: m.view_count,
      //   is_original: m.is_original,
      //   created_at: DateTimeF(m.created_at),
      //   updated_at: DateTimeF(m.updated_at)
      // }
    });
    ctx.Json({data: _list})
  }

  static async pages(ctx){
    console.log('get ArticlePages', ctx.getParams)
    if(!ctx.getParams.order || ctx.getParams.order.length == 0){
      ctx.getParams.order = [['created_at', 'desc']];
    }
    let page = await Article.findAndCountAll({
      ...ctx.getParams,
      ...{
        attributes:['id', 'title', 'abstract', 'pics', 'praise', 'contempt', 'view_count', 'is_original', 'created_at'],
        // order: [['created_at', 'desc']]
      }
    });
    page.rows.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    })
    ctx.Pages({page: page})
  }

  static async pagesPost(ctx){
    let para = ctx.request.body;
    // console.log(ctx.status, 6688)
    ctx.Json({data: JSON.parse(para)})
  }

  /*最新5篇*/
  static async recent(ctx){
    let list = await Article.findAll({
      attributes:['id', 'title', 'view_count', 'is_original', 'created_at'],
      limit: 5,
      order: [['created_at', 'desc']]
    });
    let _list = list.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    })
    ctx.Json({data: _list})
  }

  /*最热5篇*/
  static async hot(ctx){
    let list = await Article.findAll({
      attributes:['id', 'title', 'view_count', 'is_original', 'created_at'],
      limit: 5,
      order: [['view_count', 'desc']]
    });
    let _list = list.map(m=>{
      m.dataValues.created_at = DateTimeF(m.created_at);
      return m;
    })
    ctx.Json({data: _list})
  }

  static async delete(ctx){
    let r = await Article.destroy({
      where:{
        id: "f1bf65de3065c461d9186ea5d3a1f597"
      }
    });
    console.log(r)
    ctx.body = r;
  }

  // static async add(ctx){
  //   let N = 10;
  //   for(let i = 0; i < N; i++){
  //     await randomData();
  //   }
  //   ctx.Json({data: `成功生成了${N}条随机数据！`})
  // }
}

export default ArticleController