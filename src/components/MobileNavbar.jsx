import { Link } from "react-router-dom";
import {
  HomeIcon,
  Squares2X2Icon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const MobileNavbarAdmin = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-white/20 shadow-md sm:hidden">
      <div className="flex justify-around items-center p-2">
        <Link to="/stuff" className="flex flex-col items-center text-orange-700">
          <Squares2X2Icon className="w-6 h-6 mb-1" />
          Food
        </Link>
        <Link to="/users" className="flex flex-col items-center text-orange-700">
          <HomeIcon className="w-6 h-6 mb-1" />
          Users
        </Link>
      </div>
    </div>
  );
};

const MobileNavbarUser = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-white/20 shadow-md sm:hidden">
      <div className="flex justify-around items-center p-2">
        <Link
          to="/info"
          className="flex flex-col items-center text-orange-700"
        >
          <InformationCircleIcon className="w-6 h-6 mb-1" />
          Stuff
        </Link>
      </div>
    </div>
  );
};


const MobileNavbarCustomer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-white/20 shadow-md sm:hidden">
      <div className="flex justify-around items-center p-2">
        <Link to="/" className="flex flex-col items-center text-orange-700">
          <HomeIcon className="w-6 h-6 mb-1" />
          Home1
        </Link>
        <Link to="/food" className="flex flex-col items-center text-orange-700">
          <Squares2X2Icon className="w-6 h-6 mb-1" />
          Stands
        </Link>
        <Link to="/info" className="flex flex-col items-center text-orange-700">
          <InformationCircleIcon className="w-6 h-6 mb-1" />
          Info
        </Link>
      </div>
    </div>
  );
}

// Wrapper component: pilih navbar berdasarkan role
export const MobileNavbar = ({ role }) => {
  console.log(role);
  if (role === "admin") return <MobileNavbarAdmin />;
  if (role === "user") return <MobileNavbarUser />;
  return <MobileNavbarCustomer />;
};
