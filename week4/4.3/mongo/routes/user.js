const {Router}=require('express');
const router=Router();
const userMiddleWare=require('../middleware/user');
const { User, Course } = require('../db');

router.post('/signup',async (req,res)=>{ //endpoint for user to signup
    const username=req.body.username; 
    const password=req.body.password;
    await User.create({ // create the entry in users table
        username,
        password
    })
    res.json({
        msg:'user created successfully'
    })
})
router.get('/courses',async (req,res)=>{  // get the course without signing in
 const response = awaitCourse.find({});
 res.json({
    Courses:response
 })
})
//end point for the user to buy the course
router.post('/courses/:courseId',userMiddleWare,async (req,res)=>{
    const courseId=req.params.courseId;
    const username=req.headers.username;
    await User.updateOne({
        username:username
    },{
        "$push":{   //push the purchased course inside the purchased course array
            purchasedCourses:courseId
        }
    })
    res.json({
        msg:'purchase complete'
    })
})
// endpoint for users dashboard to show their purchased courses
router.get('/purchasedCourse',userMiddleWare,async(req,res)=>{ 

    const user=await User.findOne({
        username:req.headers.username
    });
    console.log(user.purchasedCourses)
    const courses=await Course.find({
        _Id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
})
module.exports=router;