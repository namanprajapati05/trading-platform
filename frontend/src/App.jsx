import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './landing-page/Navbar';
import HomePage from './landing-page/home/HomePage';
import Footer from './landing-page/Footer';
import Signup from './landing-page/signup/Signup';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/CreateAccount' element={<CreateAccount/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;