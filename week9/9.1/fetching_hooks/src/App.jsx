
import { useTodos } from './hooks/useTodos'

function App() {
  
 const {todos,loading}=useTodos(5);
  return (
    <>
       {!loading ? todos.map((d)=>{ // if not loading traverse the todos else load the div 
        return <div>
          {d.title} <br />
          {d.description}
        </div>
       }):<div>loading..</div>} 
    </>
  )
}

export default App
