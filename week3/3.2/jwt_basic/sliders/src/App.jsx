import { useState } from 'react';

function App() {
  const [left, setLeft] = useState(0);
  const boxWidth = 250; // Width of the box in pixels
  const viewportWidth = window.innerWidth; // Get the viewport width in pixels

  function handleSlider(e) {
    const sliderValue = e.target.value;
    // Calculate the maximum left value that ensures the box stays within the viewport
    const maxLeft = viewportWidth - boxWidth;
    const calculatedLeft = (sliderValue / 100) * maxLeft; // Convert slider value to a pixel-based left position
    setLeft(calculatedLeft);
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div
        style={{
          width: `${boxWidth}px`,
          height: '250px',
          border: '1px solid black',
          backgroundColor: 'blueviolet',
          position: 'absolute',
          left: `${left}px`,
        }}
      ></div>
      <input
        type="range"
        min={0}
        max={100}
        style={{ width: '98vw', marginTop: '500px' }}
        onChange={handleSlider}
      />
    </div>
  );
}

export default App;
