import { useParams } from "react-router";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInfomation from "@components/FeatureMovies/MovieInfomation";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";

const TVShowDetail = () => {
  const { id } = useParams();

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=release_dates,credits`,
  });

  const { data: recommandationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedMovies = recommandationsResponse.results || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Banner
        title={tvInfo.title}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        releaseDate={tvInfo.release_date}
        genres={tvInfo.genres}
        point={tvInfo.vote_average}
        overview={tvInfo.overview}
        // certification={certification}
        // crews={crews}
      />
      <div className="bg-black text-[1.2vw] text-white xl:text-[0.9vw]">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={tvInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovies}
              isLoading={isRelatedMoviesLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInfomation movieInfo={tvInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TVShowDetail;
