const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {
    res.render("login", {})
})


router.post("/doLogin", (req, res) => {
    // req.body获取post传值
    let body = req.body
    console.log(body);
    res.send("执行提交" + body.username)
})

module.exports = router