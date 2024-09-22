//fetch way to do  it
/*
   async function todo() {
    const response=await fetch(`https://sum-server.100xdevs.com/todos`)
    const data=await response.json();
    console.log(data.todos.length);
}
todo();*/

//way to make post request using fetch
/*
async function todo() {
    const response=await fetch(`https://www.postb.in/1723896453077-4212696936447`,{
        method:'POST',
    })
    const data=await response.text(); // it will return text
    console.log(data);
}
todo();
*/

//axios way
/*
const axios=require('axios');
async function todo() {
    const response=await axios.get(`https://sum-server.100xdevs.com/todos`)
    console.log(response.data.todos.length); // to get data we use response.data
}
todo();
*/
// axios way to post request
const axios=require('axios');
async function todo() {
    const response=await axios.post(`https://www.postb.in/1723896453077-4212696936447`)
    console.log(response.data); // to get data we use response.data
}
todo();