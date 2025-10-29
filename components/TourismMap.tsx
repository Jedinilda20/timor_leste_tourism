'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { FiMapPin } from 'react-icons/fi';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gradient-to-br from-[#DC241F] to-[#FFC726] flex items-center justify-center rounded-2xl">
      <div className="text-white text-center">
        <FiMapPin className="text-6xl mx-auto mb-4 animate-pulse" />
        <p className="text-xl font-semibold">Loading Interactive Map...</p>
      </div>
    </div>
  ),
});

const TourismMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="map"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive <span className="text-[#DC241F]">Tourism Map</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DC241F] to-[#FFC726] mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover all the amazing tourist locations across Timor-Leste
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <MapComponent />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-500"
        >
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
            Map Legend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'Capital', color: '#DC241F' },
              { type: 'Beach & Diving', color: '#0EA5E9' },
              { type: 'Mountain', color: '#22C55E' },
              { type: 'Historical', color: '#FFC726' },
            ].map((item) => (
              <div key={item.type} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismMap;
