import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 right-0 left-0 z-50 flex items-center justify-between bg-black px-8 text-white transition-all duration-300 ${
        isScrolled
          ? "h-14 bg-black/80 py-2 shadow-lg backdrop-blur-sm"
          : "h-18 py-4"
      }`}
    >
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className={`object-cover transition-all duration-300 ${isScrolled ? "h-14 w-18 sm:w-20" : "h-18 w-20 sm:w-28"}`}
          />
        </Link>
        <Link
          to={"/search?mediaType=movie"}
          className="transition hover:text-gray-300"
        >
          Movie
        </Link>
        <Link
          to={"/search?mediaType=tv"}
          className="transition hover:text-gray-300"
        >
          TV Show
        </Link>
      </div>
      <div>
        <Link to={"/search"}>
          <FaMagnifyingGlass className="cursor-pointer transition hover:text-gray-300" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
