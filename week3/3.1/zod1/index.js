const express=require('express');
const zod=require('zod');
const app=express();
const schema=zod.array(zod.number()) // it means that the schema of input should array of numbers
app.use(express.json());
app.post('/health-checkup',function(req,res){
    const kidneys=req.body.kidneys; // here the array is expected as input
    const response=schema.safeParse(kidneys) // it returns value in true or false
    if(!response.success){  //if false
        res.status(411).send('invalid input') //make the status 411 and send the value as invalid input
    }else{
    res.send({response}); // if true send the response
    }
});

app.listen(3000,()=>console.log('Your server is running on 3000 port'))
