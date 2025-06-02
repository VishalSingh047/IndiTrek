import React from "react";
import HimalayanRange from "../../assets/img/HimalayanRange.jpg"
import RajasthanFort from "../../assets/img/RajasthanFort.jpg"
import GoaBeach from "../../assets/img/GoaBeach.jpg"
import KeralaWaters from "../../assets/img/KeralaWaters.jpg"
import NorthEast from "../../assets/img/NorthEast.jpg"

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

const Services = () => {
  return (
    <div className="p-8">
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
    </div>
  );
};

export default Services;