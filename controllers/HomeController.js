import TOOLS from '../utils/tools'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = TOOLS

const Notice = DB.Notice;
const OutNotice = DB.OutNotice;

let randomData = async()=>{
  let id = Guid();
  let cid = Guid();
  let wid = Guid();
  let notice = await Notice.create({
    id: id,
    serial_no: 'TZD-'+id.substr(0, 16),
    customer_id: cid,
    customer_name: '客户'+cid.substr(0, 16),
    warehouse_id: wid,
    warehouse_name: '仓库'+wid.substr(0, 16),
    weight: 100.00,
    type: 1,
    approval_status: 1,
    created_by: "0528e0a76816c06358d7687b76e545c3",
    created_username: 'xiaobin',
    remark: '测试数据'+id
  });
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

class HomeController {
  static async index(ctx){
    console.log('hehe, index', '9999999999999999999999999999999999')
    await ctx.render('index', {
      title: '首页',
      orderList: [{id:1, name:'hehe1'},{id:2, name:'hehe2'},{id:3, name:'hehe3'}],
      copyright: 'Keefe'
    });
  };

  static async getList(ctx){
    let list = await Notice.findAll();
    ctx.Json({data: list})
  }

  static async pages(ctx){
    let page = await Notice.findAndCountAll(ctx.getParams);
    ctx.Pages({page: page})
  }

  static async pagesPost(ctx){
    let para = ctx.request.body;
    // console.log(ctx.status, 6688)
    ctx.Json({data: JSON.parse(para)})
  }

  static async delete(ctx){
    let r = await Notice.destroy({
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

export default HomeController