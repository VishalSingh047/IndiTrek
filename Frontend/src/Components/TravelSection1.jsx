import React from "react";
import Img from "../assets/img/TravelSection1.jpg";

const TravelSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
  backgroundImage: `url(${Img})`
}}

    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-6 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            <span className="border-l-4 border-yellow-400 pl-3">TRAVEL</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl mx-auto">
            Pack your bags and explore the most breathtaking destinations and cultural experiences across India. 
  From iconic UNESCO World Heritage Sites like the Taj Mahal to hidden gems tucked away in the Himalayas or the backwaters of Kerala, 
  discover everything you need to plan your next incredible Indian adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
