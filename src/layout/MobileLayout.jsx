// layout/MobileLayout.jsx
import { Outlet } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar";

const MobileLayout = () => {
  
  const [open, setOpen] = useState(false);
  return (
    
    <div className="relative min-h-screen bg-gradient-to-b from-orange-100 via-orange-200 to-yellow-100 overflow-x-hidden">

      {/* Konten page */}
      <div className="relative z-10 max-w-3xl mx-auto p-4 space-y-8">
        <Outlet />
      </div>

      {/* Footer & Mobile Navbar */}
      <MobileNavbar />
    </div>
  );
};

export default MobileLayout;

