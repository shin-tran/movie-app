import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
      },
    };

    if (url) {
      fetch(url, options)
        .then(async (res) => {
          const data = await res.json();
          const trendingMediaList = data.results.slice(0, 12);
          setMediaList(trendingMediaList);
        })
        .catch((err) => console.error(err));
    }
  }, [tabs, activeTabId]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white px-3 py-1">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className={`cursor-pointer rounded ${tab.id === activeTabId ? "bg-white text-black" : null} px-2 py-1`}
                onClick={() => {
                  setActiveTabId(tab.id);
                }}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => {
          return (
            <MovieCard
              key={media.id}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaList;
