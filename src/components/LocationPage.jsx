import React from "react";

const LocationPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100 overflow-hidden flex flex-col items-center justify-start p-6 lg:p-12">

      {/* Decorative Falling Leaves */}
      <img src="/clover.png" alt="leaf" className="absolute w-8 h-8 animate-fall-slow top-10 left-20 opacity-80 pointer-events-none" />
      <img src="/clover.png" alt="leaf" className="absolute w-6 h-6 animate-fall top-0 left-64 opacity-70 pointer-events-none" />
      <img src="/clover.png" alt="leaf" className="absolute w-10 h-10 animate-fall-fast top-0 right-40 opacity-90 pointer-events-none" />

      {/* Header */}
      <header className="text-center mt-10 mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-800 drop-shadow-lg">
          📍 Autumn Festival Location
        </h1>
        <p className="mt-2 text-orange-700 text-lg sm:text-xl">
          Find us and join the autumn adventure 🍁
        </p>
      </header>

      {/* Glass Card */}
      <main className="w-full max-w-4xl bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col items-center space-y-6">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-orange-800 mb-2">Autumn Festival Grounds</h2>
          
          {/* Location */}
          <p className="text-orange-700 text-lg">
            📍 Maple Tree Alley, Ehime Univ. Johoku Campus
          </p>

          {/* Date */}
          <p className="text-orange-700 text-lg">
            📅 Date: 27 September 2025
          </p>

          {/* Opening Hours */}
          <p className="text-orange-700 text-lg">
            ⏰ Open: 08:30 AM - 03:00 PM 🍂
          </p>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/30">
          <iframe
            title="Autumn Festival Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.673587536234!2d112.78398961477536!3d-7.336582274760119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb98b6b5e59d%3A0x2e0b1a24f7f9f63b!2sMaple%20Tree%20Alley!5e0!3m2!1sen!2sid!4v1694628000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-center text-orange-700 mt-4 mb-10 text-lg sm:text-xl">
          🍁 Don’t forget to bring your friends and enjoy the autumn vibes!
        </p>
      </main>
    </div>
  );
};

export default LocationPage;
