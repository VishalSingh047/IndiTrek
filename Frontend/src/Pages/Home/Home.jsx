import React from "react";
import TravelSection from "../../Components/TravelSection1";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home () {
    const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

return<>
<TravelSection />

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
}

export default Home;