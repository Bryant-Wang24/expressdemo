const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("index模块")
})

module.exports = router