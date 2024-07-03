const port=4000;
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');
const multer= require('multer');
const path=require('path');
const cors=require('cors');
// implement
app.use(express.json());
app.use(cors());
// connect
mongoose.connect("mongodb+srv://hoanghungbkevent:YoungH1810@cluster0.ybmamtc.mongodb.net/e-commerce");
app.get("/",(req,res)=>{
    res.send("express app is running")
})
//Image Storage
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload=multer({storage:storage});
// create upload endpoint for images
app.use('./images',express.static('./upload/images'));
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
app.listen(port,(err)=>{
    if(!err){
        console.log("success with port: ",port);
    }else{
        console.log("err: ",err);
    }
})