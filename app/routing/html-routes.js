var express = require("express")
var router = express.Router()
var path =require("path")


router.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"home.html"))
})

router.get("/survery", function(req, res){
    res.sendFile(path.join(__dirname,"survery.html"))

})

module.exports = router