
const getRecentList = () =>{
  return new Promise((resolve, reject)=>{
    $http.get('/article/recent').then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

const getHotList = () =>{
  return new Promise((resolve, reject)=>{
    $http.get('/article/hot').then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

const getTagList = () =>{
  return new Promise((resolve, reject)=>{
    $http.get('/tag/all').then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

export default {
  getRecentList,
  getHotList,
  getTagList
}