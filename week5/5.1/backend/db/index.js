const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://admin:Mayank%402104@cluster0.qqkx1.mongodb.net/Todo');

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}