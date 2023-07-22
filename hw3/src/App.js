import { useState } from 'react';
import './App.css';
import Box from './Components/Box';
import Posts from './Components/Posts';

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      {isShow && <Box />}
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      <Posts />
    </div>
  );
}

export default App;
