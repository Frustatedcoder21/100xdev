import { useCallback, useState, useEffect } from 'react';

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const onHandleClick = useCallback(() => {
    setSecond(prevSecond => {
      if (prevSecond === 59) {
        setMinute(prevMinute => {
          if (prevMinute === 59) {
            setHour(prevHour => prevHour + 1);
            return 0;
          } else {
            return prevMinute + 1;
          }
        });
        return 0;
      } else {
        return prevSecond + 1;
      }
    });
  }, []);

  useEffect(() => {
    const timerId = setInterval(onHandleClick, 1000);
    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [onHandleClick]);

  return (
    <>
      <p>{hour}:{minute}:{second}</p>
    </>
  );
}

export default App;
