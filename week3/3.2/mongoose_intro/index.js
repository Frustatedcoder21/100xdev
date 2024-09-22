const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:Mayank%402104@cluster0.qqkx1.mongodb.net/userappnew')
const User=mongoose.model('Users',{name:String , email:String,password:String});
const express=require('express');
const app=express();
app.use(express.json());
app.post('/sign-up',async function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const existing_user= await User.findOne({email:email})
    if(existing_user){
        res.status(400).json({
            message:'user already exists'
        })
    }
    const user=new User({
        name:name,
        email:email,
        password:password
    })
    user.save();
    res.json({
        message:'new user created'
    })
    
})
app.listen(3000);
