const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
        uppercase:true
    },
    Lastname:{
        type:String,
        required:true,
        uppercase:true
    },
    Email:{
        type:String,
        required:true,
    },
    phonenumber:{
        
        type:Number,
        required:true,
    },
})
module.exports =mongoose.model("collection 1",dataschema)