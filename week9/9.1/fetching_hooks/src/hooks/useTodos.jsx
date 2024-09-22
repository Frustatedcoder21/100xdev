import { useEffect, useState } from 'react'
export function useTodos(n){

    const[todos,setTodos]=useState([]) //state variable for todos
    const[loading,setLoading]=useState(true); //loading is a state variable set to true as default
 useEffect(()=>{
 const fetch_todos= async()=>{
    const response= await fetch(`https://sum-server.100xdevs.com/todos`);
  const data= await response.json();
  setTodos(data.todos);
  setLoading(false);
  }
  const value =setInterval(fetch_todos,n*1000) // on every n seconds todos get updated
  
  return ()=>{  // this code runs when  dependencies changes here it  is n  if n changes old interval first have to be cleared
    clearInterval(value);
  }
  
 },[n])
 return {todos,loading};
}