

export function Todos({todos}){
  async function handleCompleted() {
    await fetch('http://localhost:3000/completed',{
        method:'put',
        body:{
            completed:true
        },
        headers:{
            "Content-Type": "application/json",
          }
    }
    )
  }
    return <div>
        {todos.map((todo)=>{
            return <div style={{width:'50vw',display:'flex',flexDirection:'column' ,alignItems:'center',border:'1px solid black',margin:2,borderRadius:'10px'}}>
                <h1 >{todo.title}</h1>
                <h2 >{todo.description}</h2>
                <button onClick={handleCompleted}>{todo.completed==true?"completed":"mark as completed"}</button>
            </div>
        })}
    </div>
}