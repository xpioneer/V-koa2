import $http from 'UTILS/http'

const fetch = type => {
  return $http.get('/star/like?type='+type)
}

const test = type => {
  console.log(type, 'type')
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve({id: 123, name: 'qinfeng'}), 2000)
  });
}

export default {
  fetch,
  test
}