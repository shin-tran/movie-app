import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
import { FaPlay } from "react-icons/fa";
import ImageComponent from "@components/Image";
import { useModalContext } from "@context/ModalProvider";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  genres,
  releaseDate,
  point = 0,
  overview,
  trailerVideoKey,
}) => {
  const { setIsShowing, setContent } = useModalContext();

  if (!title) return null;
  const groupedCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden bg-black pt-16 text-white shadow-sm shadow-slate-800">
      {backdropPath && (
        <ImageComponent
          className="absolute inset-0 aspect-video w-full brightness-[0.2]"
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          width={1200}
          height={800}
        />
      )}
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          {posterPath && (
            <ImageComponent
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`}
              width={600}
              height={900}
            />
          )}
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          <div className="flex items-center gap-4">
            {certification && (
              <span className="border border-gray-400 p-1 text-gray-400">
                {certification}
              </span>
            )}
            {releaseDate && <p>{releaseDate}</p>}
            {genres && <p>{genres.map((genre) => genre.name).join(", ")}</p>}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                persent={Math.round(point * 10) || 0}
                size={3.5}
                strokeWidth={0.3}
              />
            </div>
            <button
              className="cursor-pointer rounded transition hover:text-gray-300"
              onClick={() => {
                console.log(trailerVideoKey);
                setIsShowing(true);
                setContent(
                  <iframe
                    className="aspect-video w-[50vw]"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    title="Trailer"
                  />,
                );
              }}
            >
              <FaPlay className="mr-1 inline-block" /> Trailer
            </button>
          </div>
          {overview && (
            <div className="mt-4">
              <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
              <p>{overview}</p>
            </div>
          )}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
