const express=require('express');
const app=express();
//app.use() takes middlewares as input
app.use(express.json()); // express.json() returns a middleware function
app.post('/health-checkup',function(req,res){
    const kidneys=req.body.kidneys;
    const kidneys_length=kidneys.length; // if any exception arises here the flow reaches from here to line-10 error based middlewares
    res.send('you have '+ kidneys_length +' kidneys');
});
//global catches: the code below runs only when there is exception in upper code 
app.use(function(err,req,res,next){ // this middleware only run when there is invalid input recieved from client side
    res.json({
        "message":'something is up with our server'
    })
})
app.listen(3000,()=>console.log('Your server is running on 3000 port'))
// global catches helps user to give better error message