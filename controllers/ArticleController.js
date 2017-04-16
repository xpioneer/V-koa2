import UTILS from '../utils'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = UTILS

const Article = DB.Article;

let randomData = async()=>{
  // let id = Guid();
  // let cid = Guid();
  // let wid = Guid();
  // let notice = await Article.create({
  //   id: id,
  //   serial_no: 'TZD-'+id.substr(0, 16),
  //   customer_id: cid,
  //   customer_name: '客户'+cid.substr(0, 16),
  //   warehouse_id: wid,
  //   warehouse_name: '仓库'+wid.substr(0, 16),
  //   weight: 100.00,
  //   type: 1,
  //   approval_status: 1,
  //   created_by: "0528e0a76816c06358d7687b76e545c3",
  //   created_username: 'xiaobin',
  //   remark: '测试数据'+id
  // });
}

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
    console.log('hehe, index', '9999999999999999999999999999999999')
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
    let article = await Article.findById(id)
    ctx.Json({data: article})
  }

  /*获取所有*/
  static async getList(ctx){
    let list = await Article.findAll({
      attributes:['id', 'title', 'abstract', 'pics', 'praise', 'contempt', 'view_count', 'is_original', 'created_at'],
      limit: 2
    });
    console.log(list)
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
    console.log(_list)
    ctx.Json({data: _list})
  }

  static async pages(ctx){
    let page = await Article.findAndCountAll(ctx.getParams);
    let list = page.rows.map(m=>{
      m.created_at = DateTimeF(m.created_at);
      m.updated_at = DateTimeF(m.updated_at);
      m.deleted_at = DateTimeF(m.deleted_at);
      return m;
    })
    ctx.Pages({page: page})
  }

  static async pagesPost(ctx){
    let para = ctx.request.body;
    // console.log(ctx.status, 6688)
    ctx.Json({data: JSON.parse(para)})
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

  static async add(ctx){
    let N = 10;
    for(let i = 0; i < N; i++){
      await randomData();
    }
    ctx.Json({data: `成功生成了${N}条随机数据！`})
  }
}

export default ArticleController