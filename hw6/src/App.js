import { createContext } from 'react';
import './App.css';
import Page from './Components/Page';

export const Context = createContext(null);

function App() {
  const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Steve"},
    {id: 3, name: "Kim"},
    {id: 4, name: "Jane"},
    {id: 5, name: "Monica"},
  ]

  return (
    <div className="App">
      <Context.Provider value={{users}}>
        <Page />
      </Context.Provider>
    </div>
  );
}

export default App;
