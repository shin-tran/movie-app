import React from "react";
import CircularProgressBar from "./CircularProgressBar";

const MovieCard = ({ title, releaseDate, poster, point, mediaType }) => {
  return (
    <div className="rounded-lg border border-slate-800 relative">
      {mediaType === "tv" && (
        <p className="absolute top-1 right-1 rounded bg-black p-1 text-sm text-white shadow-md font-bold">
          TV Show
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
      />
      <div className="relative -top-[30px] px-4">
        <CircularProgressBar
          persent={Math.round(point * 10)}
          size={3}
          strokeWidth={0.25}
          strokeColor={point >= 7 ? "green" : point >= 5 ? "yellow" : "red"}
        />
        <p className="mt-2-300 font-bold">{title}</p>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
