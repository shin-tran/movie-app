import { useParams } from "react-router";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";
import TVShowInfomation from "@components/MediaDetail/TVShowInfomation";
import SeasonsList from "@components/MediaDetail/SeasonsList";
import { lazy, Suspense } from "react";

const RelatedMediaList = lazy(
  () => import("@components/MediaDetail/RelatedMediaList"),
);

const TVShowDetail = () => {
  const { id } = useParams();

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const { data: recommandationsResponse, isLoading: isRecommandationLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedTVShow = recommandationsResponse.results || [];

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
    .slice(0, 5)
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
        trailerVideoKey={
          (tvInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white xl:text-[0.9vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(tvInfo.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episode_count: cast.roles[0]?.episode_count,
              }))}
            />
            <SeasonsList seasons={[...(tvInfo.seasons || [])].reverse()} />
            <Suspense fallback={<Loading />}>
              <RelatedMediaList
                className={"mt-6"}
                mediaList={relatedTVShow}
                isLoading={isRecommandationLoading}
                title={"More Like This"}
              />
            </Suspense>
          </div>
          <div className="flex-1">
            <TVShowInfomation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TVShowDetail;
