import React from 'react';
import './index.css';
import './App.css';
import Hero from './component/hero';
import Contact from './component/contact';
import Auction from './component/auction';
import About from './component/about';
import Login from './component/Login';
import Signup from './component/Signup';
import Header from './component/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllBidsPage from './component/allbids';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allbids" element={<><Header/><AllBidsPage/></>} />
        <Route path="/" element={<><Header /><Hero /><Contact /></>} />
        <Route path="/Auction" element={<><Header /><Auction /><Contact /></>} />
        <Route path="/about" element={<><Header /><About /><Contact /></>} />
      </Routes>
    </Router>
  );
}
export default App;
