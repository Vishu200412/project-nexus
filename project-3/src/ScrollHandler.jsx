// ScrollHandler.jsx

import React, { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust these values based on your layout
      const homeHeight = window.innerHeight;
      const aboutHeight = homeHeight + document.getElementById('about').offsetHeight;
      const contactHeight = aboutHeight + document.getElementById('contact').offsetHeight;
      const serviceHeight = contactHeight + document.getElementById('service').offsetHeight;

      if (scrollY < homeHeight) {
        ScrollLink.scrollTo('home');
      } else if (scrollY < aboutHeight) {
        ScrollLink.scrollTo('about');
      } else if (scrollY < serviceHeight) {
        ScrollLink.scrollTo('service');
      } else if (scrollY < contactHeight) {
        ScrollLink.scrollTo('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollHandler;
