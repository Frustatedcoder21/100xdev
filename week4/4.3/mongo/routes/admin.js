const express = require("express");
const adminMiddleWare=require('../middleware/admin');
const { Admin, Course } = require("../db");
const router=express.Router();

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
// for admin uploading the course
router.post('/courses',adminMiddleWare,async (req,res)=>{   // first verify whether the admin exists or not then give the permission to give the entry of the course
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

// endpoint to show all the course to admin
router.get('/course',adminMiddleWare,(req,res)=>{  // verify the admin then show the courses
    Course.find({})
             .then(function(response){
                res.json({
                    courses:response
                })
             })
})
module.exports=router;