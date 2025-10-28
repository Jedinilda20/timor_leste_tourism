'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGlobe, FiUsers, FiMapPin, FiAward } from 'react-icons/fi';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: FiGlobe, value: '15,007', label: 'Square Kilometers', color: 'from-[#DC241F] to-red-600' },
    { icon: FiUsers, value: '1.3M', label: 'Population', color: 'from-[#FFC726] to-yellow-600' },
    { icon: FiMapPin, value: '50+', label: 'Tourist Destinations', color: 'from-[#DC241F] to-[#FFC726]' },
    { icon: FiAward, value: '2002', label: 'Independence Year', color: 'from-gray-700 to-black' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#DC241F]">Timor-Leste</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DC241F] to-[#FFC726] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Southeast Asia's youngest nation, a land of extraordinary beauty and rich cultural heritage
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Pearl of Southeast Asia
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Timor-Leste, also known as East Timor, is a captivating nation located in Southeast Asia,
                occupying the eastern half of Timor Island. This young nation, which gained independence
                in 2002, offers visitors an authentic and unspoiled travel experience.
              </p>
              <p>
                From the pristine beaches of Atauro Island to the rugged mountains of the interior,
                Timor-Leste boasts diverse landscapes that rival any tropical paradise. The country's
                rich cultural tapestry, woven from Portuguese and Southeast Asian influences, creates
                a unique atmosphere found nowhere else in the world.
              </p>
              <p>
                Discover world-class diving sites, explore ancient traditions, taste unique Timorese
                cuisine, and experience the warmth of the Timorese people. Whether you're seeking
                adventure, relaxation, or cultural immersion, Timor-Leste offers an unforgettable journey.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-[#DC241F] to-[#FFC726] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Learn More About Our History
            </motion.button>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/Beautiful-Timor-Leste-Landscape.jpeg"
                alt="Beautiful Timor-Leste Landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFC726] rounded-full opacity-50 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#DC241F] rounded-full opacity-50 blur-2xl" />
            </div>

            {/* Flag Colors Accent */}
            <div className="absolute -bottom-6 -right-6 flex space-x-2">
              <div className="w-16 h-16 bg-[#DC241F] rounded-lg shadow-lg" />
              <div className="w-16 h-16 bg-[#FFC726] rounded-lg shadow-lg" />
              <div className="w-16 h-16 bg-black rounded-lg shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
