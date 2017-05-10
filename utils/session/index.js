import Store from './store'

// export default (opts = {})=> {
//   opts.key = opts.key || "koa:sess";
//   const store = new Store()
//   let old = '';
//   console.log(1239)

//   return async (ctx, next) =>{
//     let sid = ctx.cookies.get(opts.key, opts);//获取session的id,opts只是简单的传递(express)
//     let promise = Promise.resolve();
//     console.log('sidsidsidsidsid', sid)
//     if(sid){
//       ctx.session = await store.get(sid);//
//       if(typeof ctx.session != "object" || ctx.session == null) {
//         ctx.session = {};
//       }

//       old = JSON.stringify(ctx.session);//赋值
//       // await next();
//     }else{
//       ctx.session = {};
//     }

//     console.log('opts, ctx.session', opts, ctx.session);//
//     return Promise.resolve().then(()=>{
//       console.log('开始比较', old, JSON.stringify(ctx.session))
//       if(old == JSON.stringify(ctx.session)){
//         console.log('相等,进行更新操作')
//         // console.log('新的session:', sid)
//         // ctx.cookies.set(opts.key, sid, opts)
//         next();//相等,不进行任何操作
//       }else{
//         next();
//         console.log(ctx.session, 'ctx.session, ctx.session, ctx.session')
//         // await store.destroy[sid];//销毁旧的
        
//         if(ctx.session && Object.keys(ctx.session).length){
//           console.log('设置新的session：', ctx.session)
//           store.set(ctx.session, {sid: sid, ...opts}).then(SID=>{//设置新的
//             console.log('新的session:', SID)
//             ctx.cookies.set(opts.key, SID, opts)
//           });
//         }
//       }
//     });

//     // return async(ctx, next) => {
//     //   if(old == JSON.stringify(ctx.session)){
//     //     console.log('相等,不进行任何操作')
//     //     await next();//相等,不进行任何操作
//     //   }else{
//     //     await next();
//     //     console.log(ctx.session, 'ctx.session, ctx.session, ctx.session')
//     //     // await store.destroy[sid];//销毁旧的
        
//     //     if(ctx.session && Object.keys(ctx.session).length){
//     //       const SID = await store.set(ctx.session, {sid: sid, ...opts})//设置新的
//     //       ctx.cookies.set(opts.key, SID, opts)
//     //     }
//     //   }
//     // }

//   }
// }


export default (opts = {}) => {
    opts.key = opts.key || "koa:sess";
    opts.store = opts.store || new Store();
 
    return  (ctx, next) => {
            //获得cookie
        let id = ctx.cookies.get(opts.key, opts);
     
        let promise = Promise.resolve();
        let old = {};
        // console.log('sidsidsidsidsid', id)
        if(id) {
            promise = opts.store.get(id).then(session => {
              // console.log('获取session', session)
                ctx.session = session;
                // check session should be a no-null object
                if(typeof ctx.session != "object" || ctx.session == null) {
                    ctx.session = {};
                }
            });
        } else {
            ctx.session = {};
        }
 
        return promise.then(() => {
          // console.log(old, JSON.stringify(ctx.session), '赋值给old')
            old = JSON.stringify(ctx.session);
            return next();
        }).then(() => {
            // no modify
            if(old == JSON.stringify(ctx.session)) return;
  // console.log(old, JSON.stringify(ctx.session), '比较是否相等')
            return Promise.resolve().then(() => {
                // destory old session
                // console.log(id, '销毁o')
                if(id) {
                    id = null;
                    return opts.store.destroy(id);
                }
            }).then(() => {
                // console.log(ctx.session, '设置新的session：')
                if(ctx.session && Object.keys(ctx.session).length) {
                    // set new session
                    return opts.store.set(ctx.session, Object.assign({}, opts, {sid: id})).then(sid => {
                        //创建cookie
                        ctx.cookies.set(opts.key, sid, opts)
                    });
                }
            });
        });
 
    }
};