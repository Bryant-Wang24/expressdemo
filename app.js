const express = require('express')
const app = express()


app.set("view engine", "ejs")

// 配置静态web目录
app.use(express.static("static"))


app.get('/', function (req, res) {
    let title = "你好ejs"
    res.render("index", {
        title: title
    })
    // res.send('你好，express')
})
app.get('/news', function (req, res) {
    let title = {
        username: '王秋爽',
        age: 23
    }
    let h = "<h3>我是h3标题</h3>"
    let list = ['3333333', '44444444', '555555']
    res.render("news", {
        title: title,
        h: h,
        tags: true,
        score: 60,
        list: list
    })
    // res.send('你好，express')
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
    const id = req.params['id'];
    res.send('动态路由' + id)
})

// get传值
app.get('/product', function (req, res) {
    let query = req.query
    console.log(query);
    res.send('product' + query.id)
})
app.listen(3000)