import { useEffect, useRef } from "react"
export function CreateTodo(){
    const titleref=useRef()
    const descriptionref=useRef()

        async function addTodo() {
        await fetch('http://localhost:3000/todo',{
            method:'POST',
            body:JSON.stringify({
                title:titleref.current.value,
                description:descriptionref.current.value
            }),headers: {
                "Content-Type": "application/json",
              },
        })
        titleref.current.value="";
        descriptionref.current.value="";
        }
  
    return <div style={{border:'1px solid black',display:'flex',justifyContent:'center'}}>
    <input  type="text"  ref={titleref} placeholder="title" style={{margin:10,padding:10, borderRadius:'10px'}}/> 
    <input type="text"  ref={descriptionref} placeholder="description"style={{margin:10,padding:10, borderRadius:'10px'}} />
    <button style={{margin:10,padding:10, borderRadius:'10px'}} onClick={addTodo}>Add</button>
    </div>
}