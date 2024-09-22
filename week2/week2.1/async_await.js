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