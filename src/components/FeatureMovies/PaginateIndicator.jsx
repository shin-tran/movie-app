const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId, setMovieIndex }) => {
  const handleClick = (movieId) => {
    setActiveMovieId(movieId);
    const index = movies.findIndex(movie => movie.id === movieId);
    if (index !== -1) {
      setMovieIndex(index);
    }
  };

  return (
    <div className="absolute right-8 bottom-[10%] xl:right-24">
      <ul className="flex gap-1">
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"} xl:w-8`}
              onClick={() => handleClick(movie.id)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
