const {User}=require('../db/index')
function adminMiddleWare(req,res,next){ //middleware for verifying the user 
const username=req.headers.username;
const password=req.headers.password;
User.findOne({  //if user exists or not
    username:username,
    password:password
}).then(function(value){ //if exists  then move ahead to next middleware
    if(value){
        next();
    }else{    //else send the json message
        res.json({
            msg:'user does not exists'
        })
    }
})

}
module.exports=adminMiddleWare;