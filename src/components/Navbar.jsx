import { Link } from "react-router-dom";
import {
  HomeIcon,
  Squares2X2Icon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { MapPinHouseIcon } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-white/20 shadow-md sm:hidden">
        <div className="flex justify-around items-center p-2">
          <Link to="/" className="flex flex-col items-center text-orange-700">
            <HomeIcon className="w-6 h-6 mb-1" />
            Home
          </Link>

          <Link to="/location" className="flex flex-col items-center text-orange-700">
            <MapPinHouseIcon className="w-6 h-6 mb-1" />
            Location
          </Link>

          <Link to="/food" className="flex flex-col items-center text-orange-700">
            <Squares2X2Icon className="w-6 h-6 mb-1" />
            Stands
          </Link>

          <Link to="/contact" className="flex flex-col items-center text-orange-700">
            <InformationCircleIcon className="w-6 h-6 mb-1" />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-white/20 shadow-md px-8 py-3 justify-between items-center">
        <div className="text-2xl font-bold text-orange-600">🍂 Autumn Fest</div>
        <div className="flex space-x-8">
          <Link to="/" className="text-orange-700 hover:text-orange-900 font-semibold flex items-center space-x-1">
            <HomeIcon className="w-5 h-5" /> <span>Home</span>
          </Link>
          <Link to="/location" className="text-orange-700 hover:text-orange-900 font-semibold flex items-center space-x-1">
            <MapPinHouseIcon className="w-5 h-5" /> <span>Location</span>
          </Link>
          <Link to="/food" className="text-orange-700 hover:text-orange-900 font-semibold flex items-center space-x-1">
            <Squares2X2Icon className="w-5 h-5" /> <span>Stands</span>
          </Link>
          <Link to="/contact" className="text-orange-700 hover:text-orange-900 font-semibold flex items-center space-x-1">
            <InformationCircleIcon className="w-5 h-5" /> <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
