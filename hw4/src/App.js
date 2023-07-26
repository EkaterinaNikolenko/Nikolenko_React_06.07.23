import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Articles from './pages/Articles';

function App() {
  return (
    <div className="App">
      <nav className='navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/articles'>Articles</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/articles/:postId' element={<Post />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
