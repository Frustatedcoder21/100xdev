import React from "react";
import { useMousePointer } from "./hooks/useMousePointer";

function App() {
  const { x, y } = useMousePointer();

  return (
    <div style={{ width: '100vw', height: '100vh',backgroundColor:'black' ,boxSizing:"border-box", margin:'0px',padding:'0px' }}>
      <h1>Mouse Position</h1>
      <div
        style={{
          width: '10px',
          height: '10px',
          border: '1px solid black',
          position: 'absolute', // Change 'relative' to 'absolute'
          top: y,  // Corrected top and left to use x and y values
          left: x,
          borderRadius:'50px',
          backgroundColor:'yellow',

        }}
      ></div>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
}

export default App;
