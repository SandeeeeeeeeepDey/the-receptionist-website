import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-calendar-alt',
      title: 'Appointment Management',
      description: 'Schedule and manage patient appointments with an intuitive calendar system.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'Patient Records',
      description: 'Maintain comprehensive digital patient records and medical history.'
    },
    {
      icon: 'fas fa-pills',
      title: 'Prescription Management',
      description: 'Create and manage prescriptions with automated drug interaction checks.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics & Reports',
      description: 'Track practice performance with detailed analytics and reports.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Optimized',
      description: 'Access your practice management tools on any device, anywhere.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Compliant',
      description: 'HIPAA compliant with enterprise-grade security for patient data.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Powerful Features for Rural Healthcare</h2>
          <p>Everything you need to manage your practice efficiently</p>
        </motion.div>
        
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                <i className={feature.icon}></i>
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
