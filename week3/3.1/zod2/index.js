
const zod =require('zod');

function input_validate(obj){
    const schema =zod.object({ // first it should be object
        email:zod.string().email(), //email should be string and valid email
        password:zod.string().min(8)  // password should be string and minimum of 8 letters
    })
    const response=schema.safeParse(obj);
    if(!response.success){
        console.log('Invalid input');
        }else{
            console.log('valid input');
            
        }
}
input_validate({
    "email":'mp216138@gmail.com',
    "password":'Mayank@2104'
});