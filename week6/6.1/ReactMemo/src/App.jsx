
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
      <Header title="My name is Mayank" />
      <Header title="My name is Mayank" />
      <Header title="My name is Mayank" />
    </>
  );
}
//In React.memo if we wrap a component then that component only re-renders when there is change in state otherwise it won't re-renders
const Header = React.memo(function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  );
});

export default App;