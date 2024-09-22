import { useEffect, useRef, useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [key, setKey] = useState(0);
  const [value, setValue] = useState('');
  const output=useRef();
  useEffect(() => {
    function encrypter() {
      setKey((key) => key % 26); // Key within alphabet bounds
      const encrypted = input.split('').map((char) => {
        const code = char.charCodeAt(0);
        // Check if character is a letter
        if (code >= 65 && code <= 90) {
          // Uppercase letters
          return String.fromCharCode(((code - 65 + key) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          // Lowercase letters
          return String.fromCharCode(((code - 97 + key) % 26) + 97);
        } else {
          // Non-alphabetical characters remain unchanged
          return char;
        }
      }).join('');
      setValue(encrypted);
    }
    encrypter();
  }, [input, key]);
  function handleCopy(){
 navigator.clipboard.writeText(output.current.value)
 alert('copied')
  }

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor:'slateblue', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{textDecoration:'underline'}}>Encryption</h1>
      <div id="input" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Plain text:</h2>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{ width: '500px', height: '50px', borderRadius: '5px', fontSize:'20px',marginRight:'5px'}} />
        <input type="number" value={key} onChange={(e) => setKey(Number(e.target.value))} style={{ width: '50px', height: '50px', borderRadius: '5px', fontSize:'20px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button style={{ width: '50px', height: '24px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setKey(k => k + 1)}>Λ</button>
          <button style={{ width: '50px', height: '24px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => key <= 0 ? setKey(0) : setKey(k => k - 1)}>V</button>
        </div>
      </div>
      <div id="output" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '300px' }}>
        <h2>Cipher text:</h2>
        <input type="text" readOnly style={{ width: '500px', height: '50px', borderRadius: '5px', fontSize:'20px' }} value={value} ref={output} />
        <button style={{ width: '80px', height: '50px', borderRadius: '5px', fontSize:'20px' }} onClick={handleCopy} >copy</button>
      </div>
    </div>
  );
}

export default App;
