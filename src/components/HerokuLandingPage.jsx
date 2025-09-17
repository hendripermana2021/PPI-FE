'use client'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const HerokuLandingPage = () => {

  return (
    <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 ">
      <div className="relative isolate w-full h-screen flex flex-col justify-center items-center px-6 lg:px-8 backdrop-blur-sm rounded-2xl">
        
        {/* Blur dekoratif */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl opacity-30"
        >
          <div
            style={{ clipPath: 'polygon(74.1% 44.1%, ...)' }}
            className="absolute left-[50%] w-[72rem] -translate-x-1/2 rotate-12 bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-50"
          />
        </div>

        {/* Content */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight text-orange-700 sm:text-7xl">
            🍁 AUTUMN FEST 2025
          </h1>
          <p className="mt-6 text-lg font-medium text-yellow-900 sm:text-xl/8">
            Fall in Love with Indonesia 🇮🇩✨<br/>
            Explore seasonal delights, warm drinks, festive treats, and exciting bazaars with friends and family!
          </p>
        </div>

        {/* Blur bawah */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl opacity-20"
        >
          <div
            style={{ clipPath: 'polygon(74.1% 44.1%, ...)' }}
            className="absolute left-[50%] w-[72rem] -translate-x-1/2 rotate-12 bg-gradient-to-tr from-yellow-300 via-orange-400 to-red-500 opacity-20"
          />
        </div>
      </div>
    </div>


  )
}

export default HerokuLandingPage;
