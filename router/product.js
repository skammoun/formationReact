var express=require("express")

var router = express.Router()

router.get("/",function(req,res){
  res.send("ok user")
})

router.get("/home",function(req,res){
  res.send("ok user home")
})

module.exports=router;
