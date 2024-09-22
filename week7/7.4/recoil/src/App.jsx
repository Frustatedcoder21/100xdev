import { useRecoilValue ,RecoilRoot} from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atom"


function App() {
   

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
   const finalValue = networkNotificationCount>=100?"99+":networkNotificationCount;
   const jobCount = useRecoilValue(jobAtom);
   const messagingCount= useRecoilValue(messagingAtom);
   const notificationCount=useRecoilValue(notificationAtom)
   
  //  const totalNotification=networkNotificationCount+jobCount+messagingCount+notificationCount; // the problem with this approach is that the value will be calculated everytime 
   // the shit re-renders so for the basic we can use is wrap it inside the useMemo hook or go for selectors
   const totalNotificationValue=useRecoilValue(totalNotificationSelector)
 console.log(finalValue);
  return (
    <>
      <button>Home</button>
      <button>My network({finalValue})</button>
      <button>Jobs({jobCount})</button>
      <button>Messagign({messagingCount})</button>
      <button>Notifications({notificationCount})</button>
      <button>Me({totalNotificationValue})</button>
    </>
  )
}


export default App
