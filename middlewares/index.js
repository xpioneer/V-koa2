import Cors from '../middlewares/cors'
import Request from '../middlewares/request'
import Response from '../middlewares/response'
import Catch from '../middlewares/catch'
import Authorize from '../middlewares/authorize'

import Routes from './routes'

const Middlewares = App =>{
  App.use(Cors)
  App.use(Request)
  App.use(Response)
  App.use(Catch)
  App.use(Authorize)

  Routes(App)//inject routes
}

export default Middlewares