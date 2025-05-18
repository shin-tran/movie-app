import React, { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
  const [movieIndex, setMovieIndex] = useState(null);
  const [activeMovieId, setActiveMovieId] = useState(null);
  const { data: popularMoviesResponse } = useFetch({ url: "/movie/popular" });
  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies.length > 0) {
      setActiveMovieId(movies[0].id);
    }
  }, [movies]);

  useEffect(() => {
    const lastMovie = movies.length - 1;
    if (movieIndex < 0) setMovieIndex(lastMovie);
    if (movieIndex > lastMovie) setMovieIndex(0);
  }, [movies, movieIndex]);

  // useEffect(() => {
  //   let movieSlider = setInterval(() => {
  //     setMovieIndex(movieIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(movieSlider);
  // }, [movieIndex]);

  useEffect(() => {
    if (
      movies.length > 0 &&
      movieIndex !== null &&
      movieIndex <= movies.length - 1
    ) {
      setActiveMovieId(movies[movieIndex].id);
    }
  }, [movieIndex, movies]);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return <Movie key={movie.id} data={movie} />;
        })}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
        setMovieIndex={setMovieIndex}
      />
    </div>
  );
};

export default FeatureMovies;
