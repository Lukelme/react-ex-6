import './App.css';

import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
