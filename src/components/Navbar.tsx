import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Intelivita
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavItem title="Services" />
            <NavItem title="Industries" to="/industries" />
            <NavItem title="Portfolio" to="/portfolio" />
            <NavItem title="Company" to="/company" />
            <NavItem title="Blog" to="/blog" />
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem title="Services" />
            <MobileNavItem title="Industries" to="/industries" />
            <MobileNavItem title="Portfolio" to="/portfolio" />
            <MobileNavItem title="Company" to="/company" />
            <MobileNavItem title="Blog" to="/blog" />
            <Link
              to="/contact"
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ title, to }: { title: string; to?: string }) => (
  to ? (
    <Link to={to} className="text-gray-700 hover:text-blue-600 transition-colors">
      {title}
    </Link>
  ) : (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
        <span>{title}</span>
        <ChevronDown size={16} />
      </button>
      <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2">
        <div className="py-2">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
        </div>
      </div>
    </div>
  )
);

const MobileNavItem = ({ title, to }: { title: string; to?: string }) => (
  to ? (
    <Link
      to={to}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
    >
      {title}
    </Link>
  ) : (
    <a
      href="#"
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
    >
      {title}
    </a>
  )
);

export default Navbar;