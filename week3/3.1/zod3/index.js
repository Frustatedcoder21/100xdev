const express=require('express');
const app=express();
const zod =require('zod');

function input_validate(obj){
    const schema =zod.object({ // first it should be object
        email:zod.string().email(), //email should be string and valid email
        password:zod.string().min(8)  // password should be string and minimum of 8 letters
    })
    const response=schema.safeParse(obj);
    return response;
}
app.use(express.json())
app.post('/',function(req,res){
    if(input_validate(res.body)){
        res.json({
            message:'valid input',
        }
        )
    }else{
        res.json({
            message:'invalid input'
        })
    }
})
app.listen(3000,()=>console.log(`listening on port 3000`))