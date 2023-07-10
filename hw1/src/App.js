import './App.css';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <Input />
      <Button text="Submit" />
      <Button text="Delete" />
    </div>
  );
}

export default App;
