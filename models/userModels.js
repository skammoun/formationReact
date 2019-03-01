var mongoose=require("mongoose")

var schema=mongoose.Schema;

var SchemaModel=new schema({
  firstName:{
    type:string,
    trim:true
  },lastName:{
    type:string,
    trim:true
  },phone:{
    type:string,
    trim:true
  }
})

var UserModel=mongoose.models("Users",SchemaModel)

module.exports=UserModel
