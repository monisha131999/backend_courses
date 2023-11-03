const express=require('express')
const app=express();
const path=require('path')
const mongoose=require('mongoose');
const Schema=require('./schema');
const cors = require('cors');
const schema = require('./schema');

mongoose.connect('mongodb://127.0.0.1:27017/project')
.then(()=>{
    console.log("Db is connected successfully");
}).catch(()=>{
    console.log("DB not connected");
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.post('/post',async(req,res)=>{
    const data=new Schema({
      ...req.body

        // Title:req.body.Title,
        // Body:req.body.Body
    })
    
// save data
 const savedata = await data.save().then(()=>{
    res.json({
        msg:"data saved successfully"
    })
  })

})

app.get('/get',async(req,res)=>{
    const Data =await schema.find({})
    res.json(Data)
})



app.listen(1000,()=>{
    console.log("server is running");
})