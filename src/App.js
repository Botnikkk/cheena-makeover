import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from './my components/Header';
import Home from './my components/Home';
import About from './my components/About';
import Bridal from './my components/Bridal';
import Party from './my components/Party';
import Booking from './my components/Booking';

const Gallery = lazy(() => import('./my components/Gallery'));
const Services = lazy(() => import('./my components/Services'));


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<><Home /><About /><Gallery /><Services /></>} />
        <Route exact path='/bridal' element={<Bridal />} />
        <Route exact path='/party' element={<Party />} />
        <Route exact path='/booking' element={<Booking />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

