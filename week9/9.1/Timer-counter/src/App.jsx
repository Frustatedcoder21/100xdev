import { useState } from 'react'

import './App.css'
import { useInterval } from './hooks/useInterval'

function App() {
  const count=useInterval();

  return (
    <>
      <p>your count :{count}</p>
    </>
  )
}

export default App
