const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://admin:Mayank%402104@cluster0.qqkx1.mongodb.net/');  // used to connect to the database

const AdminSchema= new mongoose.Schema({ //schema for Admin table
    username:String,
    password:String
});

const UserSchema=new mongoose.Schema({  //schema for User table
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});
const CourseSchema=new mongoose.Schema({ //schema for course table
    title:String,
    description:String,
    imageLink:String,
    price:Number
})
const Admin=mongoose.model('Admin',AdminSchema); // assigning the schema to the following table
const User=mongoose.model('User',UserSchema);
const Course=mongoose.model('Course',CourseSchema);

module.exports={ //exporting the table
    Admin,
    User,
    Course
}