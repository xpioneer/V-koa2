

import AuthController from '../controllers/AuthController'

export default async(ctx, next) => {
    await next();
  // if(ctx.url.indexOf('/api/') == 0){
  //   console.log(ctx.query)
  //   await next();
  //   // if(ctx.query['root'] == 99){
  //   //   await next();
  //   // }else{
  //   //   let key = ctx.header['Authorization-User'] || ctx.header['authorization-user'] || ctx.query['Authorization-User'];
  //   //   if(key && key.length != 64){//长度不够，直接throw 406
  //   //     ctx.throw(406)
  //   //   }
  //   //   let isAuthorized = await AuthController.getToken(key);
  //   //   isAuthorized ? await next() : ctx.throw(406)
  //   // }
  // }else{
  //   await ctx.render('index', {});
  // }
}