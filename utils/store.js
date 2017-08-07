import Redis from "ioredis";
import { Store } from "koa-session2";

export default class RedisStore extends Store {
  constructor() {
    super();
    this.redis = new Redis();
  }

  async get(sid) {
    //return await this.redis.get(`SESSION:${sid}`);
    let data = await this.redis.get(`SESSION:${sid}`);
    return JSON.parse(data);
  }

  async set(session, opts) {
    console.log(session, opts)
    if (!opts.sid) {
      opts.sid = this.getID(24);
    }
    // console.log(session, opts)
    const result = await this.redis.set(`SESSION:${opts.sid}`, JSON.stringify(session));
    console.log(result, opts)
    return opts.sid;
  }

  async destroy(sid) {
    return await this.redis.del(`SESSION:${sid}`);
  }
}

let fn = N =>{
  // let max
  for(let i = 0; i < N/5; i++){
    for(let j = 0; j < N/3; j++){
      for(let k = 0; k < N/2; k++){
        if((i*5 + j*3 + k*2) == N){
          console.log(i, j, k)
        }
      }
    }
  }
}
