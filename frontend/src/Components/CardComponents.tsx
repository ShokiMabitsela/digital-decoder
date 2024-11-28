import logo from "../assets/D.png";
import { Link } from "react-router-dom";
const CardComponents = () => {
  return (
      <div className="max-w-sm mx-auto  hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={logo}
            alt="Card Logo"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Title</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam?
          </p>
          <Link
            to="/blogdetails"
            className="inline-block mt-3 text-blue-500 hover:underline text-sm font-medium"
          >
            Read More
          </Link>
          <hr className="mt-4  bg-orange-100 h-2" />
        </div>
      </div>
  );
};

export default CardComponents;
