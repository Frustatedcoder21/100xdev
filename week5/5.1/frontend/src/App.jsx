import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
   async function fetchTodos(){
    const response=await fetch('http://localhost:3000/todos');
    const data= await response.json();
    setTodos(data.todos);
   }
   fetchTodos();
  },[])

  return (
    <>
     <CreateTodo/>
     <Todos todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
