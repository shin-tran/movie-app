import React from "react";
import { FaPlay } from "react-icons/fa6";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieDetail = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <img
        className="absolute inset-0 brightness-[0.2]"
        src="https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg"
      />
      <div className="relative mx-auto flex max-w-xl gap-6 lg:gap-8 px-6 py-10">
        <div className="flex-1">
          <img src="https://image.tmdb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg" />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">Test</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2024/11/11</p>
            <p>Fantasy, Adventure</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar persent={90} size={3.5} strokeWidth={0.3} />
            </div>
            <button>
              <FaPlay className="inline-block mr-1" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="font-bold text-[1.3vw] mb-2">Overview</p>
            <p>Afte...</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div>
              <p className="font-bold">Director</p>
              <p>Jennifer Phang</p>
            </div>
            <div>
              <p className="font-bold">Writer</p>
              <p>Jennifer Phang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
