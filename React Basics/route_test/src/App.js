import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <nav>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
