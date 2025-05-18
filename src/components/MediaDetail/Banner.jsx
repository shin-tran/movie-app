import { groupBy } from "lodash";
import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import { FaPlay } from "react-icons/fa";

const Banner = ({ mediaInfo }) => {
  const certification = (
    (mediaInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 == "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const groupedCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden pt-16 text-white shadow-sm shadow-slate-800">
      {mediaInfo.backdrop_path && (
        <img
          className="absolute inset-0 w-full brightness-[0.2]"
          src={`https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path}`}
        />
      )}
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          {mediaInfo.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mediaInfo.poster_path}`}
              width={600}
              height={900}
            />
          )}
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{mediaInfo.title}</p>
          <div className="flex items-center gap-4">
            {certification && (
              <span className="border border-gray-400 p-1 text-gray-400">
                {certification}
              </span>
            )}
            {mediaInfo.release_date && <p>{mediaInfo.release_date}</p>}
            {mediaInfo.genres && (
              <p>{mediaInfo.genres.map((genre) => genre.name).join(", ")}</p>
            )}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                persent={Math.round(mediaInfo.vote_average * 10) || 0}
                size={3.5}
                strokeWidth={0.3}
              />
            </div>
            <button>
              <FaPlay className="mr-1 inline-block" /> Trailer
            </button>
          </div>
          {mediaInfo.overview && (
            <div className="mt-4">
              <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
              <p>{mediaInfo.overview}</p>
            </div>
          )}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
