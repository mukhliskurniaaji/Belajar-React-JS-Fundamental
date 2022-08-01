import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className="app">
      <div className='brand'>Banyu Bening Website</div>
      <nav className='nav'>
          <Link to = '/' className='nav-item'>Home</Link>
          <Link to = '/profile' className='nav-item'>Profile</Link>
          <Link to = '/contact' className='nav-item'>Contact</Link>
          <Link to = '/blog' className='nav-item'>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
