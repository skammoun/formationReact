var express=require("express")
var user = require("./router/user")
var app=express();

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
