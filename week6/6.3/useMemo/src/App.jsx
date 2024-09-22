import { useEffect, useMemo, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});
 console.log('Rendered')
  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    })
  }, [])

  const cryptoReturns = useMemo(()=>{
 return exchange1Data.returns + exchange2Data.returns;  //the sum of exchange1Data.returns, exchange2Data.returns is not changing then when it
 // should be evaluated after every run so in order to prevent it we wrap it inside the useMemo hook
},[exchange1Data,exchange2Data]) //cryptoReturns will only change if the dependency array element changes
  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App