import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import iconProfile from '../../assets/icon-profile.png';
import arrowDown from '../../assets/KeyboardArrowDown.png';
import starIcon from '../../assets/star.png';
import logoutIcon from '../../assets/login-variant.png';

const Navbar = ({ onSearch, onCategoryChange, activeCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 md:py-6 lg:px-12 bg-[#181A1C] transition-all">
      <div className="flex items-center gap-3 md:gap-8 lg:gap-12 lg:mx-14">
        <Link to="/home" onClick={() => { onCategoryChange?.(""); onSearch?.(""); }} className="focus:outline-none flex items-center">
          <img src={logo} alt="CHILL" className="h-5 md:h-6 lg:h-8" />
        </Link>
        <div className="flex items-center gap-3 md:gap-8 lg:gap-[80px] text-[10px] sm:text-xs md:text-sm lg:text-base font-medium">
          <Link 
            to="/home" 
            onClick={() => onCategoryChange?.("series")} 
            className={`transition ${activeCategory === "series" ? "text-[#09AA29] font-bold" : "text-white hover:text-gray-300"}`}
          >
            Series
          </Link>
          <Link 
            to="/home" 
            onClick={() => onCategoryChange?.("film")} 
            className={`transition ${activeCategory === "film" ? "text-[#09AA29] font-bold" : "text-white hover:text-gray-300"}`}
          >
            Film
          </Link>
          <Link to="/watchlist" className="text-white hover:text-gray-300 transition">Daftar Saya</Link>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 lg:mr-14">
        {onSearch !== undefined && (
          <div className="relative mr-2 md:mr-4">
            <input
              type="text"
              placeholder="Cari film..."
              onChange={(e) => onSearch?.(e.target.value)}
              className="bg-[#2C3033] text-white px-4 py-1.5 rounded-full text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#09AA29] w-32 sm:w-48 placeholder-gray-500"
            />
          </div>
        )}

        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 md:gap-2 focus:outline-none"
          >
            <img src={iconProfile} alt="Profile" className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border border-transparent hover:border-gray-500 transition" />
            <img src={arrowDown} alt="Menu" className={`h-3 w-3 md:h-4 md:w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 md:mt-3 w-36 md:w-48 bg-[#181A1C] border border-gray-800 rounded-lg shadow-2xl overflow-hidden py-1 md:py-2">
              <Link to="/profile" className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 text-white hover:bg-gray-800 transition">
                <img src={iconProfile} alt="" className="h-3 w-3 md:h-4 md:w-4 rounded-full" />
                <span className="text-xs md:text-sm">Profil Saya</span>
              </Link>
              <Link to="/premium" className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 text-white hover:bg-gray-800 transition">
                <img src={starIcon} alt="" className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">Ubah Premium</span>
              </Link>
              <hr className="border-gray-800 my-1 md:my-2" />
              <Link to="/" className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 text-white hover:bg-gray-800 transition">
                <img src={logoutIcon} alt="" className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">Keluar</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
