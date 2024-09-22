const express=require('express');
const app=express();

app.get('/health-checkup',(req,res)=>{
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;

    if(username!="harkirat" && password!="pass"){
        res.status(403).json({
            msg:'User doesnt exist',
        });
        return;
    }
    if(kidneyId!=1 && kidneyId !=2){
        res.status(411).json({
            msg:'wrong inputs',
        });
        return;
    }
    res.send('your kidney is healthy');
})
app.listen(3000,()=>console.log('Server is running on 3000'))
// check it using postman