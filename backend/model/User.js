// const { type } = require("@testing-library/user-event/dist/type");
// const { defaultMethod } = require("react-router-dom/dist/dom");

const mongoose=require("mongoose");

const {Schema}=mongoose;

const UserSchema=new Schema({

    name:{
        type:String,
        require:true
    },
    location:{
      type:String,
      required:true
    },
     email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        default:Date.now
      }

     
})

module.exports=mongoose.model("user", UserSchema)