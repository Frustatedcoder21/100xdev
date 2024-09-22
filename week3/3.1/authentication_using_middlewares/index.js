const express= require('express');
const app = express();

function userMiddleWare(req,res,next){ // it is middleware
    const {username,password}=req.headers
    if(username!='harkirat' || password!='pass'){
        res.status(403).json({
            message:'user not found'
        })
    }else{
        next(); // from here flow is passed
    }
}
function kidneyMiddleWare(req,res,next){ // to here
    const {kidney}=req.query
    if(kidney!=1 && kidney!=2){
        res.status(411).json({
            message:'wrong input'
        })
    }else{
        next(); // from here to app.get
    }
}          // first userMiddleWare gets executed then kidneyMiddleWare then the arrow function
app.get('/health-checkup',userMiddleWare,kidneyMiddleWare,(req,res)=>{
    res.send('your heart is healthy');
})
app.get('/kidney-checkup',userMiddleWare,kidneyMiddleWare,(req,res)=>{
    res.send('your kidney is healthy');
})
//here only userMiddleWare gets executed as the heart-checkup doesn't require kidneyMiddleWare
app.get('/heart-checkup',userMiddleWare,(req,res)=>{
    res.send('your heart is healthy');
})
app.listen(3000,()=>console.log('app is running on 3000'))