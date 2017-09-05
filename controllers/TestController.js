import TOOLS from '../utils/tools'

class TestController {

  static async index(ctx){//测试页面
    await ctx.render('index', {
      title: '首页',
      orderList: [{id:1, name:'hehe1'},{id:2, name:'hehe2'},{id:3, name:'hehe3'}],
      copyright: 'Keefe'
    });
  }

  static async testSession(ctx){
    console.log(ctx.session, 'testSession testSession testSession', typeof ctx.session)
    if(!ctx.session['userInfo']){
      ctx.session['userInfo'] = {
        user_id: '123456789',
        count: 1
      }
    }
    // else{
    //   ctx.session.count = ctx.session.count + 1;
    // }
    let session = ctx.session;
    ctx.Json({data: session})
  }

  static async testSession1(ctx){
    let session = ctx.session;//['userInfo'];
    ctx.Json({data: session});
  }

  static async testSession10(ctx){
    console.log(ctx.session, 'testSession testSession testSession', typeof ctx.session)
    if(!ctx.session['userInfo1']){
      ctx.session['userInfo1'] = {
        user_id: 'qinfeng',
        count: 10
      }
    }
    // else{
    //   ctx.session.count = ctx.session.count + 1;
    // }
    let session = ctx.session;
    ctx.Json({data: session})
  }

  static async testSession11(ctx){
    let session = ctx.session;
    ctx.Json({data: session});
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

  static async test200(ctx){
    ctx.Json({data:'这里是你需要的数据。', msg: '请求成功', status: 200});
  }

  static async test400(ctx){
    ctx.throw(400)
  }

  static async test401(ctx){
    ctx.throw(401)
  }

  static async test403(ctx){
    ctx.throw(403);
  }

  static async test404(ctx){
    ctx.throw(404)
  }

  static async test405(ctx){
    ctx.throw(405)
  }

  static async test406(ctx){
    ctx.throw(406)
  }

  static async test500(ctx){
    ctx.throw(500)
  }

  static async test501(ctx){
    ctx.throw(501)
  }
}

export default TestController