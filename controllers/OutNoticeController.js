import Guid, { Guid8, Guid16 } from '../utils'
import DB from '../models'

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

class OutNoticeController {

  static async getById(ctx){
    let id = ctx.params.id;
    if(!id){
      ctx.throw(400, 'id required');
    }
    let outNotice = await OutNotice.findById(id)
    ctx.Json({data: outNotice})
  }


  // static async pages(ctx){
  //   // let obj = serializePages()
  //   console.log(ctx.query.columnFilter, 999)
  //   let per_page = 1;
  //   let current_page = 1
  //   let page = await Notice.findAndCountAll({
  //     limit: per_page,
  //     offset: --current_page
  //   });
  //   ctx.Pages({page: page, per_page: per_page, current_page: current_page})
  // }

  // static async delete(ctx){
  //   let r = await Notice.destroy({
  //     where:{
  //       id: "f1bf65de3065c461d9186ea5d3a1f597"
  //     }
  //   });
  //   console.log(r)
  //   ctx.body = r;
  // }

  static async add(ctx){
    let N = 10;
    for(let i = 0; i < N; i++){
      await randomData();
    }
    ctx.Json({data: `成功生成了${N}条随机数据！`})
  }
}

export default OutNoticeController