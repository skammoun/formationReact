var mongoose=require("mongoose")

var Schema=mongoose.Schema;

var SchemaModel=new Schema({
  name:{
    type:String,
    trim:true
  },description:{
    type:String,
    trim:true
  }
})

var CategoryModel=mongoose.model("Category",SchemaModel)

module.exports=CategoryModel
