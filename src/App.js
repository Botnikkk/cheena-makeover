import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import Header from './my components/Header';
import Home from './my components/Home';
import About from './my components/About';

const Gallery = lazy(() => import('./my components/Gallery'));
const Services = lazy(() => import('./my components/Services'));
const Bridal = lazy(() => import('./my components/Bridal'));
const Editorial = lazy(() => import('./my components/Editorial'));
const Booking = lazy(() => import('./my components/Booking'));


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<><Home /><About /><Gallery /><Services /></>} />
        <Route exact path='/bridal' element={<><Bridal /></>} />
        <Route exact path='/editorial' element={<><Editorial /></>} />
        <Route exact path='/booking' element={<><Booking /></>} />
      </Routes>
    </Router>
  );
}

export default App;

