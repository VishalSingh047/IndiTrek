import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Sample assets (replace with real image paths)
import mapImage from '../../assets/img/india-map.jpg';
import img1 from '../../assets/img/about1.jpg';
import img2 from '../../assets/img/about2.jpg';
import img3 from '../../assets/img/about3.jpg';

const testimonials = [
  {
    name: 'Aarav Mehta',
    text: 'IndiTrek made my trip to the northeast unforgettable. The local insights and personalized care were unmatched.',
  },
  {
    name: 'Sneha Kapoor',
    text: 'I loved the Kerala backwater houseboat experience. Smooth booking and great support!',
  },
  {
    name: 'Vikram Sharma',
    text: 'A dream trek in Himachal! Thank you IndiTrek for an adventurous yet safe journey.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* About Section */}
      <motion.section
        className="py-16 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">About IndiTrek</h2>
          <p className="text-lg leading-relaxed">
            At <strong>IndiTrek</strong>, we believe travel is more than destinations—it's about discovering culture, people, and stories.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our local experts ensure each tour is safe, personalized, and unforgettable. Whether you're a solo traveler or a family,
            we help you explore India the way it was meant to be explored: deeply, meaningfully, and joyfully.
          </p>
        </div>
      </motion.section>

      {/* Image Grid */}
      <motion.section
        className="py-10 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[img1, img2, img3].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="about-img"
              className="rounded-xl shadow-md object-cover h-60 w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-16 bg-gray-100 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Explore All Corners of India</h3>
          <p className="mb-6 text-gray-600">
            From the Himalayas in the north to the beaches of the south, IndiTrek connects you with India’s full spectrum of beauty.
          </p>
          <img src={mapImage} alt="Map of India" className="mx-auto max-w-full h-72 object-contain" />
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-blue-700">What Our Travelers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 italic">“{t.text}”</p>
                <div className="mt-4 font-semibold text-blue-600">– {t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video */}
      <motion.section
        className="py-16 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-700">Watch Our Journey</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-xl shadow-md"
              src="https://www.youtube.com/embed/uw8hjVqxMXw"
              title="IndiTrek Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Button */}
      <motion.section className="py-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h4 className="text-2xl font-semibold mb-4">Ready to start your adventure?</h4>
        <Link
          to="/enquiry"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Book Your Journey
        </Link>
      </motion.section>
    </div>
  );
};

export default AboutPage;
