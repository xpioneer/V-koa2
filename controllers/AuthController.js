import UTILS from '../utils'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = UTILS
const Authorize = DB.Authorize

class AuthController {

  static async addToken(ctx){
    let user = Guid();
    let token = await Authorize.create({
      id: Guid(),
      token: Guid()+Guid(),
      created_by: user,
      updated_by: user,
      remark: '测试Token'
    });
    console.log(token)
    ctx.Json({data: token})
  }

  static async getAll(ctx){
    let list = await Authorize.findAll();
    ctx.Json({data: list})
  }

  static async getToken(key){
    let token = await Authorize.findOne({
      where: { token: key }
    });
    // console.log(token.id, token.token, '***************************token')
    if(token && token.token.length === 64){
      return true;
    }else{
      return false;
    }
  }

  //根据id查找token
  static async getTokenById(ctx){
    let id = ctx.params.id;
    let token = await Authorize.findOne({ where: { id: id } });
    if(token){
      ctx.Json({data: token})
    }else{
      ctx.throw(404)
    }
  }

}

export default AuthController