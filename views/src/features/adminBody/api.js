
const getRecentList = () =>{
  return new Promise((resolve, reject)=>{
    $http.get('/article/recent').then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

export default {
  getRecentList
}