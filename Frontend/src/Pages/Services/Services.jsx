import React from "react";

const tourPackages = [
  {
    title: 'Himalayan Adventure',
    description: 'Explore the majestic Himalayan ranges with guided treks and camping.',
    image: 'https://via.placeholder.com/300x200?text=Himalayas',
  },
  {
    title: 'Rajasthan Heritage Tour',
    description: 'Visit historic forts, palaces, and colorful bazaars of Rajasthan.',
    image: 'https://via.placeholder.com/300x200?text=Rajasthan',
  },
  {
    title: 'Goa Beach Escape',
    description: 'Relax on sunny beaches, enjoy water sports, and explore nightlife in Goa.',
    image: 'https://via.placeholder.com/300x200?text=Goa',
  },
  {
    title: 'Kerala Backwaters',
    description: 'Cruise through the scenic backwaters of Kerala in a houseboat.',
    image: 'https://via.placeholder.com/300x200?text=Kerala',
  },
  {
    title: 'Northeast India Discovery',
    description: 'Discover the unexplored beauty of India’s northeast with unique cultures and landscapes.',
    image: 'https://via.placeholder.com/300x200?text=Northeast+India',
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