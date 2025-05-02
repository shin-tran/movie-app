import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [loading, setLoading] = useState(true);

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
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-screen-xl px-6 py-10">
          <div className="flex-[2]">
            <ActorList />
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
