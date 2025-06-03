import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/Image";
import { useState } from "react";

const SeasonsList = ({ seasons }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const seasonList = isShowMore ? seasons : seasons.slice(0, 4);

  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
      <div className="space-y-4">
        {seasonList.map((season) => {
          return (
            <div
              key={season.id}
              className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
            >
              <ImageComponent
                className="w-1/4 rounded-lg object-contain"
                width={130}
                height={195}
                src={
                  season.poster_path &&
                  `https://media.themoviedb.org/t/p/w300${season.poster_path}`
                }
              />
              <div className="space-y-1">
                <p className="text-[1.4vw] font-bold">{season.name}</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold">Rating</p>
                  <CircularProgressBar
                    persent={Math.round(season.vote_average * 10)}
                    size={2.5}
                    strokeWidth={0.2}
                  />
                </div>
                <p>
                  <span className="mr-1 font-bold">Release Date:</span>
                  {season.air_date === null ? "Sắp phát hành" : season.air_date}
                </p>
                <p>
                  {season.episode_count > 1
                    ? `${season.episode_count} Episodes`
                    : `${season.episode_count} Episode`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {seasons.length > 4 && (
        <p
          className={`mt-1 cursor-pointer transition hover:text-gray-300`}
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show Less" : "Show More"}
        </p>
      )}
    </div>
  );
};
export default SeasonsList;
