###V-koa2

>该项目由koajs开发，使用了新的async/await语法。全程使用import/export导入导出，方便兼容未来开发趋势。
>已正常运行于阿里云服务器上，无需编译，可以后台常驻启动。

####初始化：
    
    node版本为7.9+ #(最好使用最新版本的node)
    yarn #安装
    yarn start #运行服务 (数据库为mysql)


####项目主要内容是个人博客。主要技术框架：

    mysql   #数据库
    koa2js  #nodejs
    sequelize #基于nodejs的一个orm
    
对外提供restful风格api，各种喜好的中间件，可以开启拦截、跨域、请求处理、响应处理。

#####例如：
api返回数据格式
   
    #普通接口数据
    对应http状态码200
    {
        data: {...},
        msg: 'xxx',
        status: 200
    }
    对应http状态码500
    {
        data: 'xxx',
        msg: 'Internal Server Error',
        status: 500
    }
    其他常用的，都可以自己喜好对应。此举为方便前端数据处理(仿php框架laravel)。
    
    #分页数据
    {
        data: [{...},{...},...],
        msg: 'xxx',
        meta: {/*分页数据*/},
        status: 200
    }
    
#####欢迎star，欢迎指导！

