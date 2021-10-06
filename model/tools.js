
const multer = require('multer')
const path = require('path')
// const upload = multer({ dest: 'static/uploads' })

let tools = {
    multer() {
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
        return upload
    }
}

module.exports = tools