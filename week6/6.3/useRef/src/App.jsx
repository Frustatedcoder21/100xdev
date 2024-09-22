import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(2000);
  const divref = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divref.current);
      divref.current.innerHTML = 10; 
    }, 10000);
  }, []);

  return (
    <>
     {/* it being done to get the ref of div instead of document.getElementbyId */}
      <div ref={divref}>
        {count}
      </div>
    </>
  );
}

export default App;
