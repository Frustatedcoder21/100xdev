import { useSetRecoilState, useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/Count";

function App() {
  return (
    <>
    <RecoilRoot>
      <Count />
      </RecoilRoot>
      
    </>
  );
}

function Count() {
  console.log('ok')
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>{count}</b>
    <EvenCountRenderer/>
    </div>;
}

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {!isEven?"It is Even":null}
  </div>
}
function Buttons() {
  // const [count,setCount]=useRecoilState(countAtom); // we could use this but count is not required we only require set count
  const setCount = useSetRecoilState(countAtom); // so we only use useSetRecoilState to set the value , due to which Buttons component is not re-rendering;
  console.log("Button Re-rendered"); // it will render the first time the component mounts
  return (
    <div>
      <button onClick={() => setCount(count=>count + 1)}>Increase</button>  
      {/* here as count is passed as parameter on setCount call */}
      <button onClick={() => setCount(count=>count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
