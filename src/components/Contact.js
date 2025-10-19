import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'support@thereceptionist.app'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: 'Healthcare Innovation Center\nRural Development District'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <p>Ready to streamline your practice? Contact us today.</p>
        </motion.div>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="contact-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <i className={item.icon}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {submitStatus === 'success' && (
              <motion.div 
                className="submit-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <i className="fas fa-check-circle"></i>
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
