import { useParams } from "react-router";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import MovieInfomation from "@components/MediaDetail/MovieInfomation";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";
import { lazy, Suspense } from "react";

const RelatedMediaList = lazy(
  () => import("@components/MediaDetail/RelatedMediaList"),
);

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });

  const { data: recommandationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });

  const relatedMovies = recommandationsResponse.results || [];

  if (isLoading) {
    return <Loading />;
  }

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 == "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  return (
    <>
      <Banner
        title={movieInfo.title}
        backdropPath={movieInfo.backdrop_path}
        posterPath={movieInfo.poster_path}
        releaseDate={movieInfo.release_date}
        genres={movieInfo.genres}
        point={movieInfo.vote_average}
        overview={movieInfo.overview}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (movieInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white xl:text-[0.9vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <Suspense fallback={<Loading />}>
              <RelatedMediaList
                className={"mt-6"}
                mediaList={relatedMovies}
                isLoading={isRelatedMoviesLoading}
                title={"More Like This"}
              />
            </Suspense>
          </div>
          <div className="flex-1">
            <MovieInfomation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
