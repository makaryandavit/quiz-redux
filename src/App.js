import { useState } from 'react';
import './App.css';
import { Quiz } from './quiz/Quiz';

function App() {
  const [bool, setBool] = useState(false);
  const [inp1, setInp1] = useState('')
  const [hexinak, setHexinak] = useState(false)
  const [help, setHelp] = useState(false)
  const [xorhurd, setXorhurd] = useState(false)
  const [quiz, setQuiz] = useState(false)
  const [global, setGlobal] = useState(false)

  

  return (
      <Quiz />
  );
}

export default App;
