import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-user-md"></i>
          <span>The Receptionist</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <motion.a 
            href="#home" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            whileHover={{ y: -2 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#features" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
            whileHover={{ y: -2 }}
          >
            Features
          </motion.a>
          <motion.a 
            href="#about" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </div>

        <motion.div 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
