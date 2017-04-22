export default async(ctx, next) => {
  try {
    await next()
    const status = ctx.status || 404
    if (status === 404) {
      ctx.throw(404)
    }else if(status === 402){
      ctx.throw(402)
    }else if(status === 406){
      ctx.throw(406)
    }else if(status === 500){
      ctx.throw(500)
    }
  } catch (err) {
    let status = err.status;
    console.log(err, '-------------------catch')
    ctx.status = status;
    // if(status === 404){
    //   ctx.body = {status: 404, data: null, msg: err.toString()}
    // }
    if(status === 404){
      return ctx.Json({status: 404, data: null, msg: '未找到资源'})
    }
    else if(status === 402){
      return ctx.Json({status: 402, data: null, msg: '测试错误'})
    }
    else if(status === 406){
      return ctx.Json({status: 406, data: err.toString(), msg: '无权限'})
    }
    else if(status === 500){
      return ctx.Json({status: 500, data: err.toString(), msg: '服务器内部错误'})
    }
  }
}