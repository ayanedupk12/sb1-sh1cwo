import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code, Database, Cpu, Shield } from 'lucide-react';

const services = [
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Development',
    description: 'Create powerful mobile applications for iOS and Android platforms.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Build responsive and dynamic web applications using cutting-edge technologies.'
  },
  {
    icon: <Code size={32} />,
    title: 'Custom Software',
    description: 'Develop tailored software solutions to meet your specific business needs.'
  },
  {
    icon: <Database size={32} />,
    title: 'Cloud Solutions',
    description: 'Implement scalable cloud infrastructure and migration services.'
  },
  {
    icon: <Cpu size={32} />,
    title: 'AI & ML Solutions',
    description: 'Leverage artificial intelligence and machine learning for smart automation.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security measures.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Comprehensive digital solutions to power your business growth
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;