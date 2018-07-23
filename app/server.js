var express =require("express")
var path = require("path")
var logger = require('morgan');
var html_router =require("./routing/html-routes")
var app = express();

var PORT = process.env.PORT || 3000;
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use("/",html_router)


app.use(function(req ,res, next){
    var err = new Error("not found")
    next(err)
})


app.use(function(err, req, res){
    res.status(err.status || 500).send(err.message || "server err")
})

app.listen(PORT)
console.log("web server listen on" + PORT)