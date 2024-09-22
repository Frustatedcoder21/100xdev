
import React from "react"; 
import { useState } from "react"


function App() {
  const [number, setNumber] = useState(0);

  const handleOnChange = () => {
    setNumber(Math.random());
  };

  return (
    <>
      <button onClick={handleOnChange}>Click me</button>
      <Header title={`My name is ${number}`} />
      <Header title="My name is Mayank" />
    </>
  );
}

const Header = React.memo(function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  );
});

export default App;
