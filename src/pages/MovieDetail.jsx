import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
    useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then(async (res) => {
        const data = await res.json();
        const currRelatedMovies = (data.results || []).slice(0, 12);
        setRelatedMovies(currRelatedMovies);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsRelatedMovieListLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
        <span className="size-8 animate-spin rounded-full border-4 border-slate-900 border-t-slate-200"></span>
      </div>
    );
  }

  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white xl:text-[0.9vw]">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovies} />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">Information</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
