import TOOLS from '../tools'

const { Guid, DateTimeF, DateF, TimeF } = TOOLS

// export default class Store{
//   constructor(){
//     this.session = {}
//   }

//   get(sid){
//     console.log(this.session)
//     const session = this.session[sid];
//     console.log('session,,,', session)
//     return session ? JSON.parse(decodeURIComponent(session)) : null;
//   }

//   set(session, opts){
//     opts = opts || {};
//     let sid = opts.sid;
//     console.log(opts, 'opts,opts')
//     if(!sid){
//       sid = Guid();//生成32位id
//     }
//     this.session[sid] = encodeURIComponent(JSON.stringify(session));
//     return Promise.resolve(sid);//返回id
//   }

//   destroy(sid) {
//     delete this.session[sid];
//     return Promise.resolve();
//   }

// }

export default class Store {
    constructor() {
        this.session = {};
    }
 
    decode(string) {
        if(!string) return "";
 
        let session = "";
 
        // try{
            //存在session
            session = new Buffer(string, "base64").toString();
        // } catch(e) {}
        
        return JSON.parse(session);
    }
 
    encode(obj) {
        //滚成buffer
        return new Buffer(obj).toString("base64");
    }
 
    getID(length) {
        //获得Uid
        return uid.sync(length);
    }
 
    get(sid) {
      console.log(sid, '*****', this.decode(this.session[sid]))
        return Promise.resolve(this.decode(this.session[sid]));
    }
 
    set(session, opts) {
        opts = opts || {};
        let sid = opts.sid;
        if(!sid) {
            //Uid
            sid = Guid();
        }
 
        this.session[sid] = this.encode(JSON.stringify(session));
 
        return Promise.resolve(sid);
    }
 
    destroy(sid) {
        delete this.session[sid];
        return Promise.resolve();
    }
}