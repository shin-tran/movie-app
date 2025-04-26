import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex h-18 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <img
          src="./netflix-logo.png"
          alt="Netflix Logo"
          className="w-16 sm:w-28"
        />
        <a href="#">Phim</a>
        <a href="#">Truyền hình</a>
      </div>
      <div>
        <FaMagnifyingGlass className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
