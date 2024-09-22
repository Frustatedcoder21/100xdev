const express = require("express");
const adminMiddleware=require('../middlewares/admin.js');
const { Admin, Course, User } = require("../db");
const jwt_secret=require('../config')
const router=express.Router();
const jwt=require('jsonwebtoken')

router.post('/signup',async (req,res)=>{   // for admin to sign up
    const username=req.body.username;
    const password=req.body.password;
    await Admin.create({    // adding the new admin entry to database
        username:username,
        password:password
    })
    res.json({  // after creating send the message
        message:"Admin created successfully"
    })

})
router.post('/signin',async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user=await User.find({
        username,
        password
    })
    if(user){
    const token=jwt.sign({
        username
    },jwt_secret)
    res.json({
        token
    })
}else{
    res.status(411).json({
        message:'Incorrect email and password'
    })
}   
})
router.post('/courses',adminMiddleware,async (req,res)=>{   // first verify whether the admin exists or not then give the permission to give the entry of the course
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
 const newCourse= await  Course.create({   //create the new entry of course in course table
        title,
        description,
        imageLink,
        price
    })
    res.json({  // after creating the new entry send the message
        message:'Course created successfully', courseId:newCourse._id
    })
})
module.exports=router;