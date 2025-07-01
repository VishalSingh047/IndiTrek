import { useNavigate } from "react-router-dom";
import luxuryLiving from "../assets/img/card1.jpg";
import newLaunches from "../assets/img/card2.jpg";
import affordable from "../assets/img/card3.jpg";
import commercial from "../assets/img/card4.jpg";

export const PropertyCard1 = ({ title }) => {
  const navigate = useNavigate();

  const submitHandler = () => {
    if (title === "Commercial") {
      navigate(`/commercial/${title}`);
    } else {
      navigate(`/property/${title}`);
    }
  };

  const getImage =
    title === "Luxury Living"
      ? luxuryLiving
      : title === "New Launches"
      ? newLaunches
      : title === "Commercial"
      ? commercial
      : affordable;

  return (
    <div
      className="relative items-center w-[280px] h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-103 shadow-green-800"
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      onClick={submitHandler}
    >
      <img
        src={getImage}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-green-950 bg-opacity-50 flex flex-col justify-center items-center text-white transition-opacity duration-100 `}
      >
        {/* <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white transition-opacity duration-100 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      > */}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
};