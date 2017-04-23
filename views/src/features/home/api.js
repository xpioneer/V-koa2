
import Param from 'UTILS/tools/param'


const articleList = [{
  id: 'ab432b324b32c1321',
  title: 'React Application',
  content: 'React Application1React Application1React Application111111111111111111111111111',
  view_count: '99'
},{
  id: '4321rewq432rre21',
  title: 'React 4312432143214',
  content: 'React Applicati5433reu59403qurdpeuwopqfeq0u598043u89re98qutr9037q5894037890329438',
  view_count: '399'
},{
  id: '5432rewqr32c1321',
  title: '894380298403284-NODE3',
  content: 'React ApplicatifjdsaieouwqpeHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH5555555555heheh呵呵呵呵呵呵',
  view_count: '99'
},{
  id: '4rewfewfq2b324b32c1321',
  title: 'React 4312432143214',
  content: 'React Applicati5433reu59403qurdpeuwopqfeq0u598043u89re98qutr9037q5894037890329438',
  view_count: '199'
},{
  id: 'ab432b324b3r21343243',
  title: '894380298403284-NODE3',
  content: 'React ApplicatifjdsaieouwqpeHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
  view_count: '99'
}]

const getArticleList = () =>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(articleList)
    }, 1000)
  })
}

const getAllArticle = param =>{
  return new Promise((resolve, reject)=>{
    $http.get('/article/pages?'+Param(param)).then(r=>{
      console.log(r)
      resolve(r)
    }).catch(e=>{
      reject(e)
    })
  })
}

export default {
  getArticleList,
  getAllArticle
}