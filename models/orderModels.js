var mongoose=require("mongoose")

var Schema=mongoose.Schema;

var SchemaModel = new Schema({
  name:{
    type:String,
    trim:true
  },description:{
    type:String,
    trim:true
  },user:{
    type:Schema.Types.ObjectId,
    ref:"Users"
  },prods:[
    {
      type:Schema.Types.ObjectId,
      ref:"Products"
    }
  ]
})

var OrderModel=mongoose.model("Orders",SchemaModel)

module.exports=OrderModel
