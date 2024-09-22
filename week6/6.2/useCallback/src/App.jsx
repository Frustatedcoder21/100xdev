import { memo, useCallback, useState } from 'react'


function App() {
  const[count,setCount]=useState(0);
 const Hello=useCallback(()=>{  //it is use to memoize a function  
  console.log("Hello");
 },[]);
  return (
    <>
      <ButtonComponent input={Hello}/>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click me :{count}</button>
    </>
  )
}

const ButtonComponent= memo(({input})=>{  // here memo is used , though the props aren't changing it will re-render so the component in order to prevent that useCallback(()=>{},[dependency array]) is used
console.log("Rendered");
return(
  <div>Hello World</div>
)
})

export default App
