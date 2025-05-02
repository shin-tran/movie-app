import React from "react";
import { FaPlay } from "react-icons/fa6";

const MovieDetail = () => {
  return (
    <div className="relative text-white">
      <img
        className="absolute inset-0 brightness-[0.2]"
        src="https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg"
      />
      <div className="relative mx-auto flex max-w-xl gap-6 p-6">
        <div className="flex-1">
          <img src="https://image.tmdb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg" />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">Test</p>
          <div className="flex gap-4 items-center">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2024/11/11</p>
            <p>Fantasy, Adventure</p>
          </div>
          <div>
            <div>73 rating</div>
            <button>
              <FaPlay className="inline-block" /> Trailer
            </button>
          </div>
          <div>
            <p>Overview</p>
            <p>Afte...</p>
          </div>
          <div>
            <div>
              <p>Director</p>
              <p>Jennifer Phang</p>
            </div>
            <div>
              <p>Writer</p>
              <p>Jennifer Phang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
