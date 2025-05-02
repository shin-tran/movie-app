import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
    };

    setLoading(true);
    fetch(url, options)
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !movieInfo) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 == "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  return (
    <div className="relative overflow-hidden text-white">
      {movieInfo.backdrop_path && (
        <img
          className="absolute inset-0 brightness-[0.2]"
          src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
        />
      )}
      <div className="relative mx-auto flex max-w-5xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          {movieInfo.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieInfo.poster_path}`}
            />
          )}
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{movieInfo.title}</p>
          <div className="flex items-center gap-4">
            {certification && (
              <span className="border border-gray-400 p-1 text-gray-400">
                {certification}
              </span>
            )}
            {movieInfo.release_date && <p>{movieInfo.release_date}</p>}
            {movieInfo.genres && (
              <p>{movieInfo.genres.map((genre) => genre.name).join(", ")}</p>
            )}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                persent={Math.round(movieInfo.vote_average * 10) || 0}
                size={3.5}
                strokeWidth={0.3}
              />
            </div>
            <button>
              <FaPlay className="mr-1 inline-block" /> Trailer
            </button>
          </div>
          {movieInfo.overview && (
            <div className="mt-4">
              <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
              <p>{movieInfo.overview}</p>
            </div>
          )}
          <div className="mt-4 grid grid-cols-2 gap-2">
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
