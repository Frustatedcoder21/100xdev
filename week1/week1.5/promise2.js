var pr= new Promise(function(resolve){ // promise class takes function as input
    setTimeout(function(){
        resolve("Done"); // when the task is succesfully resolved after 10s , it is then accessible through .then
    },10000);
    
})
function print(){
    console.log(pr);
}
console.log(pr); // here it will show pending because  till then promise is resolved
pr.then(print)   // .then is called when the promise is resolved