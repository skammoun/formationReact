var express=require("express")
var OrderModel=require("../models/orderModels.js")
var router = express.Router()

router.get("/",function(req,res){
  res.send({"info":"welcome to my server (category)"})
})

router.get("/home",function(req,res){
  res.send("ok user home")
})

router.get("/all",function(req,res){
  OrderModel.find({},function(err,result){
    if(err){
      res.send({data:{},state:"no",msg:err})
    }else{
      res.send({data:result,state:"yes",msg:"mon message"})
    }
  })
})

router.post("/add",function(req,res){
  var order = new OrderModel({name:req.body.name,description:req.body.description,user:req.body.user,prods:req.body.prods})
  order.save(function(err){
    if(err){
      res.send({status:"no",msg:err})
    }else{
      res.send({status:"yes",msg:"ok"})
    }
  })
})

module.exports=router;
