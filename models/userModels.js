var mongoose=require("mongoose")

var Schema=mongoose.Schema;

var SchemaModel=new Schema({
  firstName:{
    type:String,
    trim:true
  },lastName:{
    type:String,
    trim:true
  },phone:{
    type:String,
    trim:true
  }
})

var UserModel=mongoose.model("Users",SchemaModel)

module.exports=UserModel
