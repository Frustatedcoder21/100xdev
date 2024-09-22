import { useEffect, useState } from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("rendered")
  // if we  don't use useEffect the it will go under an infinite render , because after first render setTimeout will again run then again
  // after one second set variable is updated and loop continues
  useEffect(()=>{ // useEffect helps in a way that the code inside it will run on mounting (if dependency array is empty) , otherwise it will if element of dependency array changes
    setTimeout(()=>{
      setBankData({
        income:100
      })
    },1000);
  },[])
  
 useEffect(()=>{
  setTimeout(() => {
    setExchangeData({
      returns: 100
    });
  }, 1000);
 },[])
  

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App