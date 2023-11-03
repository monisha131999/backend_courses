const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    Title:{
        type:String,
        require:true,
        uppercase:true
    },
    Body:{
        type:String,
        require:true,
    },

})
module.exports =mongoose.model("project collections",dataschema)
