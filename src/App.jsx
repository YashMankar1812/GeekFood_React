import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import Restaurent from './components/Restaurent';
import Geekfood from './components/Geekfood';
import Food from './components/Food';  // Add this import statement
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/geekfood" element={<Geekfood />} />
        <Route path="/Food" element={<Food/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
