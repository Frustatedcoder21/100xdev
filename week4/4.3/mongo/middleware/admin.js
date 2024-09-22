const {Admin}=require('../db/index')
function adminMiddleWare(req,res,next){  // for verifying the admin
const username=req.headers.username;  // take username and password as input in headers
const password=req.headers.password;
Admin.findOne({    // search if the Admin with that username and password exists or not
    username:username,
    password:password
}).then(function(value){
    if(value){ // if exists then move to other middleware
        next();
    }else{
        res.json({
            msg:'user does not exists'  // else say user didn't exist
        })
    }
})

}
module.exports=adminMiddleWare;