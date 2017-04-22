import UTILS from '../utils'
import DB from '../models'

const { Guid, DateTimeF, DateF, TimeF } = UTILS
const Authorize = DB.Authorize

class AuthController {

  static async addToken(ctx){
    let list = await Authorize.create({
      id: Guid(),
      token: Guid()+Guid(),
      remark: '测试Token'
    });
    ctx.Json({data: list})
  }

  static async getToken(key){
    let token = await Authorize.findOne({
      where: { token: key }
    });
    console.log(token)
    if(token && token.length === 64){
      return true;
    }else{
      return false;
    }
  }

}

export default AuthController