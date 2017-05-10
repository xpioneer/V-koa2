import articleRouter from '../routes/article'
import authorizeRouter from '../routes/authorize'
import tagRouter from '../routes/tag'
import commentRouter from '../routes/comment'
import accountRouter from '../routes/account'

import testRouter from '../routes/testrouter'//测试路由

const Routes = App=>{
  App.use(articleRouter.routes())
  App.use(authorizeRouter.routes())
  App.use(tagRouter.routes())
  App.use(commentRouter.routes())
  App.use(accountRouter.routes())
  
  App.use(testRouter.routes())
}

export default Routes