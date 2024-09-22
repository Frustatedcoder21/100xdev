import { useContext, useState } from 'react';
import { CountContext } from './context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        {/* Passing the entire context value (an object) with both count and setCount */}
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  // here the count state variable is not used , it shouldn't re-render by logic by  it re-renders
  return (
    <div>
      <CountRenderer /> 
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  // Correctly using useContext to get the count value
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  // Correctly using useContext to get both count and setCount
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
