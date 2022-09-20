import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProtectedPage from './ProtectedPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protectedPage" element={<ProtectedPage />} />
      </Routes>
    </div>
  );
}

export default App;
