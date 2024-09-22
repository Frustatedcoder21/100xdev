import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount} />
     
    </>
  );
}
// suppose if we want the button component inside the count 
// here the count component only need count props but we have to pass the setCount component
// just for the children component , here the case of prop drilling arises
// count component act as mediator between the App and the Buttons component  for setCount props
function Count({ count,setCount }) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount} />
    </div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;
