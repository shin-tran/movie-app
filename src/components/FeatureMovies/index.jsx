import React, { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [movieIndex, setMovieIndex] = useState(null);
  const [activeMovieId, setActiveMovieId] = useState(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const popularMovies = data.results.slice(0, 4);
        setMovies(popularMovies);
        setMovieIndex(0);
        setActiveMovieId(popularMovies[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const lastMovie = movies.length - 1;
    if (movieIndex < 0) setMovieIndex(lastMovie);
    if (movieIndex > lastMovie) setMovieIndex(0);
  }, [movies, movieIndex]);

  useEffect(() => {
    let movieSlider = setInterval(() => {
      setMovieIndex(movieIndex + 1);
    }, 5000);
    return () => clearInterval(movieSlider);
  }, [movieIndex]);

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
