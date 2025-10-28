'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiAnchor,
  FiTrendingUp,
  FiCamera,
  FiCoffee,
  FiSun,
  FiWind,
  FiDroplet,
  FiTriangle
} from 'react-icons/fi';
import Image from 'next/image';

const Activities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activities = [
    {
      icon: FiAnchor,
      title: 'Scuba Diving',
      description: 'Explore pristine coral reefs and diverse marine life in some of the world\'s clearest waters.',
      image: '/image/Scuba-Diving.jpg',
    },
    {
      icon: FiTriangle,
      title: 'Mountain Trekking',
      description: 'Hike to Mount Ramelau peak and witness breathtaking sunrise views at 2,963 meters.',
      image: '/image/Mountain-Trekking.jpg',
    },
    {
      icon: FiDroplet,
      title: 'Snorkeling',
      description: 'Discover colorful underwater worlds perfect for beginners and experienced snorkelers.',
      image: '/image/Snorkeling.jpg',
    },
    {
      icon: FiCoffee,
      title: 'Coffee Tours',
      description: 'Visit organic coffee plantations and learn about Timor-Leste\'s world-renowned coffee.',
      image: '/image/Coffee-Tours.jpg',
    },
    {
      icon: FiCamera,
      title: 'Photography Tours',
      description: 'Capture stunning landscapes, vibrant culture, and unique architecture.',
      image: '/image/Photography-Tours.jpg',
    },
    {
      icon: FiSun,
      title: 'Beach Activities',
      description: 'Relax on pristine beaches, kayak in calm bays, or enjoy beach volleyball.',
      image: '/image/Beach-Activities.jpg',
    },
    {
      icon: FiWind,
      title: 'Cultural Tours',
      description: 'Visit sacred sites, traditional villages, and experience authentic Timorese culture.',
      image: '/image/Cultural-Tours.avif',
    },
    {
      icon: FiTrendingUp,
      title: 'Adventure Sports',
      description: 'Rock climbing, canyoning, and exploring caves in Timor-Leste\'s rugged terrain.',
      image: '/image/Adventure-Sports.jpg',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activities & <span className="text-[#DC241F]">Adventures</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DC241F] to-[#FFC726] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From underwater exploration to mountain peaks - endless adventures await
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Activity Image */}
              <div className="relative h-[280px]">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                  <activity.icon className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#DC241F] transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {activity.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center text-[#DC241F] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-[#DC241F] to-[#FFC726]" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[#DC241F] to-[#FFC726] rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Adventure?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your dream vacation to Timor-Leste today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#DC241F] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Plan Your Trip
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#DC241F] transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
