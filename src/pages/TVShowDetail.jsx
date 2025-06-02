import { useParams } from "react-router";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import Loading from "@components/Loading";
import TVShowInfomation from "@components/MediaDetail/TVShowInfomation";
import SeasonsList from "@components/MediaDetail/SeasonsList";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const TVShowDetail = () => {
  const { id } = useParams();

  const [isVisible, setIsVisible] = useState(false);

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });

  const { data: recommandationsResponse, isLoading: isRecommandationLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          (tvInfo.videos?.results || []).find((video) => video.type === "Trailer")
            ?.key
        }
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
            <SeasonsList seasons={[...(tvInfo.seasons || [])].reverse()} />
            <RelatedMediaList
              mediaList={relatedTVShow}
              isLoading={isRecommandationLoading}
            />
          </div>
          <div className="flex-1">
            <TVShowInfomation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
      <button
        id="backToTopBtn"
        className={`${isVisible ? "flex" : "hidden"} fixed right-6 bottom-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition duration-300`}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default TVShowDetail;
