import ImageComponent from "@components/Image";
import React from "react";
import { Link } from "react-router";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      className="overflow-hidden rounded-lg border border-slate-300 bg-black text-white shadow-sm"
      to={`/people/${id}`}
    >
      <ImageComponent
        src={
          profilePath &&
          `https://image.tmdb.org/t/p/w276_and_h350_face${profilePath}`
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        {name && <p className="font-bold">{name}</p>}
        {character && <p>{character}</p>}
        {episodeCount && (
          <p>{`${episodeCount} ${episodeCount > 1 ? "Episodes" : "Episode"}`}</p>
        )}
      </div>
    </Link>
  );
};

export default ActorInfo;
