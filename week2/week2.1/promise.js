//promise no -1
const p = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("doing the async work"); // doing async task
        resolve({user:"Mayank", Age:10, Gender:"Male"}); // passing value to .then function
    },1000)
});
p.then(function(user){ // user object recieved from resolve function
    console.log("resolved");
    console.log(user);
})

//promise no -2
const promise = new Promise(function(resolve,reject){

    setTimeout(function(){
        const error=false; // setting error
        if(!error){
            resolve({username:"Mayank", age:24, Gender: "Male"}) // if not error pass object
        }else{
            reject("Something Went Wrong") // if error throw the error
        }
    },1000)
   
});
// //promise chaining
// promise.then(function(user){
// console.log(user);
// return user.username; // user.username passed is recieved in other .then function
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){ // it catches the error
//     console.log(error)
// }).finally(()=>console.log("promise is resolve or rejected")); 

async function consumepromise(){

    try{
        const response= await promise
        console.log(response); 
    }
    catch(error){
        console.log(error);
    }
}
consumepromise();