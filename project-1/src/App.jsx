import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import Signup from './components/Signup';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
  );
}

export default App;
