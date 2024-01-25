import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww'; // Replace with your actual image URL

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
  };

  const textContainerStyle = {
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '10px', 
  };

  const loginContainerStyle = {
    position: 'relative',
    flex: '1',
    margin: '10px', 
  };

  const childElementStyle = {
    margin: '5px',
  };

  return (
    <div className="h-screen" style={containerStyle}>
      <div className="flex flex-col items-center justify-center">
        <div style={{ ...textContainerStyle, ...childElementStyle }}>
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl mt-8 sm:mt-12 md:mt-16 text-white">
            Welcome to IITM Restaurant
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 text-white">
            Explore our delicious menu!
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center" style={loginContainerStyle}>
          <Routes>
            <Route path="/" element={<LoginPage style={childElementStyle} />} />
            <Route path="/signup" element={<Signup style={childElementStyle} />} />
            <Route path="/home" element={<Home style={childElementStyle} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

