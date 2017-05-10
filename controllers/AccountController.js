import BaseController from './BaseController'

import Store from '../utils/session/store'

const store = new Store();

class AccountController extends BaseController{
  constructor(){
    super();
  }

  static login(ctx){
    let sid = ctx.cookies.get('SESSION_ID');
    const ip = ctx.ip;//获取客户端ip
    let para = ctx.request.fields;
    store.get(sid).then(session=>{
      ctx.Json({data: {sid,para,session}});
    });
    
  }
}

export default AccountController