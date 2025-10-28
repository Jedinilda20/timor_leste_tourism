'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMusic, FiFeather, FiBook, FiUsers } from 'react-icons/fi';
import Image from 'next/image';

const Culture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const culturalElements = [
    {
      icon: FiMusic,
      title: 'Traditional Music',
      description: 'Experience the rhythmic beats of Timorese drums and the melodious sounds of traditional instruments.',
      color: 'from-[#DC241F] to-red-600',
    },
    {
      icon: FiFeather,
      title: 'Tais Weaving',
      description: 'Discover the intricate art of Tais, traditional hand-woven textiles that tell stories of Timorese heritage.',
      color: 'from-[#FFC726] to-yellow-600',
    },
    {
      icon: FiBook,
      title: 'Oral Traditions',
      description: 'Listen to ancient stories and legends passed down through generations in local communities.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: FiUsers,
      title: 'Sacred Houses',
      description: 'Visit Uma Lulik, traditional sacred houses that serve as spiritual centers for Timorese families.',
      color: 'from-green-600 to-emerald-600',
    },
  ];

  const traditions = [
    {
      name: 'Tebe-Tebe Dance',
      description: 'Traditional circle dance performed during celebrations and ceremonies',
    },
    {
      name: 'Coffee Ceremony',
      description: 'Social ritual of preparing and sharing Timorese coffee with guests',
    },
    {
      name: 'Betel Nut Offering',
      description: 'Ancient custom of offering betel nut as a sign of respect and hospitality',
    },
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Culture & <span className="text-[#DC241F]">Heritage</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DC241F] to-[#FFC726] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the rich cultural tapestry of Timor-Leste
          </p>
        </motion.div>

        {/* Cultural Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturalElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${element.color} rounded-xl flex items-center justify-center mb-4`}>
                <element.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{element.title}</h3>
              <p className="text-gray-700 leading-relaxed">{element.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/Traditional-Tais-Patterns.jpg"
                alt="Traditional Tais Patterns"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC726] opacity-50 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#DC241F] opacity-50 blur-3xl" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Living Traditions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Timor-Leste's culture is a beautiful blend of indigenous Melanesian traditions,
              Portuguese colonial influences, and Southeast Asian customs. The Timorese people
              have preserved their ancestral traditions while embracing modernity.
            </p>

            <div className="space-y-4 mb-8">
              {traditions.map((tradition, index) => (
                <motion.div
                  key={tradition.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-2 h-2 bg-[#DC241F] rounded-full mt-2" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{tradition.name}</h4>
                    <p className="text-sm text-gray-600">{tradition.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#DC241F] to-[#FFC726] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore Cultural Tours
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
