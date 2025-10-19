import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '1000+', label: 'Rural Doctors' },
    { number: '50,000+', label: 'Patients Served' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Built for Rural Healthcare Providers</h2>
            <p>
              The Receptionist was created with the unique challenges of rural healthcare in mind. 
              We understand that doctors in villages often work with limited resources and need 
              reliable, easy-to-use tools to serve their communities effectively.
            </p>
            
            <div className="stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="about-placeholder"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.i 
                className="fas fa-map-marker-alt"
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#2563eb', '#1d4ed8', '#2563eb']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.i>
              <p>Rural Healthcare Network</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
