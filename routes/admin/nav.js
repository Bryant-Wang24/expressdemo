const express = require("express")
const multer = require('multer')
const path = require('path')
// const upload = multer({ dest: 'static/uploads' })
const storage = multer.diskStorage({
    // 配置上传的目录
    destination: function (req, file, cb) {
        cb(null, '\static/uploads')//上传之前目录必须存在
    },
    // 修改上传后的文件名
    filename: function (req, file, cb) {
        // 1、获取上传文件的后缀名
        let extname = path.extname(file.originalname)
        // 2、根据时间戳生成文件名
        cb(null, Date.now() + extname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/", (req, res) => {
    res.send("导航列表")
})
router.get("/add", (req, res) => {
    res.render("admin/nav/add")
    // res.send("增加导航")
})
router.get("/edit", (req, res) => {
    res.send("修改导航")
})
router.post("/doadd", upload.single('uploadedfile'), (req, res) => {
    // 获取表单传过来的数据
    // const body = req.body
    // console.log(req.file);
    res.send({
        body: req.body,
        file: req.file
    })
    console.log(req.file, req.body)
})
router.post("/doedit", (req, res) => {
    res.send("执行修改")
})

module.exports = router