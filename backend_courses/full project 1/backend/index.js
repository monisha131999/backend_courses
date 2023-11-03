const express=require('express');
const app=express();
const path = require('path');
const mongoose=require('mongoose');//mongoose connect panurom database oda
const Schema=require('./Schema');//schema create panurom
const cors = require('cors');

// mongoose.connect('mongodb+srv://Monisha:<Abumoni>@cluster0.a2z2ppz.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb://127.0.0.1:27017/project1')
.then(()=>{
    console.log("Db connected successfully");
}).catch(()=>{
    console.log("DB not connected");
})//promise return panuthu

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.post('/post',async(req,res)=>{
    const data=new Schema({
        // ...req.body


        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        phonenumber:req.body.phonenumber
    })

//save pananum data va
const savedata = await data.save().then(()=>{
    res.json({
        msg:"data saved successfully"
        })
   })
})

app.get('/get',async(req,res)=>{
    const Data =await Schema.find({})
    res.json(Data)
})

//put means update
app.put('/put/:id',async(req,res)=>{
    const data = await Schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json(data)
})

//delete the datas
app.delete('/delete/:id',async(req,res)=>{
    const data = await Schema.findByIdAndDelete(req.params.id)

    res.json({msg:"data deleted successfully"})
})



    
app.listen(7000,()=>{
    console.log("server is running ");
})























//     app.get('/*',(req,res)=>{
//         setTimeout(()=>{
//             res.sendFile(path.join(__dirname, '404 error page.html'));
//         },2000)
// })