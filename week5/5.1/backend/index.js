const express=require('express');
const {createTodo,updateTodo}=require('./types')
const {todo}=require('./db/index')
const app=express();
const cors=require('cors')
app.use(cors())
app.use(express.json());

app.post('/todo',async (req,res)=>{
const createPayload={
    title:req.body.title,
    description:req.body.description
}
const parsePayLoad=createTodo.safeParse(createPayload);
if(!parsePayLoad.success){
    res.status(411).json({
        msg:'you sent the wrong inputs'
    })
    return;
}
await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
})
res.json({
    msg:"Todo created"
})
})
app.get('/todos',async(req,res)=>{
  const todos = await todo.find({});
   res.json({
    todos
   })
})
app.put('/completed',async(req,res)=>{
const updatePayload=req.body;
const parsePayLoad=updateTodo.safeParse(updatePayload);
if(!parsePayLoad.success){
    res.status(411).json({
        msg:"You sent the wrong inputs"
    })
    return;
}
await todo.update({
_id:req.body.id
},{
    completed:true
})
res.json({msg:'marked as completed'})
})
app.listen(3000,()=>{
    console.log('listening on 3000 port');
    
})