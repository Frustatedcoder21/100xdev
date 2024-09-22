import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState(0);

  useEffect(() => {
    const val = (Math.abs(count - input) + 1) * (count + input) / 2;
    setSum(val);
  }, [count, input]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setInput(Number(e.target.value)); // Convert input to a number
        }}
      />
      <p>Sum is {sum}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ border: '1px solid black', borderRadius: '3px' }}
      >
        Count ({count})
      </button>
    </>
  );
}

export default App;
