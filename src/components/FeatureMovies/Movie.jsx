import ImageComponent from "@components/Image";
import React from "react";
import { FaPlay } from "react-icons/fa6";

const Movie = (props) => {
  const {
    data: {
      backdrop_path = "",
      title = "",
      release_date = "",
      overview = "",
    } = {},
  } = props;
  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        className="aspect-video brightness-50 w-full"
        loading="lazy"
        width={900}
        height={500}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-[1.4vw] text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4">
            <button className="text-2.5 xl:text-4.5 mr-2 cursor-pointer rounded bg-white px-4 py-2 text-black lg:text-lg">
              <FaPlay className="inline-block" />
              Trailer
            </button>
            <button className="text-2.5 xl:text-4.5 cursor-pointer rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
