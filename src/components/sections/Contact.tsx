import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import emailjs from 'emailjs-com'; // Make sure to install this package

const Contact: React.FC = () => {
  const { setIsHovering } = useCursor();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Initialize EmailJS with your public key
    emailjs.init('5b4cr48IOSiyNb7-A');

    // Template parameters that match your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Ravindu Perera', // Your name
    };

    console.log('Sending email with params:', templateParams);

    emailjs.send(
      'service_ihbrplh',       // Your service ID
      'template_1uoeqlw',      // Your template ID
      templateParams,          // The properly formatted template parameters
      '5b4cr48IOSiyNb7-A'      // Your user ID (public key)
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setFormStatus('success');
      if (formRef.current) formRef.current.reset();
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: "Location",
      value: "Malabe, Sri Lanka"
    },
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: "Phone",
      value: "+94 71 189 2658"
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: "Email",
      value: "contact.ravinduperera@gmail.com"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-light-100 dark:bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success-100 dark:bg-success-900/30 p-6 rounded-xl text-center"
                >
                  <CheckCircle className="mx-auto mb-4 text-success-600 dark:text-success-400" size={48} />
                  <h4 className="text-xl font-semibold mb-2 text-success-700 dark:text-success-300">Message Sent!</h4>
                  <p className="text-success-600 dark:text-success-400">Thank you for your message. I'll get back to you soon.</p>
                </motion.div>
              ) : formStatus === 'error' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-error-100 dark:bg-error-900/30 p-6 rounded-xl text-center"
                >
                  <h4 className="text-xl font-semibold mb-2 text-error-700 dark:text-error-300">Oops! Something went wrong.</h4>
                  <p className="text-error-600 dark:text-error-400">Please try again later.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="How can I help you?"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Your message..."
                      className="form-input resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-dark-600 dark:text-light-400 mb-8">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="w-12 h-12 rounded-lg bg-light-300 dark:bg-dark-600 flex items-center justify-center mr-4 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-dark-600 dark:text-light-400">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Map or abstract background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-xl overflow-hidden h-64 card-glass"
            >
              <div className="relative w-full h-full">
                <img 
                  src="https://www.google.com/maps/vt/data=zqstPwOi61qi-v8RyW_MRPyvkqdbm0m_J4TJkc4oMzEXjFtYtoSeAEa_ToeX2t8ijXqFZdpBoID_csLkuD12r9dhS0e8v2kY5mLwjCUuF33RPOsOilXF1Cr8XHIdhEmefwFYEcyuOF-H25updauejn8UXYTDG3XiMvOhmJnZ18B3f4bMBBoMCeRjaQ1u9xCRc3xe6caNTkJ6ns3bHnSmGHUVuHhs-nIGHr7wj-cfZntH7ACLI_IBQVrxzCFQYtgx_BfxnwcfFaEWKDw2HXlervvVngqoX90sZplcPA" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-semibold mb-1">Based in</h4>
                    <p>Malabe, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
