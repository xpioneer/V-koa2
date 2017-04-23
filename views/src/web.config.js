let webConfig = {
  host: {
    http: '/',
    ws: '',
  },
  apiPath: '/api',
  RootPath:"/"
}

if(__DEV__){
  webConfig.host.http = 'http://127.0.0.1:8800'
}

export default webConfig