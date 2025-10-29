'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMap, FiCompass, FiMapPin, FiImage, FiHeart, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: FiCompass },
    { name: 'Destinations', href: '#destinations', icon: FiMapPin },
    { name: 'Map', href: '#map', icon: FiMap },
    { name: 'Culture', href: '#culture', icon: FiImage },
    { name: 'Activities', href: '#activities', icon: FiHeart },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#DC241F] to-[#FFC726] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TL</span>
            </div>
            <div>
              <h1
                className={`text-xl font-bold ${
                  isScrolled ? 'text-[#DC241F]' : 'text-white dark:text-[#FFC726]'
                }`}
              >
                Timor-Leste
              </h1>
              <p
                className={`text-xs ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                }`}
              >
                Discover Paradise
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-[#DC241F]'
                    : 'text-white hover:text-[#FFC726]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400"
              title="Toggle Theme"
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#DC241F] to-[#FFC726] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Plan Your Trip
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                >
                  <item.icon className="w-5 h-5 text-[#DC241F]" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-full bg-gray-200 dark:bg-gray-700 py-3 rounded-lg font-semibold text-gray-800 dark:text-yellow-400"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
              <button className="w-full bg-gradient-to-r from-[#DC241F] to-[#FFC726] text-white py-3 rounded-lg font-semibold">
                Plan Your Trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
