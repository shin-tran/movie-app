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
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits`,
  });

  const { data: recommandationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedMovies = recommandationsResponse.results || [];

  if (isLoading) {
    return <Loading />;
  }

  const certification = (tvInfo.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (tvInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));

  return (
    <>
      <Banner
        title={tvInfo.name}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        releaseDate={tvInfo.first_air_date}
        genres={tvInfo.genres}
        point={tvInfo.vote_average}
        overview={tvInfo.overview}
        certification={certification}
        crews={crews}
      />
      <div className="bg-black text-[1.2vw] text-white xl:text-[0.9vw]">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList
              actors={(tvInfo.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episode_count: cast.roles[0]?.episode_count,
              }))}
            />
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
