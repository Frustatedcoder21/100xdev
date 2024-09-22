
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { Landing } from "./components/Landing"

function App() {
  
  return (
    <>
    <div >
     <button onClick={()=>{
      window.location.href="/"  //windows.location.href gives http://localhost:5173/ 
     }}>Landing</button>
     <button onClick={()=>{
      window.location.href="/dashboard" //windows.location.href='/dashboard' gives http://localhost:5173/dashboard 
     }}>Dashboard</button>
    </div>
     <BrowserRouter>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Landing/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
