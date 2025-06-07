import React from "react";
import HimalayanRange from "../../assets/img/HimalayanRange.jpg"
import RajasthanFort from "../../assets/img/RajasthanFort.jpg"
import GoaBeach from "../../assets/img/GoaBeach.jpg"
import KeralaWaters from "../../assets/img/KeralaWaters.jpg"
import NorthEast from "../../assets/img/NorthEast.jpg"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const tourPackages = [
  {
    title: 'Himalayan Adventure',
    description: 'Explore the majestic Himalayan ranges with guided treks and camping.',
    image: HimalayanRange,
  },
  {
    title: 'Rajasthan Heritage Tour',
    description: 'Visit historic forts, palaces, and colorful bazaars of Rajasthan.',
    image: RajasthanFort,
  },
  {
    title: 'Goa Beach Escape',
    description: 'Relax on sunny beaches, enjoy water sports, and explore nightlife in Goa.',
    image: GoaBeach,
  },
  {
    title: 'Kerala Backwaters',
    description: 'Cruise through the scenic backwaters of Kerala in a houseboat.',
    image: KeralaWaters,
  },
  {
    title: 'Northeast India Discovery',
    description: 'Discover the unexplored beauty of India’s northeast with unique cultures and landscapes.',
    image: NorthEast,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const Services = () => {
  return <>
    <div className="p-8 pt-[1.5rem]">
      <motion.section
        className="py-16 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
      <h1 className="text-4xl font-bold mb-8 text-center">Our Tour Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourPackages.map((pkg, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
              <p className="text-gray-700">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>

      </motion.section>
    </div>
    
    {/* CTA Button */}
      <motion.section className="py-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} >
        <h4 className="text-2xl font-semibold mb-4">Ready to start your adventure?</h4>
        <Link
          to="/enquiry"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Book Your Journey
        </Link>
      </motion.section>
  </>
};

export default Services;