'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Map', href: '#map' },
    { name: 'Culture', href: '#culture' },
    { name: 'Activities', href: '#activities' },
  ];

  const resources = [
    { name: 'Travel Guide', href: '#' },
    { name: 'Visa Information', href: '#' },
    { name: 'Accommodation', href: '#' },
    { name: 'Transportation', href: '#' },
    { name: 'Safety Tips', href: '#' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: FiYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC241F] to-[#FFC726] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Timor-Leste</h3>
                <p className="text-sm text-gray-400">Discover Paradise</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience the untouched beauty and rich culture of Southeast Asia's hidden gem. Your adventure begins here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFC726] transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#FFC726] group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-[#FFC726] transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#FFC726] group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-[#DC241F] text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Dili, Timor-Leste
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="text-[#FFC726] text-xl mt-1 flex-shrink-0" />
                <a href="mailto:info@timor-leste-tourism.com" className="text-gray-400 hover:text-white transition-colors">
                  info@timor-leste-tourism.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="text-[#DC241F] text-xl mt-1 flex-shrink-0" />
                <a href="tel:+670" className="text-gray-400 hover:text-white transition-colors">
                  +670 XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest travel tips and destination updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFC726] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#DC241F] to-[#FFC726] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FiHeart className="text-[#DC241F] mx-2 animate-pulse" /> for Timor-Leste
            </p>
            <p className="text-gray-400 text-sm">
              {currentYear} Timor-Leste Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flag Colors Accent at Bottom */}
      <div className="h-2 flex">
        <div className="flex-1 bg-[#DC241F]" />
        <div className="flex-1 bg-[#FFC726]" />
        <div className="flex-1 bg-black" />
      </div>
    </footer>
  );
};

export default Footer;
