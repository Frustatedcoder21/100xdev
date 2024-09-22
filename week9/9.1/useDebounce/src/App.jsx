import { useEffect, useState } from 'react'

function useDebounce(value,n){
const[debouncedvalue,setDebounceValue]=useState('');
useEffect(()=>{
const interval=setTimeout(()=>setDebounceValue(value),n);
return()=>{
  clearTimeout(interval);

}
},[value,n])
return debouncedvalue;
}

function App() {
  const [value,setvalue]=useState('');
  const debouncedvalue=useDebounce(value,500)

  return (
    <>
     Debounced Value :{debouncedvalue}
     <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
    </>
  )
}

export default App
