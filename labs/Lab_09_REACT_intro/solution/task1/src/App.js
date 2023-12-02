import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div>{counter}</div>
      <div className='buttonBlock'>
        <button onClick={()=>setCounter(counter-1)}>-1</button>
        <button onClick={()=>setCounter(counter+1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
