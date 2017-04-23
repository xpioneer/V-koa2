
const getArticle = id =>{
  return new Promise((resolve, reject)=>{
    $http.get(`/article/${id}/detail`).then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

export default {
  getArticle
}