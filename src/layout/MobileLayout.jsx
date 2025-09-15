// layout/MobileLayout.jsx
import { Outlet } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MobileNavbar } from "../components/MobileNavbar";

const MobileLayoutCustomer = ({role}) => {
  return (
         <div className="relative min-h-screen bg-gradient-to-b from-orange-100 via-orange-200 to-yellow-100 overflow-x-hidden">


      {/* Main Content */}
      <main className="pt-20 max-w-3xl mx-auto p-4 space-y-8 relative z-10">
        <Outlet />
      </main>

      {/* Bottom Navbar */}
      <MobileNavbar role={role} />
    </div>
  );
};

const MobileLayoutUser = ({role}) => {
  
  const [open, setOpen] = useState(false);
  return (
    
    <div className="relative min-h-screen bg-gradient-to-b from-orange-100 via-orange-200 to-yellow-100 overflow-x-hidden">

            {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200 shadow-md z-20">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo / Judul */}
          <h1 className="text-lg font-bold text-orange-900">🍂 Autumn App</h1>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 px-3 py-2 bg-orange-400/80 hover:bg-orange-500 text-white rounded-lg"
            >
              Menu
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-lg border border-orange-200 overflow-hidden z-30">
                <ul className="divide-y divide-orange-100 text-sm">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-orange-100 text-orange-900"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-orange-100 text-orange-900"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Konten page */}
      <div className="relative z-10 max-w-3xl mx-auto p-4 space-y-8">
        <Outlet />
      </div>

      {/* Footer & Mobile Navbar */}
      <MobileNavbar role={role} />
    </div>
  );
};

export const MobileLayout = ({ role }) => {
  if (role === "admin" || role === "user") return <MobileLayoutUser role={role} />;
  return <MobileLayoutCustomer role={role} />;
};

