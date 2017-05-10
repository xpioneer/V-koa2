const webConfig = {
  host: {
    http: 'http://www.visualtec.cn:88',
    ws: '',
  },
  apiPath: '/api',
  RootPath:"/"
}

if(__DEV__){
  webConfig.host.http = 'http://127.0.0.1:8801'
}

export default webConfig