'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiStar, FiCamera } from 'react-icons/fi';

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const destinations = [
    {
      name: 'Atauro Island',
      location: 'North of Dili',
      description: 'World-class diving, pristine beaches, and the clearest waters in Southeast Asia.',
      rating: 5,
      category: 'Beach & Diving',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      name: 'Cristo Rei Beach',
      location: 'Dili',
      description: 'Iconic 27-meter statue overlooking stunning coastal views and golden sands.',
      rating: 5,
      category: 'Beach & Monument',
      gradient: 'from-[#DC241F] to-orange-500',
    },
    {
      name: 'Jaco Island',
      location: 'Tutuala',
      description: 'Uninhabited paradise island with crystal-clear waters and white sand beaches.',
      rating: 5,
      category: 'Beach & Nature',
      gradient: 'from-[#FFC726] to-yellow-500',
    },
    {
      name: 'Mount Ramelau',
      location: 'Ainaro',
      description: 'The highest peak in Timor-Leste, offering breathtaking sunrise views.',
      rating: 5,
      category: 'Mountain & Hiking',
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      name: 'Tais Market',
      location: 'Dili',
      description: 'Vibrant traditional market showcasing colorful Timorese textiles and crafts.',
      rating: 4,
      category: 'Culture & Shopping',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      name: 'Tibar Bay',
      location: 'Liquica',
      description: 'Serene bay perfect for swimming, kayaking, and relaxation.',
      rating: 4,
      category: 'Beach & Recreation',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-[#DC241F]">Destinations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DC241F] to-[#FFC726] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most breathtaking locations across Timor-Leste
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`relative h-64 bg-gradient-to-br ${destination.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiCamera className="text-white text-6xl opacity-30 group-hover:scale-110 transition-transform" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-800">{destination.category}</span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <FiStar className="text-[#FFC726] text-sm fill-current" />
                  <span className="text-sm font-bold text-gray-800">{destination.rating}</span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#DC241F] transition-colors">
                    {destination.name}
                  </h3>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <FiMapPin className="text-[#DC241F] mr-2" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${destination.gradient}`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#DC241F] to-[#FFC726] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Explore All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
