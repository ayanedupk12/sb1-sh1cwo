import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const Company = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            About Intelivita
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 text-center max-w-3xl mx-auto"
          >
            Leading the digital transformation journey for businesses worldwide
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Users size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">Expert developers and designers committed to excellence</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <Target size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">Empowering businesses through innovative technology solutions</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Award size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">Innovation, integrity, and client success drive everything we do</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded with a vision to revolutionize digital solutions, Intelivita has grown into a global technology partner trusted by businesses worldwide. Our journey began with a simple mission: to deliver innovative, scalable, and impactful digital solutions.
          </p>
          <p className="text-gray-600">
            Today, we're proud to have helped hundreds of businesses achieve their digital transformation goals, with a team of passionate experts working across multiple technologies and industries.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Company;