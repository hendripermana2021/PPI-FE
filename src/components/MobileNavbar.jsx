import { Link } from "react-router-dom";
import {
  HomeIcon,
  Squares2X2Icon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { MapPinHouseIcon } from "lucide-react";

const MobileNavbar = () => {
  return (
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
  );
};

export default MobileNavbar;
