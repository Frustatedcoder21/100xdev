import { useOnline } from "./components/useOnline"

function App() {
const online=useOnline();
 if(!online){
  alert(`connect to internet`)
 }

  return (
    <>
      {online?<div>Online</div>:<div>Offline</div>}
    </>
  )
}

export default App
