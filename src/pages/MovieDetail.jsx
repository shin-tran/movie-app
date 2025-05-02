import React from "react";
import { FaPlay } from "react-icons/fa6";

const MovieDetail = () => {
  return (
    <div>
      <img src="https://image.tmdb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg" />
      <div>
        <img src="https://image.tmdb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg" />
        <div>
          <p>Test</p>
          <div>
            <span>G</span>
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
