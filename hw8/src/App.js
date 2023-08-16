import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Users from './Components/Users';
import Posts from './Components/Posts';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
