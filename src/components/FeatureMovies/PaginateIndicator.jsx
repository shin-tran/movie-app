const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  return (
    <div className="absolute right-8 bottom-[10%] xl:right-24">
      <ul className="flex gap-1">
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"} xl:w-8`}
              onClick={() => setActiveMovieId(movie.id)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
