import React from "react";
import { Link } from "react-router";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./Image";

const MovieCard = ({ id, title, releaseDate, poster, point, mediaType }) => {
  return (
    <Link
      to={mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
            TV Show
          </p>
        )}
        <ImageComponent
          className={"w-full rounded-lg"}
          src={poster && `https://image.tmdb.org/t/p/w500${poster}`}
          width={210}
          height={300}
        />
        <div className="relative -top-[30px] px-4">
          <CircularProgressBar
            persent={Math.round(point * 10)}
            size={3}
            strokeWidth={0.25}
            strokeColor={point >= 7 ? "green" : point >= 5 ? "yellow" : "red"}
          />
          <p className="mt-2-300 overflow-hidden font-bold text-ellipsis whitespace-nowrap">
            {title}
          </p>
          <p>{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
