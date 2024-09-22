import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={()=>{
        setCount(count=>count+1); // inside setCount() there is a arrow function in which which takes current count as input and returns count+1 as output
        setCount(count=>count+1); // inside setCount() there is a arrow function in which which takes current count as input and returns count+1 as output
      }
      }>Count {count}</button>
      <button onClick={()=>{
        setCount(count=>count+1); // inside setCount() there is a arrow function in which which takes current count as input and returns count+1 as output
        setCount(count=>count+1); // inside setCount() there is a arrow function in which which takes current count as input and returns count+1 as output
      }
      }>Count {count}</button>
      
    </>
  )
}

export default App
