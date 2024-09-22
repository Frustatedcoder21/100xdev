const express=require('express');
const zod=require('zod');
const jwt=require('jsonwebtoken');
const { emit } = require('process');
const app=express();

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6)
})
app.use(express.json())
function verify(req){
const user={
    email:req.body.email,
    password:req.body.password
}
const response=schema.safeParse(user);
return [response,user];
}
function sign(req,res,next){
    const[response,user]=verify(req)
    if(response.success){
        const resp=jwt.sign(user,'mayank');
        res.json({
            token:resp
        })
    }else{
        next()
    }
}
app.post('/',sign, (req,res)=>{
   res.send(null);
})
app.listen(3000);