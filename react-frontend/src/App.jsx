import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import React, { useState } from 'react';
import LoginPopup from './components/common/form/login/LoginPopup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPopup />} /> {/* Route for MainComponent */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
