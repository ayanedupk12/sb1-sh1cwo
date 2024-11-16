import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Stethoscope, Gamepad2, Plane, GraduationCap } from 'lucide-react';

const industries = [
  {
    icon: <Building2 size={40} />,
    title: 'Real Estate',
    description: 'Digital solutions for property management and real estate operations.'
  },
  {
    icon: <ShoppingBag size={40} />,
    title: 'Retail & E-commerce',
    description: 'Innovative platforms for modern retail experiences.'
  },
  {
    icon: <Stethoscope size={40} />,
    title: 'Healthcare',
    description: 'Advanced systems for healthcare providers and medical institutions.'
  },
  {
    icon: <Gamepad2 size={40} />,
    title: 'Gaming & Entertainment',
    description: 'Engaging solutions for gaming and entertainment sectors.'
  },
  {
    icon: <Plane size={40} />,
    title: 'Travel & Hospitality',
    description: 'Smart applications for travel and hospitality management.'
  },
  {
    icon: <GraduationCap size={40} />,
    title: 'Education',
    description: 'E-learning and educational management platforms.'
  }
];

const Industries = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 text-center max-w-3xl mx-auto"
          >
            We deliver innovative solutions across various industries, helping businesses transform digitally.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;