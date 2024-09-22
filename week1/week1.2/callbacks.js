function add(val1,val2){
    console.log(val1+val2);
}
function sub(val1,val2){
    console.log(val1-val2);
}
function mult(val1,val2){
    console.log(val1*val2);
}
function div(val1,val2){
    console.log(val1/val2);
}

function calc(val1,val2,perf){
perf(val1,val2);
}
calc(2,5,add);
calc(5,2,sub);
calc(2,5,mult);
calc(5,2,div);
