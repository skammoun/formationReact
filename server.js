var express=require("express")
var user = require("./router/user")
var product = require("./router/product")
var bodyParser = require("body-parser")

var db = require("./models/db")

var app=express();

app.use(bodyParser.json())

app.use("/users",user)

app.get("/",function(req,res){
  res.send("bonjour")
})

app.get("/home",function(req,res){
  res.send("home")
})

app.listen(3000,function(){
  console.log("start")
})
