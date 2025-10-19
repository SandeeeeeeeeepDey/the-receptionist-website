import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-instagram', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-user-md"></i>
              <span>The Receptionist</span>
            </motion.div>
            <p>Empowering rural healthcare providers with modern technology.</p>
          </motion.div>
          
          {footerSections.map((section, index) => (
            <motion.div 
              key={index}
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href.substring(1));
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>&copy; 2024 The Receptionist. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
