
const getArticle = id =>{
  return new Promise((resolve, reject)=>{
    $http.get(`/article/${id}/detail`).then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

const submitComment = ({id, value}) =>{
  console.log(id, value, 999)
  return new Promise((resolve, reject)=>{
    $http.post(`/comment/add`, {
      article_id: id,
      content: value
    }).then(r=>{
      resolve(r)
    }).catch(e=>{
      reject(e)
    })
  })
}

const getCommentList = id =>{
  return new Promise((resolve, reject)=>{
    $http.get(`/comment/${id}/article`).then(r=>{
      resolve(r.data)
    }).catch(e=>{
      reject(e)
    })
  })
}

export default {
  getArticle,
  submitComment,
  getCommentList
}