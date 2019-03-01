var mongoose=require("mongoose")

var Schema=mongoose.Schema;

var SchemaModel = new Schema({
  name:{
    type:String,
    trim:true
  },price:{
    type:String,
    trim:true
  },category:{
    type:Schema.Types.ObjectId,
    ref:"Category"
  }
})

var ProductModel=mongoose.model("Products",SchemaModel)

module.exports=ProductModel
