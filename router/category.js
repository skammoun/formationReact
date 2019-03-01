var express=require("express")
var CategoryModel=require("../models/categoryModels.js")
var router = express.Router()

router.get("/",function(req,res){
  res.send({"info":"welcome to my server (category)"})
})

router.get("/all",function(req,res){
  CategoryModel.find({},function(err,result){
    if(err){
      res.send({data:{},state:"no",msg:err})
    }else{
      res.send({data:result,state:"yes",msg:"mon message"})
    }
  })
})

router.post("/add",function(req,res){
  var category = new CategoryModel({name:req.body.name,description:req.body.description})
  category.save(function(err){
    if(err){
      res.send({status:"no",msg:err})
    }else{
      res.send({status:"yes",msg:"ok"})
    }
  })
})

module.exports=router;
