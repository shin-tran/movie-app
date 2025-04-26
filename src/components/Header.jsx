import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex items-center justify-between bg-slate-950 px-8 text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "h-14 py-2 bg-black/80 backdrop-blur-sm shadow-lg" : "h-18 py-4"
    }`}>
      <div className="flex items-center gap-4">
        <img
          src="./netflix-logo.png"
          alt="Netflix Logo"
          className={`transition-all duration-300 ${isScrolled ? "w-14 sm:w-20" : "w-16 sm:w-28"}`}
        />
        <a href="#" className="hover:text-gray-300 transition">Phim</a>
        <a href="#" className="hover:text-gray-300 transition">Truyền hình</a>
      </div>
      <div>
        <FaMagnifyingGlass className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
