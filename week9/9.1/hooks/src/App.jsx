import { useEffect, useState } from 'react'

function App() {
 const [render,setRender]=useState(true)

 useEffect(()=>{
  setTimeout(()=>{
    setRender(r=>!r);
  },5000)
 },[])
  return (
    <>
    {render?<MyComponent/>:<div></div>}   
    </>
  )
}

function MyComponent(){
  useEffect(()=>{
    console.error('Component: mounted'); // this runs when component gets mounted

    return ()=>{  // this only runs when dependency changes but for the empty array it works for unmount
      console.log("component: unmounted");
    }
  },[])

 return <div>
  from inside my component
 </div>
}
export default App
