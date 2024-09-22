import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredText, setFilteredText] = useState('');

  useEffect(() => {
    let sentence = '';
    let all_words = [];
    let arr = ['Hi', 'Hello', 'World', 'Okay', 'Whatsapp'];

    for (let i = 1; i <= 1000; i++) {
      sentence = '';
      for (let j = 0; j < arr.length; j++) {
        sentence += ' ' + arr[Math.floor(Math.random() * arr.length)];
      }
      all_words.push(sentence.trim());
    }
    setText(all_words.join('\n'));
  }, []);

  useEffect(() => {
    if (filter === '') {
      setFilteredText(text);
    } else {
      const filteredSentences = text
        .split('\n')
        .filter((t) => t.includes(filter));
      setFilteredText(filteredSentences.join('\n'));
    }
  }, [text, filter]);

  return (
    <>
      <input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <pre>{filteredText}</pre>
    </>
  );
}

export default App;
