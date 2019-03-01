var express=require("express")
var UserModel=require("../models/UserModels.js")
var router = express.Router()

router.get("/",function(req,res){
  res.send({"info":"welcome to my server (user)"})
})

router.get("/home",function(req,res){
  res.send("ok user home")
})

router.get("/all",function(req,res){
  UserModel.find({},function(err,result){
    if(err){
      res.send({data:{},state:"no",msg:err})
    }else{
      res.send({data:result,state:"yes",msg:"mon message"})
    }
  })
})

router.post("/add",function(req,res){
  var user = new UserModel({firstName:req.body.firstName,lastName:req.body.lastName,phone:req.body.phone})
  user.save(function(err){
    if(err){
      res.send({status:"no",msg:err})
    }else{
      res.send({status:"yes",msg:"ok"})
    }
  })
})

router.put("/update/:id",function(req,res){
  UserModel.findByIdAndUpdate(req.params.id,{firstName:req.body.firstName,lastName:req.body.lastName},function(err){
    if(err){
      res.send({status:"no",msg:err})
    }else{
      res.send({status:"yes",msg:"ok"})
    }
  })
})

router.delete("/remove/:id",function(req,res){
  UserModel.remove({_id:req.params.id},function(err){
    if(err){
      res.send({status:"no",msg:err})
    }else{
      res.send({status:"yes",msg:"ok"})
    }
  })
})

module.exports=router;
