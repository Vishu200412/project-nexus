import React from 'react';
import Home from './components/Home';
import AboutPage from './components/nav_components/AboutPage';
import ContactPage from './components/nav_components/ContactPage';
import ScrollHandler from './ScrollHandler';
import Service from './components/nav_components/Service'

const App = () => {
  return (
    <>
      <Home />
      <AboutPage/>
      <Service />
      <ContactPage />
      <ScrollHandler />
    </>
  );
};

export default App;


