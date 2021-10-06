const express = require('express')
var session = require('express-session')
const app = express()

// 配置session的中间件
app.use(session({
    secret: 'keyboard cat',//服务器端生成session的签名
    name: 'name',//修改session对应cookie的名称
    resave: false,//强制保存session，即使它没有变化
    saveUninitialized: true,//强制将未初始化的session存储
    cookie: {
        maxAge: 1000 * 60,
        secure: false//true白哦是只有https协议才能访问cookie
    },
    rolling: true//在每次请求时强行设置cookie，重置cookie过期时间，默认false
}))

app.get('/', (req, res) => {
    //获取session
    if (req.session.username) {
        res.send(req.session.username + req.session.age + "-已登录")
    } else {
        res.send('没有登陆')
    }

})
app.get('/login', (req, res) => {
    req.session.username = "张三"//设置session
    req.session.age = 23
    res.send('执行登陆')
})
app.get('/loginout', (req, res) => {
    // 销毁session的三种方法

    // 1、设置session的过期时间为0（这种方法会把所有的session都销毁）
    // req.session.cookie.maxAge = 0

    // 2、销毁指定的session
    // req.session.username = ""

    // destroy方法销毁session
    req.session.destroy()
    res.send('退出登陆')
})
app.listen(3001)