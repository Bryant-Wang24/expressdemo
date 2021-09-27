const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('你好，express')
})
app.get('/article', function (req, res) {
    res.send('新闻页面')
})
app.get('/login', function (req, res) {
    res.send('登陆页面')
})
app.get('/register', function (req, res) {
    res.send('注册页面')
})

app.post('/doLogin', function (req, res) {
    res.send('执行登陆')
})
app.put('/editUser', function (req, res) {
    res.send('修改用户')
})
app.delete('/editUser', function (req, res) {
    res.send('删除用户')
})



// 路由多级目录
app.get('/editUser/admin', function (req, res) {
    res.send('多级目录用户')
})
// 动态路由
app.get('/edit/:id', function (req, res) {
    var id = req.params['id']
    res.send('动态路由' + id)
})

// get传值
app.get('/product', function (req, res) {
    let query = req.query
    console.log(query);
    res.send('product' + query.id)
})
app.listen(3000)