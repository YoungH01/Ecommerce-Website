const port=4000;
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');
const multer= require('multer');
const path=require('path');
const cors=require('cors');
const { error } = require('console');
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
app.use('/images',express.static('./upload/images'));
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
});
// schema product
const Product=mongoose.model("product",{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    avilable:{
        type:Boolean,
        default:true
    }
})
// add product
app.post("/addproduct",async(req,res)=>{
    let products= await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }else id=1;
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        new_price:req.body.new_price,
        category:req.body.category,
        old_price:req.body.old_price,
    });
    console.log(product);
    console.log(req.body);
    await product.save();
    console.log("status:save");
    res.json({
        success:true,
        name:req.body.name
    })
})
// delete product
app.post("/deleteproduct",async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("deleted");
    res.json({
        success:true,
        name:req.body.name
    })
})
// get all product
app.get("/allproducts",async(req,res)=>{
    let products= await Product.find({});
    console.log("get all products");
    res.send(products);
})
// Schema creating for user model
const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
app.post('/signup',async(req,res)=>{
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({
            success:false,
            error: "existing user found with same email address"
        })
    }
    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();
    const data={
        user:{
            id:user.id,
        }
    }
    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})
app.post('/login',async (req,res)=>{
    let user= await Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }else res.json({success:false,errors:"wrong password"})
    }else res.json({success:false,errors:"Wrong Email"})
})
// creating  endpoint for newcollection data
app.get('/newcollections',async (req,res)=>{
    let products= await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("newcollection fetched");
    res.send(newcollection);
})
// creating  endpoint for woman popular data
app.get('/popularinwomen',async(req,res)=>{
    let products= await Product.find({category:'women'});
    let popular_in_women=products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women)   
})
// 
const fetchUser= async (req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authenticate using valid token"});

    }else{
        try{
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }catch(err){
            res.status(401).send({errors:"please authenticate using valid token"});
        }
    }
}
// 
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log(req.body,req.user);
    let userData= await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("added");
})
app.post('/removefromcart',fetchUser,async(req,res)=>{
    let userData= await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]-=1;
    if(userData.cartData[req.body.itemId]<0) userData.cartData[req.body.itemId]=0;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("removed");
})
app.post('/getcart',fetchUser,async(req,res)=>{
    let userData= await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})
app.listen(port,(err)=>{
    if(!err){
        console.log("success with port: ",port);
    }else{
        console.log("err: ",err);
    }
})