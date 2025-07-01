import React from "react";
import TravelSection from "../../Components/TravelSection1";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PropertyCard1 } from "../../Components/PropertyCard1";
import { Phone } from "lucide-react"


export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border bg-white ${className}`}>{children}</div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

// Mock Button
export function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-green-950 text-white py-2 px-4 rounded hover:bg-green-700 flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
}

const tourData = [
  {
    image: "/rome.jpg",
    duration: "9 days & 8 nights",
    rating: 4.9,
    reviews: 523,
    title: "Essence of Indian Himalayas | FREE Excursion to Yumthang Valley",
    itinerary: "2D Gangtok • 2D Lachung • 2D Pelling • 3D Darjeeling",
    price: 143200,
    oldPrice: 265185,
    savings: 121985,
  },
  {
    image: "/scandinavia.jpg",
    duration: "9 days & 8 nights",
    rating: 4.8,
    reviews: 240,
    title: "Best of South India | FREE Houseboat Stay in Alleppey",
    itinerary: "2D Coorg • 2D Ooty • 1D Kodaikanal • 2D Munnar",
    price: 291000,
    oldPrice: 387030,
    savings: 96030,
  },
  {
    image: "/golden-trio.jpg",
    duration: "8 days & 7 nights",
    rating: 4.5,
    reviews: 32,
    title: "Golden Triangle India | Delhi, Agra & Jaipur Tour",
    itinerary: "2D Delhi • 2D Agra • 3D Jaipur • 1D Fatehpur Sikri",
    price: 173000,
    oldPrice: 224900,
    savings: 51900,
  },
];

const formatINR = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const fadeIn = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home () {

return<>
<TravelSection />

{/* Discover Your Dream Home */}
      <div className="bg-white">
        <h1 className="text-center text-green-950 text-2xl lg:text-4xl font-sans font-medium py-6">
          Discover Your Dream Destination
        </h1>

        <div className="max-w-[1280px] md:p-5 mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-5">
            {[
              {
                title: "Goa Packages",
                category: "luxury",
                image: "card1.jpg",
              },
              {
                title: "Kashmir Packages",
                category: "newLaunches",
                image: "card2.jpg",
              },
              {
                title: "Manali Packages",
                category: "affordable",
                image: "card3.jpg",
              },
              {
                title: "Kheerganga Trek",
                category: "commercial",
                image: "card4.jpg",
              },
              {
                title: "Chandrashila Trek",
                category: "commercial",
                image: "card4.jpg",
              },
              {
                title: "Chandrashila Trek",
                category: "commercial",
                image: "card4.jpg",
              },
              {
                title: "Chandrashila Trek",
                category: "commercial",
                image: "card4.jpg",
              },
              {
                title: "Chandrashila Trek",
                category: "commercial",
                image: "card4.jpg",
              },
            ].map((property, index) => (
              <PropertyCard1
                key={index}
                title={property.title}
                category={property.category}
                image={property.image}
                className="w-full sm:w-[80%] md:w-[60%] lg:w-[22%] p-4 sm:p-6 
                transition-transform duration-300 ease-in-out 
                shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 
                hover:rotate-[2deg] hover:bg-gray-100 
                rounded-xl bg-white transform-gpu"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ultimate Travel Packages for India */}
      
      <h1 className="text-center text-green-950 text-2xl lg:text-4xl font-sans font-medium py-6">
          Ultimate Travel Packages for India
        </h1>
      <div className="max-w-[1280px] md:p-5 mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tourData.map((tour, index) => (
          <Card key={index} className="shadow-md overflow-hidden">
            <div className="w-full h-56 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent>
              <p className="text-sm text-gray-600 mb-1">{tour.duration}</p>
              <p className="text-green-600 font-semibold text-sm mb-1">
                ⭐ {tour.rating}{" "}
                <span className="text-gray-400">({tour.reviews})</span>
              </p>
              <h3 className="font-semibold text-base mb-2">{tour.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{tour.itinerary}</p>
              <div className="mb-4">
                <span className="text-lg font-bold text-green-950">
                  {formatINR(tour.price)}
                </span>
                <span className="line-through text-gray-400 ml-2 text-sm">
                  {formatINR(tour.oldPrice)}
                </span>
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  SAVE {formatINR(tour.savings)}
                </span>
              </div>
              <Button>
                <Phone size={16} /> Request Callback
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>

      {/* Best Packages to Visit in Manali */}
      
      <h1 className="text-center text-green-950 text-2xl lg:text-4xl font-sans font-medium py-6">
          Best Packages to Visit in Manali
        </h1>
      <div className="max-w-[1280px] md:p-5 mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tourData.map((tour, index) => (
          <Card key={index} className="shadow-md overflow-hidden">
            <div className="w-full h-56 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent>
              <p className="text-sm text-gray-600 mb-1">{tour.duration}</p>
              <p className="text-green-600 font-semibold text-sm mb-1">
                ⭐ {tour.rating}{" "}
                <span className="text-gray-400">({tour.reviews})</span>
              </p>
              <h3 className="font-semibold text-base mb-2">{tour.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{tour.itinerary}</p>
              <div className="mb-4">
                <span className="text-lg font-bold text-green-950">
                  {formatINR(tour.price)}
                </span>
                <span className="line-through text-gray-400 ml-2 text-sm">
                  {formatINR(tour.oldPrice)}
                </span>
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  SAVE {formatINR(tour.savings)}
                </span>
              </div>
              <Button>
                <Phone size={16} /> Request Callback
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>

      {/* Visit Kashmir with Our Packages */}
      
      <h1 className="text-center text-green-950 text-2xl lg:text-4xl font-sans font-medium py-6">
          Visit Kashmir with Our Packages
        </h1>
      <div className="max-w-[1280px] md:p-5 mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tourData.map((tour, index) => (
          <Card key={index} className="shadow-md overflow-hidden">
            <div className="w-full h-56 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent>
              <p className="text-sm text-gray-600 mb-1">{tour.duration}</p>
              <p className="text-green-600 font-semibold text-sm mb-1">
                ⭐ {tour.rating}{" "}
                <span className="text-gray-400">({tour.reviews})</span>
              </p>
              <h3 className="font-semibold text-base mb-2">{tour.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{tour.itinerary}</p>
              <div className="mb-4">
                <span className="text-lg font-bold text-green-950">
                  {formatINR(tour.price)}
                </span>
                <span className="line-through text-gray-400 ml-2 text-sm">
                  {formatINR(tour.oldPrice)}
                </span>
                <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  SAVE {formatINR(tour.savings)}
                </span>
              </div>
              <Button>
                <Phone size={16} /> Request Callback
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>

      {/* CTA Button */}
      <motion.section className="py-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} >
        <h4 className="text-2xl text-green-950 font-semibold mb-4">Ready to start your adventure?</h4>
        <Link
          to="/enquiry"
          className="inline-block bg-green-950 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition"
        >
          Book Your Journey
        </Link>
      </motion.section>
</>
}

export default Home;